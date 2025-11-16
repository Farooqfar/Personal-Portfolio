import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <>
      <nav className="relative top-0 flex justify-between items-center text-white pt-4 p-10  backdrop-blur-sm z-10 max-lg:flex-col w-full h-screen max-lg:gap-3">
        <ul className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-20"
          />
        </ul>
        <ul className="flex justify-center items-center gap-10 max-lg:flex-col">
          <Link href="#home">
            <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
              Home
            </li>
          </Link>
          <Link href="#project">
            <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
              Project
            </li>
          </Link>
          <Link href="#skills">
            <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
              Skills
            </li>
          </Link>
          <Link href="#services">
            <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
              Services
            </li>
          </Link>
          <Link href="#aboutme">
            <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
              About Me
            </li>
          </Link>
          <Link href="#resume">
            <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
              Resume
            </li>
          </Link>
          <Link href="#contactme" scroll={false}>
            <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
              Contact Me
            </li>
          </Link>
        </ul>
        <ul>
          <button className="bg-[#F86D00] p-1 w-24 rounded hover:scale-105 transition-all duration-200 cursor-pointer">
            Hire me
          </button>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
