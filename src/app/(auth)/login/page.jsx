import GithubLogin from "@/components/loginForm/GithubLogin";
import GoogleLogin from "@/components/loginForm/GoogleLogin";
import LoginForm from "@/components/loginForm/LoginForm";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="my-20 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-[200px]">
      <div className="lg:flex-1 relative w-full h-[500px]">
        <Image
          src="/undraw_mobile_login_re_9ntv.svg"
          alt="login"
          fill
          priority
        />
      </div>
      <div className="w-full lg:flex-1 py-12 px-5 rounded-xl bg-bgSoft">
        <h1 className="text-4xl text-white font-bold mb-10 text-center">
          Login
        </h1>
        <LoginForm />
        <GithubLogin />
        <GoogleLogin />

        <Link
          href="/register"
          className="flex items-center justify-center mt-5"
        >
          Dont&apos;t Have an account? <b>Register</b>
        </Link>
      </div>
    </div>
  );
};

export default Login;
