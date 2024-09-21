"use client";

import { editUser } from "@/lib/actions";
import { useState } from "react";
import { useFormState } from "react-dom";

const EditUser = ({ user }) => {
  const [state, formAction] = useFormState(editUser, undefined);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

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
        <input type="hidden" name="id" value={user._id} />
        <h1 className="text-3xl text-white font-bold mb-10">Add New User</h1>
        <input
          type="text"
          name="username"
          defaultValue={user.username}
          placeholder="username"
          className="w-full p-3 mb-5 border-none outline-none rounded-md bg-bg text-text"
        />
        <input
          type="text"
          name="email"
          defaultValue={user.email}
          placeholder="email"
          className="w-full p-3 mb-5 border-none outline-none rounded-md bg-bg text-text"
        />
        <input
          type="text"
          name="img"
          defaultValue={user.img}
          placeholder="img"
          className="w-full p-3 resize-none mb-5 border-none outline-none rounded-md bg-bg text-text"
        />
        <select
          name="isAdmin"
          defaultValue={user.isAdmin}
          className="w-full p-3 resize-none mb-5 border-none outline-none rounded-md bg-bg text-text"
        >
          <option value="false">Is Admin?</option>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
        <div className="flex items-center gap-10">
          <button
            type="submit"
            disabled={state?.loading} // Disable while loading
            className="p-3 w-full font-bold border-none rounded-md text-text cursor-pointer bg-btn transition-all hover:bg-btnHover"
          >
            {state?.loading ? "Editing..." : "Edit"}
          </button>
          <span
            className="p-3 text-center w-full font-bold border-none rounded-md text-text cursor-pointer bg-red-400 transition-all"
            onClick={handleCancel}
          >
            Cancel
          </span>
        </div>
        {state?.error && <p className="text-red-400 mt-5">{state.error}</p>}
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

export default EditUser;
