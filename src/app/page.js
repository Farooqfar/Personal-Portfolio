import Navbar from "@/components/applications/Navbar";
import { Button } from "@/components/ui/button";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="bg-black w-full h-screen">
        <Navbar />
        <main className="p-20 flex w-[100%] flex-row max-lg:flex-col">
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
      </main>
    </>
  );
}
