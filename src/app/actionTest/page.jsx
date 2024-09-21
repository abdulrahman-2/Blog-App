import { addPost, deletePost } from "@/lib/actions";
import React from "react";

const Action = () => {
  return (
    <div>
      <form action={addPost} className="flex flex-col gap-7">
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="slug" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Create</button>
      </form>
      <form action={deletePost}>
        <input type="text" name="id" />
        <button>delete</button>
      </form>
    </div>
  );
};

export default Action;
