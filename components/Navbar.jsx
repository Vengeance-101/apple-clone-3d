import { navLists } from "@/constants/data";
import { appleImg, bagImg, searchImg } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full py-5 h-auto max-sm:py-10 px-5   flex justify-between items-center">
      <nav className="w-full h-auto flex justify-between screen-max-width">
        <Image src={appleImg} alt="logo" width={14} height={18} />
        <div className=" flex flex-1 justify-center max-sm:hidden ">
          {navLists.map((nav) => (
            <Link
              href="#"
              className="px-5 text-sm text-[gray] hover:text-white transition-all duration-200 ease-in-out  "
              key={nav}
            >
              {nav}
            </Link>
          ))}
        </div>

        <div className="flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1">
          <Image
            className="cursor-pointer"
            src={searchImg}
            alt="search"
            width={18}
            height={18}
          />
          <Image
            className="cursor-pointer"
            src={bagImg}
            alt="search"
            width={18}
            height={18}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
