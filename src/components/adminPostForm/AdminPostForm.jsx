"use client";

import { addPost } from "@/lib/actions";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className="flex-1">
      <h1 className="text-3xl text-white font-bold mb-10">Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="w-full p-3 mb-5 border-none outline-none rounded-md bg-bgSoft text-text"
      />
      <input
        type="text"
        name="slug"
        placeholder="slug"
        className="w-full p-3 mb-5 border-none outline-none rounded-md bg-bgSoft text-text"
      />
      <input
        type="text"
        name="img"
        placeholder="img"
        className="w-full p-3 mb-5 border-none outline-none rounded-md bg-bgSoft text-text"
      />
      <textarea
        type="text"
        name="desc"
        placeholder="desc"
        rows={6}
        className="w-full p-3 resize-none mb-5 border-none outline-none rounded-md bg-bgSoft text-text"
      />
      <button className="p-3 mb-5 w-full font-bold border-none rounded-md text-text cursor-pointer bg-btn transition-all hover:bg-btnHover">
        Add
      </button>
      <p className="text-red-400">{state?.error}</p>
    </form>
  );
};

export default AdminPostForm;
