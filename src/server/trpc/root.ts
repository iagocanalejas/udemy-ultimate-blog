import { createTRPCRouter } from "~/server/trpc/trpc";
import { authRouter } from "./router/auth";
import { commentRouter } from "./router/comment";
import { postRouter } from "./router/post";
import { suggestionsRouter } from "./router/suggestions";
import { tagRouter } from "./router/tag";
import { unsplashRouter } from "./router/unsplash";
import { userRouter } from "./router/user";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  post: postRouter,
  unsplash: unsplashRouter,
  tag: tagRouter,
  user: userRouter,
  comment: commentRouter,
  suggestions: suggestionsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
