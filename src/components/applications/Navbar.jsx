import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav
        className={`relative top-0 flex justify-between items-center text-white pt-4 p-10  backdrop-blur-sm z-10 w-full max-lg:p-2   max-lg:gap-3 ${
          menu ? "max-lg:flex-col max-lg:h-screen" : ""
        }`}
      >
        <ul className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-20"
          />
        </ul>
        <ul
          className={`flex justify-center items-center gap-10 max-lg:gap-5  ${
            menu ? "max-lg:flex-col " : "max-lg:hidden"
          }`}
        >
          <Link href="#home" onClick={() => setMenu(false)}>
            <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
              Home
            </li>
          </Link>
          <Link href="#project" onClick={() => setMenu(false)}>
            <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
              Project
            </li>
          </Link>
          <Link href="#skills" onClick={() => setMenu(false)}>
            <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
              Skills
            </li>
          </Link>
          <Link href="#services" onClick={() => setMenu(false)}>
            <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
              Services
            </li>
          </Link>
          <Link href="#aboutme" onClick={() => setMenu(false)}>
            <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
              About Me
            </li>
          </Link>
          <Link href="#resume" onClick={() => setMenu(false)}>
            <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
              Resume
            </li>
          </Link>
          <Link href="#contactme" onClick={() => setMenu(false)}>
            <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
              Contact Me
            </li>
          </Link>
        </ul>
        <ul>
          <button
            className={`bg-[#F86D00] p-1 w-24 rounded hover:scale-105 transition-all duration-200 cursor-pointer ${
              menu ? "max-lg:block" : "max-lg:hidden"
            }`}
            onClick={() => setMenu(false)}
          >
            Hire me
          </button>
        </ul>
        <ul className="absolute top-5 right-2 hidden max-lg:flex">
          <button onClick={() => setMenu(!menu)}>
            <CiMenuFries
              className={`text-2xl cursor-pointer ${menu ? "hidden" : "block"}`}
            />
            <IoMdClose
              className={`text-2xl cursor-pointer ${menu ? "block" : "hidden"}`}
            />
          </button>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
