import Link from "next/link";
import Links from "./links/Links";
import Image from "next/image";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="h-[100px] flex items-center justify-between">
      <Link href="/" className="logo text-3xl font-bold">
        Bravence
      </Link>
      <div className="links">
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
