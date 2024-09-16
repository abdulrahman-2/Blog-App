import Link from "next/link";
import Links from "./links/Links";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[100px] flex items-center justify-between">
      <Link href="/" className="logo text-3xl font-bold">
        <Image src="/logo-color.png" alt="logo" width={130} height={60} />
      </Link>
      <div className="links">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
