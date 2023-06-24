import { TRPCError } from "@trpc/server";
import slugify from "slugify";
import { WriteFormTypeSchema } from "~/components/WriteFormModal";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx: { prisma } }) => {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            name: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return posts;
  }),
  createPost: protectedProcedure
    .input(WriteFormTypeSchema)
    .mutation(async ({ ctx: { prisma, session }, input }) => {
      const { title, description, body } = input;

      const existing = await prisma.post.findUnique({
        where: {
          title,
        },
      });
      if (existing)
        throw new TRPCError({
          code: "CONFLICT",
          message: "post with this title already exists!",
        });

      return await prisma.post.create({
        data: {
          title,
          description,
          text: body,
          slug: slugify(title),
          author: {
            connect: {
              id: session.user.id,
            },
          },
        },
      });
    }),
});
