"use client";
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
import { FaPhoneAlt } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";

import { MdMarkEmailUnread } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });
  const handleFormValue = (e) => {
    let { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <>
      <main className=" w-full h-screen selection:bg-amber-600 selection:text-gray-300">
       
        <Navbar />
        <main className="flex w-[100%] h-[80%] flex-row max-lg:flex-col p-10">
          <section className="w-[50%] max-lg:w-[100%]">
            <h1 className="text-gray-200 text-2xl">
              Hi I am <br /> Muhammad Farooq
            </h1>
            <h1 className="uppercase text-6xl font-bold text-[#E86600] mt-5">
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
          <section className="relative w-[50%] max-lg:w-[100%] flex justify-center items-center">
            <Image
              src="/profile.jpg"
              width={100}
              height={100}
              alt="Profile"
              className=""
            />
          </section>
        </main>

        {/* ----------- Projects ----------- */}
        <section className="mt-20 w-full h-auto flex justify-center items-center flex-col">
          <h1 className="text-[#E86600] text-6xl text-center uppercase font-bold">
            My Projects
          </h1>
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
        <section className="mt-10 w-full h-auto flex justify-center items-center flex-col">
          <h1 className="text-[#e86600] text-6xl uppercase font-bold">
            My Skills
          </h1>
          <div className="mt-5 w-full flex justify-around items-start max-md:flex-col">
            <div className="w-full flex flex-col gap-5 justify-center items-center">
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-red-500">HTML</p>
                  <p className="text-red-500">90%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-3 rounded-2xl">
                  <div className="w-[90%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-blue-400">CSS</p>
                  <p className="text-blue-400">80%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-3 rounded-2xl">
                  <div className="w-[80%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-blue-500">Tailwind</p>
                  <p className="text-blue-400">80%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-3 rounded-2xl">
                  <div className="w-[80%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-yellow-500">JS</p>
                  <p className="text-yellow-500">85%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-3 rounded-2xl">
                  <div className="w-[85%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-blue-500">React</p>
                  <p className="text-blue-500">84%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-3 rounded-2xl">
                  <div className="w-[84%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-5 justify-center items-center">
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-gray-300">Next Js</p>
                  <p className="text-gray-300">75%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-3 rounded-2xl">
                  <div className="w-[75%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-green-500">Node JS</p>
                  <p className="text-green-500">85%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-3 rounded-2xl">
                  <div className="w-[85%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-green-500">Express JS</p>
                  <p className="text-green-500">80%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-3 rounded-2xl">
                  <div className="w-[80%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-green-500">MongoDB</p>
                  <p className="text-green-500">85%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-3 rounded-2xl">
                  <div className="w-[85%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-green-500">Shopify</p>
                  <p className="text-green-500">75%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-3 rounded-2xl">
                  <div className="w-[75%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ---------- Services ------------- */}
        <section className="mt-10 flex justify-center items-center flex-col">
          <h1 className="text-[#e86600] text-6xl uppercase font-bold">
            Service
          </h1>
          <div className="mt-10 flex justify-center items-center w-full gap-10 max-md:flex-col">
            <div className="w-100 h-74 flex flex-col justify-center items-center text-center border p-5 gap-4 hover:bg-gradient-to-l to-black from-gray-900">
              <MdDeveloperMode className="text-[#e86600] text-7xl" />
              <h1 className="text-2xl">Front-End Development</h1>
              <p className="text-gray-400">
                Building fast, responsive, and SEO-friendly web apps using
                Next.js, React, and Tailwind CSS — focused on clean design and
                smooth user experience.
              </p>
            </div>
            <div className="w-100 h-74 flex flex-col justify-center items-center text-center border p-5 gap-4 hover:bg-gradient-to-l to-black from-gray-900">
              <TbWorldCode className="text-[#e86600] text-7xl" />
              <h1 className="text-2xl">Full Stack Development</h1>
              <p className="text-gray-400">
                Experienced in building secure, scalable, and efficient
                server-side applications using Node.js, Express, and databases
                like MongoDB
              </p>
            </div>
          </div>
          <div className="w-full h-auto flex justify-center items-center flex-wrap gap-4 mt-5">
            <FaHtml5 className="text-5xl  hover:scale-105 transition-all duration-300 hover:text-red-600 cursor-pointer" />
            <FaCss3Alt className="text-5xl  hover:scale-105 transition-all duration-300 hover:text-blue-600 cursor-pointer" />
            <RiTailwindCssFill className="text-5xl hover:scale-105 transition-all duration-300 hover:text-blue-600 cursor-pointer" />
            <FaJsSquare className="text-5xl hover:scale-105 transition-all duration-300 hover:text-yellow-600 cursor-pointer" />
            <FaReact className="text-5xl  hover:scale-105 transition-all duration-300 hover:text-blue-600 cursor-pointer" />
            <RiNextjsFill className="text-5xl  hover:scale-105 transition-all duration-300 hover:text-gray-600 cursor-pointer" />
            <SiExpress className="text-5xl  hover:scale-105 transition-all duration-300 hover:text-green-600 cursor-pointer" />
            <FaNodeJs className="text-5xl  hover:scale-105 transition-all duration-300  hover:text-green-600 cursor-pointer" />
            <SiMongodb className="text-5xl hover:scale-105 transition-all duration-300   hover:text-green-600 cursor-pointer" />
          </div>
        </section>
        {/* ----------- About Me ----------- */}
        <section className="mt-10 w-[100%] flex flex-col justify-center items-center">
          <h1 className="text-6xl text-[#e86600] uppercase font-bold">
            About me
          </h1>
          <div className="w-[100%] flex justify-center items-center max-md:flex-col">
            <div className="p-10 w-[60%] text-gray-500 max-md:w-[100%]">
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
            <div className="w-[40%] flex justify-center items-center max-md:w-[100%]">
              <Image
                src="/profile.jpg"
                width={100}
                height={100}
                alt="Profile"
                className="w-76"
              />
            </div>
          </div>
        </section>
        {/* ----------- Contact Me --------- */}
        <section className="mt-10 w-[100%] flex flex-col justify-center items-center">
          <h1 className="text-5xl uppercase text-[#E86600] font-bold">
            Contact Me
          </h1>
          <marquee className="text-gray-700 flex w-100">
            <p>
              Currently serving in a dedicated professional capacity, focused on
              delivering excellence and contributing value in my role.
            </p>
          </marquee>

          <form
            className="w-[50%] flex flex-col gap-5 max-md:w-[90%] mt-5"
            onSubmit={handleFormSubmit}
          >
            <div>
              <h1 className="text-gray-700 text-xl">Name</h1>
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-[#E86600] p-1 outline-0 caret-[#E86600] text-[#E86600]"
                name="name"
                value={form.name}
                onChange={handleFormValue}
              />
            </div>
            <div>
              <h1 className="text-gray-700 text-xl">Email</h1>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-[#E86600] p-1 outline-0 caret-[#E86600] text-[#E86600]"
                name="email"
                value={form.email}
                onChange={handleFormValue}
              />
            </div>
            <div>
              <h1 className="text-gray-700 text-xl">Subject</h1>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-[#E86600] p-1 outline-0 caret-[#E86600] text-[#E86600]"
                name="subject"
                value={form.subject}
                onChange={handleFormValue}
              />
            </div>
            <div>
              <textarea
                className="w-full border border-[#E86600] p-1 outline-0 caret-[#E86600] text-[#E86600] resize-none"
                name="text"
                value={form.text}
                onChange={handleFormValue}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#E86600] p-1 w-20 rounded hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </section>
        {/*----------- Footer -------------- */}
        <footer className="mt-20 w-full h-auto p-10">
          <div className="flex justify-around flex-wrap max-md:gap-4">
            <div className="max-md:w-full w-52 text-white">
              <h1 className="text-xl font-bold mb-10">About</h1>
              <p className="text-gray-500">
                A passionate technologist fueled by innovation and continuous
                learning, dedicated to creating meaningful impact in the world
                of technology.
              </p>
            </div>
            <div className="max-md:w-full flex justify-start items-start flex-col">
              <h1 className="text-xl font-bold mb-10">Catalog</h1>
              <div className="flex flex-col">
                <Link href="home" className="text-gray-500 hover:text-gray-600">
                  Home
                </Link>
                <Link
                  href="project"
                  className="text-gray-500 hover:text-gray-600"
                >
                  Project
                </Link>
                <Link
                  href="about Us"
                  className="text-gray-500 hover:text-gray-600"
                >
                  AboutUs
                </Link>
                <Link
                  href="resume"
                  className="text-gray-500 hover:text-gray-600"
                >
                  Resume
                </Link>
              </div>
            </div>
            <div className="max-md:w-full ">
              <h1 className="text-xl font-bold">Have a Questions?</h1>
              <div className="flex gap-3 justify-start items-center mt-10">
                <FaPhoneAlt className="text-gray-500" />
                <p className="text-gray-500">+923216561397</p>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <MdMarkEmailUnread className="text-gray-500" />
                <p className="text-gray-500">info4895@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="w-[100%] text-center mt-5">
            <p className="text-gray-500 text-sm">
              Copyright © {new Date().getFullYear()} All rights reserved |
              Muhammad Farooq
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
