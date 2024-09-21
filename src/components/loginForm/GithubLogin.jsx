import { handleGithubLogin } from "@/lib/actions";
import Image from "next/image";

const GithubLogin = () => {
  return (
    <form action={handleGithubLogin}>
      <button className="mb-5 flex items-center justify-center gap-5 p-3 w-full font-bold border-none rounded-md text-text cursor-pointer bg-btn transition-all hover:bg-btnHover">
        <div className="relative w-[20px] h-[20px]">
          <Image src="/github-mark-white.png" alt="" fill property />
        </div>
        Login With Github
      </button>
    </form>
  );
};

export default GithubLogin;
