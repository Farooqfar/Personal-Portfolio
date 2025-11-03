import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <>
      <nav className="flex justify-around items-center bg-black text-white pt-4">
        <ul className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-20"
          />
        </ul>
        <ul className="flex justify-center items-center gap-20">
          <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
            Home
          </li>
          <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
            Project
          </li>
          <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
            About Us
          </li>
          <li className="relative text-gray-200 text-lg hover:text-[#F86D00] cursor-pointer transition-all duration-300 before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:origin-left before:h-[2px] before:bg-[#F86D00] before:transition-all before:duration-300">
            Resume
          </li>
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
