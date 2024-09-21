"use client";

import { addUser } from "@/lib/actions";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  useEffect(() => {
    if (state?.success) {
      toast.success("User Added successful!");
    }

    if (state?.error) {
      toast.error(state.error);
    }
  }, [state?.success, state?.error]);

  return (
    <form action={formAction} className="flex-1">
      <h1 className="text-3xl text-white font-bold mb-10">Add New User</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        className="w-full p-3 mb-5 border-none outline-none rounded-md bg-bgSoft text-text"
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        className="w-full p-3 mb-5 border-none outline-none rounded-md bg-bgSoft text-text"
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        className="w-full p-3 mb-5 border-none outline-none rounded-md bg-bgSoft text-text"
      />
      <input
        type="text"
        name="img"
        placeholder="img"
        rows={10}
        className="w-full p-3 resize-none mb-5 border-none outline-none rounded-md bg-bgSoft text-text"
      />
      <select
        name="isAdmin"
        className="w-full p-3 resize-none mb-5 border-none outline-none rounded-md bg-bgSoft text-text"
      >
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button className="p-3 mb-5 w-full font-bold border-none rounded-md text-text cursor-pointer bg-btn transition-all hover:bg-btnHover">
        Add
      </button>
      {/* <p className="text-red-400">{state?.error}</p> */}
    </form>
  );
};

export default AdminUserForm;
