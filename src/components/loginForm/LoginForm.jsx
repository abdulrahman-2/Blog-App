"use client";

import { Login } from "@/lib/actions";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

const LoginForm = () => {
  const [state, formAction] = useFormState(Login, undefined);

  useEffect(() => {
    if (state?.success) {
      toast.success("Login successful!");
    }

    if (state?.error) {
      toast.error(state.error);
    }
  }, [state?.success, state?.error]);
  return (
    <form action={formAction} className="flex flex-col items-center gap-5">
      <input
        type="email"
        placeholder="email"
        name="email"
        className="w-full p-3 border-none outline-none rounded-md bg-bg text-text"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="w-full p-3 border-none outline-none rounded-md bg-bg text-text"
      />
      <button className="p-3 w-full font-bold border-none rounded-md text-text cursor-pointer bg-btn transition-all hover:bg-btnHover">
        Login
      </button>

      {/* <p className="text-red-400">{state?.error}</p> */}

      <div className="w-full">
        <div className="mb-5 flex items-center gap-5">
          <span className="h-[1px] w-full bg-white rounded-md"></span>
          <span className="text-[20px] font-bold text-white">Or</span>
          <span className="h-[1px] w-full bg-white rounded-md"></span>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
