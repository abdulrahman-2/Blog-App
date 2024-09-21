import { handleGoogleLogin } from "@/lib/actions";
import Image from "next/image";

const GoogleLogin = () => {
  return (
    <form action={handleGoogleLogin}>
      <button className="flex items-center justify-center gap-5 p-3 w-full font-bold border-none rounded-md text-text cursor-pointer bg-btn transition-all hover:bg-btnHover">
        <div className="relative w-[20px] h-[20px]">
          <Image src="/Google__G__logo.svg.png" alt="" fill property />
        </div>
        Login With Google
      </button>
    </form>
  );
};

export default GoogleLogin;
