"use client";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
export default function Home() {
  useGSAP(() => {
    let main = document.querySelector(".main");
    main.addEventListener("mousemove", (e) => {
      let xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      console.log(xMove);
      gsap.to(".main .sky", {
        x: `${xMove * 0.3}%`,
      });
      gsap.to(".main .name", {
        x: `${xMove * 0.1}%`,
      });
      gsap.to(".main .bg", {
        x: `${xMove * 0.2}%`,
      });
      gsap.to(".main .title", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".main .logo", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".main .txt", {
        x: `${xMove * 0.1}%`,
      });
    });
  }, []);
  return (
    <>
      <main className="main w-full h-full selection:bg-amber-600 selection:text-gray-300 overflow-hidden">
        <section className="relative flex w-[100%] h-screen" id="home">
          <div>
            <Image src="/sky.png" fill className="sky scale-125" />
          </div>
          <div>
            <Image src="/bg.png" fill className="bg scale-110" />
          </div>
          <div className="relative flex flex-col justify-center items-center w-full h-full">
            <h1 className="name text-[9vw] font-black text-white -mt-60">
              Muhammad Farooq
            </h1>
            <div className="title flex justify-around w-full p-10">
              <h1 className="text-[3vw] font-black text-white">
                I Build Stunning
              </h1>
              <h1 className="text-[3vw] font-black text-white">
                Websites That Work
              </h1>
            </div>
          </div>
          <div className="absolute w-full h-full -bottom-20 m-0 p-0">
            <Image
              src="/p1.png"
              alt="product"
              fill
              className="profile h-full w-full object-contain scale-110 m-0 p-0 "
            />
          </div>
          <div className="absolute w-36 h-36 bottom-0 right-0">
            <Image src="/logo.png" fill className="logo" />
          </div>
          <div className="absolute w-96 bottom-0 p-10 ">
            <h4 className="txt">
              Crafting modern, responsive, and high-performing websites tailored
              to your business needs. Lets turn your ideas into reality with
              clean code and sleek design.
            </h4>
          </div>
        </section>
      </main>
    </>
  );
}
