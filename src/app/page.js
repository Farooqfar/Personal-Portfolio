"use client";
import Spline from "@splinetool/react-spline";
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
import { FaGithub } from "react-icons/fa";

import { MdMarkEmailUnread } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Mymodel from "@/components/applications/Mymodels";
import Mymodels from "@/components/applications/Mymodels";

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
    
      <main className=" w-full h-full selection:bg-amber-600 selection:text-gray-300 overflow-hidden">
        <Navbar />
        <section
          className="flex w-[100%] h-auto flex-row max-lg:flex-col p-10 max-md:p-0"
          id="home"
        >
          <section className="w-[50%] max-lg:w-[100%] max-md:p-3">
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
          <section className="relative w-[50%] h-screen max-lg:w-[100%] max-lg:h-screen max-md:h-[400px] flex justify-center items-center">
            <Spline
              scene="https://prod.spline.design/Qux3cx0V1GrE7QEB/scene.splinecode"
              className="w-full h-full absolute top-[-100px] left-10 max-lg:top-0 max-md:left-5"
            />
          </section>
        </section>

        {/* ----------- Projects ----------- */}
        <section
          className="mt-20 w-full h-auto flex justify-center items-center flex-col"
          id="project"
        >
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
                  className="bottom-1 bg-blue-500 text-center p-1 w-14 flex justify-center items-center rounded hover:scale-105 transition-all duration-200 cursor-pointer "
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="bottom-1 bg-[#F86D00] text-center p-1 w-24 rounded hover:scale-105 transition-all duration-200 cursor-pointer "
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ---------- Skills ------------- */}
        <section
          className="mt-10 w-full h-auto flex justify-center items-center flex-col"
          id="skills"
        >
          <h1 className="text-[#e86600] text-6xl uppercase font-bold">
            My Skills
          </h1>
          <div className="mt-5 w-full flex justify-around items-start max-md:flex-col">
            <div className="w-full flex flex-col gap-5 justify-center items-center">
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-gray-400">HTML</p>
                  <p className="text-gray-400">90%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-2 rounded-2xl">
                  <div className="w-[90%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-gray-400">CSS</p>
                  <p className="text-gray-400">80%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-2 rounded-2xl">
                  <div className="w-[80%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-gray-400">Tailwind</p>
                  <p className="text-gray-400">80%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-2 rounded-2xl">
                  <div className="w-[80%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-gray-400">JS</p>
                  <p className="text-gray-400">85%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-2 rounded-2xl">
                  <div className="w-[85%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-gray-400">React</p>
                  <p className="text-gray-400">84%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-2 rounded-2xl">
                  <div className="w-[84%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-5 justify-center items-center">
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-gray-400">Next Js</p>
                  <p className="text-gray-400">75%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-2 rounded-2xl">
                  <div className="w-[75%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-gray-400">Node JS</p>
                  <p className="text-gray-400">85%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-2 rounded-2xl">
                  <div className="w-[85%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-gray-400">Express JS</p>
                  <p className="text-gray-400">80%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-2 rounded-2xl">
                  <div className="w-[80%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-gray-400">MongoDB</p>
                  <p className="text-gray-400">85%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-2 rounded-2xl">
                  <div className="w-[85%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-gray-400">Shopify</p>
                  <p className="text-gray-400">75%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-2 rounded-2xl">
                  <div className="w-[75%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-100 max-md:w-80 ">
                <div className="flex justify-between text-gray-500">
                  <p className="text-gray-400">Python</p>
                  <p className="text-gray-400">70%</p>
                </div>
                <div className="w-[100%] relative bg-gray-500 h-2 rounded-2xl">
                  <div className="w-[75%] h-[100%] bg-[#F86D00] absolute top-0 left-0 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ---------- Services ------------- */}
        <section
          className="mt-10 flex justify-center items-center flex-col"
          id="services"
        >
          <h1 className="text-[#e86600] text-6xl uppercase font-bold">
            ServiceS
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
        <section
          className="mt-10 w-[100%] flex flex-col justify-center items-center"
          id="aboutme"
        >
          <h1 className="text-6xl text-[#e86600] uppercase font-bold">
            About me
          </h1>
          <div className="w-[100%] flex justify-center items-center max-md:flex-col">
            <div className="p-10 w-[60%] text-gray-500 max-md:w-[100%]">
              <h1 className="text-xl">
                I’m Muhammad Farooq, a passionate Full Stack Developer
                specializing in Next.js, React, and Tailwind CSS.
              </h1>
              <br />
              <h1 className="text-xl">
                I love building fast, dynamic, and scalable web applications
                that blend clean code with modern design. My focus is on
                creating seamless user experiences and efficient back-end logic
                using tools like Next.js API routes, Node.js, and MongoDB.
              </h1>
              <br />
              <h1 className="text-xl">
                I enjoy turning complex problems into simple, elegant solutions
                — from crafting responsive UIs to managing data flow and APIs.
                I’m always learning, exploring new technologies, and improving
                my skills to stay ahead in the ever-evolving web ecosystem.
              </h1>
              <br />
              <h1 className="text-xl">
                My mission is to deliver high-quality, performance-driven
                digital products that make a real impact.
              </h1>
              <br />
              <a
                href="https://www.linkedin.com/in/muhammadfarooqishaq/"
                target="_blank"
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
        {/* ---------- Resumes ------------- */}
        <section
          className="mt-10 w-[100%] flex flex-col justify-center items-center"
          id="resume"
        >
          <h1 className="text-6xl text-[#e86600] font-bold">Resume</h1>
          <div className="w-full flex gap-4 p-10 max-md:flex-col">
            <div className="w-[50%] max-md:w-[100%]">
              <h1 className="text-4xl text-[#e86600] text-center">Education</h1>
              <div className="mt-5 flex flex-col gap-8">
                <div className="w-full min-h-72 flex justify-center gap-3 flex-col border p-5 hover:bg-gradient-to-l  to-black from-gray-900">
                  <h1 className="text-2xl font-bold text-[#e86600]">
                    2020-2024
                  </h1>
                  <h1 className="text-2xl ">
                    Bachelor's Degree of Computer Science
                  </h1>
                  <p className="text-md text-gray-400">
                    University of Agriculture Faisalabad - (UAF)
                  </p>
                  <h1 className="mt-2">
                    Bachelor of Science in Computer Science graduate from the
                    esteemed University of Agriculture, Faisalabad, with a
                    strong foundation in computer science principles and
                    practices.
                  </h1>
                </div>
                <div className="w-full min-h-60 flex justify-center gap-3 flex-col border p-5 hover:bg-gradient-to-l  to-black from-gray-900">
                  <h1 className="text-2xl font-bold text-[#e86600]">
                    2018-2020
                  </h1>
                  <h1 className="text-2xl ">ICS</h1>
                  <p className="text-md text-gray-400">
                    Islamia Group Of Colleges
                  </p>
                  <h1 className="mt-2">
                    Completed Imtermediate (ICS) from Isalmia Group of College,
                    gaining a solid academic foundation and critical thinking
                    skills
                  </h1>
                </div>
                <div className="w-full min-h-60 flex justify-center gap-3 flex-col border p-5 hover:bg-gradient-to-l  to-black from-gray-900">
                  <h1 className="text-2xl font-bold text-[#e86600]">
                    2016-2018
                  </h1>
                  <h1 className="text-2xl ">Matric</h1>
                  <p className="text-md text-gray-400">
                    Fauji Foundation School
                  </p>
                  <h1 className="mt-2">
                    Graduated from Fauji Foundation School with a strong
                    academic record, building a solid foundation for further
                    education and growth in the field of computer science.
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[50%] max-md:w-[100%]">
              <h1 className="text-4xl text-[#e86600] text-center">
                Experience
              </h1>
              <div className="mt-10 flex flex-col gap-8">
                <div className="w-full min-h-72 flex justify-center gap-3 flex-col border p-5 hover:bg-gradient-to-l  to-black from-gray-900">
                  <h1 className="text-2xl font-bold text-[#e86600]">
                    2022-2023
                  </h1>
                  <h1 className="text-2xl ">Front-End Developer</h1>
                  <p className="text-md text-gray-400">Freelancer</p>
                  <h1 className="mt-2">
                    Experienced Front-End Designer at Brisk-Base Software House,
                    leveraging creativity and technical expertise to design
                    visually compelling and user-friendly web interfaces.
                  </h1>
                </div>
                <div className="w-full min-h-60 flex justify-center gap-3 flex-col border p-5 hover:bg-gradient-to-l  to-black from-gray-900">
                  <h1 className="text-2xl font-bold text-[#e86600]">
                    2024-2025
                  </h1>
                  <h1 className="text-2xl ">Full Stack Web Developer</h1>
                  <p className="text-md text-gray-400">
                    Softicera Softwate House
                  </p>
                  <h1 className="mt-2">
                    Proficient Full Stack Web Developer at Softicera Software
                    House, delivering dynamic, efficient, and scalable web
                    solutions through strong expertise in both front-end and
                    back-end development.
                  </h1>
                </div>
                <div className="w-full min-h-60 flex justify-center gap-3 flex-col border p-5  hover:bg-gradient-to-l  to-black from-gray-900">
                  <h1 className="text-2xl font-bold text-[#e86600]">
                    2025-Present
                  </h1>
                  <h1 className="text-2xl ">Matric</h1>
                  <p className="text-md text-gray-400">Team 99 Agency</p>
                  <h1 className="mt-2">
                    Proficient Full Stack Web Developer at Team 99 Agency and
                    Shopify Developer, delivering dynamic, efficient, and
                    scalable web solutions through strong expertise in both
                    front-end and back-end development
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ----------- Contact Me --------- */}
        <section
          className="mt-10 w-[100%] flex flex-col justify-center items-center"
          id="contactme"
        >
          <h1 className="text-5xl uppercase text-[#E86600] font-bold">
            Contact Me
          </h1>

          <form
            className="w-[50%] flex flex-col gap-5 max-md:w-[90%] mt-5"
            onSubmit={handleFormSubmit}
          >
            <div>
              <h1 className="text-gray-500 text-xl">Name</h1>
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
              <h1 className="text-gray-500 text-xl">Email</h1>
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
              <h1 className="text-gray-500 text-xl">Subject</h1>
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
