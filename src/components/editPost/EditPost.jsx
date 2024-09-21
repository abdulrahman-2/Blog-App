"use client";

import { editPost } from "@/lib/actions";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

const EditPost = ({ post }) => {
  const [state, formAction] = useFormState(editPost, undefined);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (state?.success) {
      toast.success("Post Edited successfully!");
    }

    if (state?.error) {
      toast.error(state.error);
    }
  }, [state?.success, state?.error]);
  return (
    <div>
      <form
        action={formAction}
        className={`bg-bgSoft p-5 md:p-6 lg:p-8 rounded-lg fixed w-[360px] md:w-[500px] lg:w-[700px] z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
          open ? "block" : "hidden"
        }`}
        aria-live="assertive"
      >
        <h1 className="text-2xl text-white font-bold mb-3 text-center">
          Edit Post
        </h1>
        <input type="hidden" name="id" value={post._id} />
        <input
          type="text"
          name="title"
          defaultValue={post.title}
          placeholder="Title"
          className="w-full p-3 mb-5 border-none outline-none rounded-md bg-bg text-text"
          required
        />
        <input
          type="text"
          name="slug"
          defaultValue={post.slug}
          placeholder="Slug"
          className="w-full p-3 mb-5 border-none outline-none rounded-md bg-bg text-text"
        />
        <input
          type="text"
          name="img"
          defaultValue={post.img}
          placeholder="Image URL"
          className="w-full p-3 mb-5 border-none outline-none rounded-md bg-bg text-text"
        />
        <textarea
          name="desc"
          defaultValue={post.desc}
          placeholder="Description"
          rows={6}
          className="w-full p-3 resize-none mb-5 border-none outline-none rounded-md bg-bg text-text"
        />
        <div className="flex items-center gap-10">
          <button
            type="submit"
            className="p-3 w-full font-bold border-none rounded-md text-text cursor-pointer bg-btn transition-all hover:bg-btnHover"
          >
            Edit
          </button>
          <span
            className="p-3 text-center w-full font-bold border-none rounded-md text-text cursor-pointer bg-red-400 transition-all"
            onClick={handleCancel}
          >
            Cancel
          </span>
        </div>
        {/* {state?.error && <p className="text-red-400 mt-5">{state.error}</p>} */}
      </form>
      <button
        className="py-[5px] px-[10px] text-text bg-btn hover:bg-btnHover font-bold rounded-md border-none"
        onClick={handleOpen}
      >
        Edit
      </button>
    </div>
  );
};

export default EditPost;
