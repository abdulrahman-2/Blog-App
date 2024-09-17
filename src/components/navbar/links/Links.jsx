"use client";

import { useState } from "react";
import NavLink from "./navLink/NavLink";
import Image from "next/image";

const Links = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className="flex items-center">
      <div className="hidden md:flex items-center gap-[10px]">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}

        {session ? (
          <>
            {isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}
            <button className="p-[10px] font-medium cursor-pointer bg-white text-black rounded-lg">
              Logout
            </button>
          </>
        ) : (
          <NavLink link={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <Image
        className="block md:hidden cursor-pointer"
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        onClick={handleOpen}
      />

      {open && (
        <div className="absolute z-10 top-[100px] right-0 h-[calc(100vh-100px)] w-[250px] shadow-lg bg-bg transition-transform duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center mt-6 md:mt-0 gap-10">
            {links.map((link) => (
              <NavLink link={link} key={link.title} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;
