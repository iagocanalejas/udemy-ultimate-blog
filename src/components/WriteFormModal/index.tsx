import React, { useContext } from "react";
import Modal from "../Modal";
import { GlobalContext } from "~/contexts/GlobalContextProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const WriteFormTypeSchema = z.object({
  title: z.string().min(20),
  description: z.string().min(60),
  body: z.string().min(100),
});

type WriteFormType = z.infer<typeof WriteFormTypeSchema>;

const WriteModalForm = () => {
  const { isWriteModalOpen, setWriteModalOpen } = useContext(GlobalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WriteFormType>({
    resolver: zodResolver(WriteFormTypeSchema),
  });
  const onSubmit = (data: WriteFormType) => console.log(data);

  return (
    <Modal isOpen={isWriteModalOpen} onClose={() => setWriteModalOpen(false)}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center"
      >
        <input
          type="text"
          id="title"
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Title of the puto"
          {...register("title")}
        />
        <p className="pb-5 text-left text-sm text-red-500">
          {errors.title?.message}
        </p>
        <input
          type="text"
          id="description"
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Description of the puto"
          {...register("description")}
        />
        <p className="pb-5 text-left text-sm text-red-500">
          {errors.description?.message}
        </p>

        <textarea
          id="body"
          cols={10}
          rows={10}
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Body of the puto"
          {...register("body")}
        ></textarea>
        <p className="pb-5 text-left text-sm text-red-500">
          {errors.body?.message}
        </p>

        <div className="flex w-full justify-end">
          <button
            className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900"
            type="submit"
          >
            Publish
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default WriteModalForm;
