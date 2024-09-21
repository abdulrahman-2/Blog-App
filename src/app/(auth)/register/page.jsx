import RegisterForm from "@/components/registerForm/RegisterForm";
import Image from "next/image";

const Register = () => {
  return (
    <div className="my-20 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-[200px]">
      <div className="lg:flex-1 relative w-full h-[500px]">
        <Image
          src="/undraw_access_account_re_8spm (1).svg"
          alt="login"
          fill
          priority
        />
      </div>
      <div className="w-full lg:flex-1 py-12 px-5 rounded-xl bg-bgSoft">
        <h1 className="text-4xl text-white font-bold mb-10 text-center">
          Sign Up
        </h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
