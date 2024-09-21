"use client";

import { register } from "@/lib/actions";
import { useFormState } from "react-dom";
// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
// import React, { useRef } from "react";

const RegisterForm = () => {
  // const fileInputRef = useRef(null);

  // Function to trigger the file input click
  // const handleImageClick = () => {
  //   fileInputRef.current.click();
  // };

  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      toast.success("Registration successful!");
      router.push("/login");
    }

    if (state?.error) {
      toast.error(state.error);
    }
  }, [state?.success, state?.error, router]);

  return (
    <form action={formAction} className="flex flex-col items-center gap-5">
      {/* <div className="flex flex-col items-center justify-center">
        <input
          type="file"
          name="img"
          id="img"
          ref={fileInputRef}
          className="hidden"
        />

        <div
          className="relative w-[100px] md:w-[130px] h-[100px] md:h-[130px] rounded-full cursor-pointer"
          onClick={handleImageClick}
        >
          <Image
            src="/add-avatar-main.svg"
            alt="avatar"
            fill
            priority
            className="object-contain rounded-full"
          />
        </div>

        <label htmlFor="img" className="cursor-pointer">
          Upload an image
        </label>
      </div> */}

      <input
        type="text"
        placeholder="username"
        name="username"
        className="w-full p-3 border-none outline-none rounded-md bg-bg text-text"
      />
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
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
        className="w-full p-3 border-none outline-none rounded-md bg-bg text-text"
      />
      <button className="p-3 w-full font-bold border-none rounded-md text-text cursor-pointer bg-btn transition-all hover:bg-btnHover">
        Register
      </button>
      {/* <p className="text-red-400">{state?.error}</p> */}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
