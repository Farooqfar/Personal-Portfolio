import Navbar from "@/components/applications/Navbar";
import { Button } from "@/components/ui/button";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { MdDeveloperMode } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className=" w-full h-screen">
        {/* 
          Hero Section – Eye-catching intro

          About Me – Quick background and passion

          Skills / Tech Stack – Show your tools and expertise

          Projects – Showcase your top work

          Education – Your academic foundation

          Testimonials – Social proof and credibility

          Contact / Footer – Invite collaboration
          */}
        <Navbar />
        <main className="flex w-[100%] flex-row max-lg:flex-col">
          <section className=" p-10 w-[50%] max-lg:w-[100%]">
            <h1 className="text-gray-200 text-2xl">
              Hi I am <br /> Muhammad Farooq
            </h1>
            <h1 className="uppercase text-5xl font-bold text-[#E86600] mt-5">
              website developer
            </h1>
            <div className="flex gap-3 mt-5">
              <a href="#">
                <RiInstagramFill className="text-red-700 text-xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-blue-400 text-xl" />
              </a>
            </div>
            <div className="flex gap-4 mt-5">
              <a
                href="#"
                className="bg-[#E66500] text-center text-white w-26 p-2 rounded transition-all duration-300 hover:scale-90"
              >
                Hire me
              </a>

              <a
                href="#"
                download
                className="border-1 border-gray-400 text-white w-32 p-2 text-center rounded hover:bg-[#F86D00] hover:scale-90 tranistion-all duration-300 hover:border-black"
              >
                Download CV
              </a>
            </div>

            <div className="w-[100%] flex mt-16">
              <div className="bg-[#1C1B1B] w-42 p-3 text-start">
                <h1 className="text-[#E66500] text-2xl font-bold pb-2">1+</h1>
                <h2 className="text-white pb-2">Experience</h2>
              </div>
              <div className="bg-[#1C1B1B] w-42 p-3 text-start border-l-2 border-r-2 border-[#383736]">
                <h1 className="text-[#E66500] text-2xl font-bold pb-2">13+</h1>
                <h2 className="text-white pb-2 ">Project done</h2>
              </div>
              <div className="bg-[#1C1B1B] w-42 p-3 text-start">
                <h1 className="text-[#E66500] text-2xl font-bold pb-2">15+</h1>
                <h2 className="text-white pb-2">Happy Clients</h2>
              </div>
            </div>
          </section>
          <section className="relative w-[50%] max-lg:w-[100%]">
            <Image
              src=""
              width={100}
              height={100}
              alt="Profile"
              className="absolute"
            />
          </section>
        </main>
        {/* ----------- About Me ----------- */}
        <section className="w-[100%] flex flex-col justify-center items-center">
          <h1 className="text-6xl text-[#e86600]">About me</h1>
          <div className="w-[100%] flex justify-center items-center max-md:flex-col">
            <div className="p-10 w-[60%] text-[#A1A1A1] max-md:w-[100%]">
              <h1 className="text-2xl">
                I’m Muhammad Farooq, a passionate Full Stack Developer
                specializing in Next.js, React, and Tailwind CSS.
              </h1>
              <br />
              <h1 className="text-2xl">
                I love building fast, dynamic, and scalable web applications
                that blend clean code with modern design. My focus is on
                creating seamless user experiences and efficient back-end logic
                using tools like Next.js API routes, Node.js, and MongoDB.
              </h1>
              <br />
              <h1 className="text-2xl">
                I enjoy turning complex problems into simple, elegant solutions
                — from crafting responsive UIs to managing data flow and APIs.
                I’m always learning, exploring new technologies, and improving
                my skills to stay ahead in the ever-evolving web ecosystem.
              </h1>
              <br />
              <h1 className="text-2xl">
                My mission is to deliver high-quality, performance-driven
                digital products that make a real impact.
              </h1>
              <br />
              <a
                href="#"
                className="absolute bg-[#E86600] text-black text-center p-1 w-32 rounded hover:scale-105 transition-all duration-200 cursor-pointer "
              >
                Linkdin
              </a>
            </div>
            <div className="w-[50%] max-md:w-[100%]">hello</div>
          </div>
        </section>
        {/* ----------- Projects ----------- */}
        <section className="w-full h-auto flex justify-center items-center flex-col">
          <h1 className="text-[#E86600] text-6xl text-center">Projects</h1>
          <div className="mt-10 w-[100%] h-auto grid grid-cols-3 place-items-center gap-5 max-lg:grid-cols-1 ">
            <div className="group border hover:scale-105 relative w-100 h-auto p-4 flex flex-col justify-around items-start gap-4 rounded  hover:bg-gradient-to-r from-black to-gray-900 transition-all duration-300 hover:shadow-2xl   ">
              <div className="w-[100%]">
                <Image
                  src="/pro.jpeg"
                  alt="projects"
                  width={100}
                  height={100}
                  className="w-full"
                />
              </div>
              <div className="text-start">
                <h1 className="text-2xl">Title</h1>
                <h1 className="text-xl text-gray-400">E-Commerce Platform</h1>
              </div>
              <div>
                <h1 className="text-2xl">Description</h1>
                <p className="text-gray-400">something</p>
              </div>
              <div className="w-[100%] flex justify-between items-center">
                <a
                  href="#"
                  className="bottom-1 bg-blue-500 text-center p-1 w-28 rounded hover:scale-105 transition-all duration-200 cursor-pointer "
                >
                  Read more...
                </a>
                <a
                  href="#"
                  className="bottom-1 bg-[#F86D00] text-center p-1 w-24 rounded hover:scale-105 transition-all duration-200 cursor-pointer "
                >
                  Visit
                </a>
              </div>
            </div>
            <div className="group border hover:scale-105 relative w-100 h-auto p-4 flex flex-col justify-around items-start gap-4 rounded  hover:bg-gradient-to-r from-black to-gray-900 transition-all duration-300 hover:shadow-2xl   ">
              <div className="w-[100%]">
                <Image
                  src="/pro.jpeg"
                  alt="projects"
                  width={100}
                  height={100}
                  className="w-full"
                />
              </div>
              <div className="text-start">
                <h1 className="text-2xl">Title</h1>
                <h1 className="text-xl text-gray-400">E-Commerce Platform</h1>
              </div>
              <div>
                <h1 className="text-2xl">Description</h1>
                <p className="text-gray-400">something</p>
              </div>
              <div className="w-[100%] flex justify-between items-center">
                <a
                  href="#"
                  className="bottom-1 bg-blue-500 text-center p-1 w-28 rounded hover:scale-105 transition-all duration-200 cursor-pointer "
                >
                  Read more...
                </a>
                <a
                  href="#"
                  className="bottom-1 bg-[#F86D00] text-center p-1 w-24 rounded hover:scale-105 transition-all duration-200 cursor-pointer "
                >
                  Visit
                </a>
              </div>
            </div>
            <div className="group border hover:scale-105 relative w-100 h-auto p-4 flex flex-col justify-around items-start gap-4 rounded  hover:bg-gradient-to-r from-black to-gray-900 transition-all duration-300 hover:shadow-2xl   ">
              <div className="w-[100%]">
                <Image
                  src="/pro.jpeg"
                  alt="projects"
                  width={100}
                  height={100}
                  className="w-full"
                />
              </div>
              <div className="text-start">
                <h1 className="text-2xl">Title</h1>
                <h1 className="text-xl text-gray-400">E-Commerce Platform</h1>
              </div>
              <div>
                <h1 className="text-2xl">Description</h1>
                <p className="text-gray-400">something</p>
              </div>
              <div className="w-[100%] flex justify-between items-center">
                <a
                  href="#"
                  className="bottom-1 bg-blue-500 text-center p-1 w-28 rounded hover:scale-105 transition-all duration-200 cursor-pointer "
                >
                  Read more...
                </a>
                <a
                  href="#"
                  className="bottom-1 bg-[#F86D00] text-center p-1 w-24 rounded hover:scale-105 transition-all duration-200 cursor-pointer "
                >
                  Visit
                </a>
              </div>
            </div>
            <div className="group border hover:scale-105 relative w-100 h-auto p-4 flex flex-col justify-around items-start gap-4 rounded  hover:bg-gradient-to-r from-black to-gray-900 transition-all duration-300 hover:shadow-2xl   ">
              <div className="w-[100%]">
                <Image
                  src="/pro.jpeg"
                  alt="projects"
                  width={100}
                  height={100}
                  className="w-full"
                />
              </div>
              <div className="text-start">
                <h1 className="text-2xl">Title</h1>
                <h1 className="text-xl text-gray-400">E-Commerce Platform</h1>
              </div>
              <div>
                <h1 className="text-2xl">Description</h1>
                <p className="text-gray-400">something</p>
              </div>
              <div className="w-[100%] flex justify-between items-center">
                <a
                  href="#"
                  className="bottom-1 bg-blue-500 text-center p-1 w-28 rounded hover:scale-105 transition-all duration-200 cursor-pointer "
                >
                  Read more...
                </a>
                <a
                  href="#"
                  className="bottom-1 bg-[#F86D00] text-center p-1 w-24 rounded hover:scale-105 transition-all duration-200 cursor-pointer "
                >
                  Visit
                </a>
              </div>
            </div>
            <div className="group border hover:scale-105 relative w-100 h-auto p-4 flex flex-col justify-around items-start gap-4 rounded  hover:bg-gradient-to-r from-black to-gray-900 transition-all duration-300 hover:shadow-2xl   ">
              <div className="w-[100%]">
                <Image
                  src="/pro.jpeg"
                  alt="projects"
                  width={100}
                  height={100}
                  className="w-full"
                />
              </div>
              <div className="text-start">
                <h1 className="text-2xl">Title</h1>
                <h1 className="text-xl text-gray-400">E-Commerce Platform</h1>
              </div>
              <div>
                <h1 className="text-2xl">Description</h1>
                <p className="text-gray-400">something</p>
              </div>
              <div className="w-[100%] flex justify-between items-center">
                <a
                  href="#"
                  className="bottom-1 bg-blue-500 text-center p-1 w-28 rounded hover:scale-105 transition-all duration-200 cursor-pointer "
                >
                  Read more...
                </a>
                <a
                  href="#"
                  className="bottom-1 bg-[#F86D00] text-center p-1 w-24 rounded hover:scale-105 transition-all duration-200 cursor-pointer "
                >
                  Visit
                </a>
              </div>
            </div>
            <div className="group border hover:scale-105 relative w-100 h-auto p-4 flex flex-col justify-around items-start gap-4 rounded  hover:bg-gradient-to-r from-black to-gray-900 transition-all duration-300 hover:shadow-2xl   ">
              <div className="w-[100%]">
                <Image
                  src="/pro.jpeg"
                  alt="projects"
                  width={100}
                  height={100}
                  className="w-full"
                />
              </div>
              <div className="text-start">
                <h1 className="text-2xl">Title</h1>
                <h1 className="text-xl text-gray-400">E-Commerce Platform</h1>
              </div>
              <div>
                <h1 className="text-2xl">Description</h1>
                <p className="text-gray-400">something</p>
              </div>
              <div className="w-[100%] flex justify-between items-center">
                <a
                  href="#"
                  className="bottom-1 bg-blue-500 text-center p-1 w-28 rounded hover:scale-105 transition-all duration-200 cursor-pointer "
                >
                  Read more...
                </a>
                <a
                  href="#"
                  className="bottom-1 bg-[#F86D00] text-center p-1 w-24 rounded hover:scale-105 transition-all duration-200 cursor-pointer "
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ---------- Skills ------------- */}
        <section className="mt-10 flex justify-center items-center flex-col">
          <h1 className="text-[#e86600] text-6xl">Skills</h1>
          <div className="mt-10 flex justify-center items-center w-full gap-10 max-md:flex-col">
            <div className="w-100 flex flex-col justify-center items-center text-center border p-5 gap-4">
              <MdDeveloperMode className="text-[#e86600] text-7xl" />
              <h1 className="text-2xl">Frontend Developer</h1>
              <p className="text-gray-400">
                Building fast, responsive, and SEO-friendly web apps using
                Next.js, React, and Tailwind CSS — focused on clean design and
                smooth user experience.
              </p>
            </div>
            <div className="w-100 flex flex-col justify-center items-center text-center border p-5 gap-4">
              <FaDatabase className="text-[#e86600] text-7xl" />
              <h1 className="text-2xl">Backend Developer</h1>
              <p className="text-gray-400">
                Experienced in building secure, scalable, and efficient
                server-side applications using Node.js, Express, and databases
                like MongoDB
              </p>
            </div>
          </div>
          <div className="w-full h-auto flex justify-center items-center flex-wrap gap-4 mt-5">
            <FaHtml5 className="text-5xl  hover:scale-105 transition-all duration-300 " />
            <FaCss3Alt className="text-5xl  hover:scale-105 transition-all duration-300" />
            <RiTailwindCssFill className="text-5xl hover:scale-105 transition-all duration-300 " />
            <FaJsSquare className="text-5xl hover:scale-105 transition-all duration-300 " />
            <FaReact className="text-5xl  hover:scale-105 transition-all duration-300" />
            <RiNextjsFill className="text-5xl  hover:scale-105 transition-all duration-300" />
            <SiExpress className="text-5xl  hover:scale-105 transition-all duration-300" />
            <FaNodeJs className="text-5xl  hover:scale-105 transition-all duration-300" />
            <SiMongodb className="text-5xl hover:scale-105 transition-all duration-300 " />
          </div>
        </section>
      </main>
    </>
  );
}
