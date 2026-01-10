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
    let card_div1 = document.querySelector(".cardDiv1");
    let card1 = document.querySelector(".card1");
    card_div1.addEventListener("mouseenter", (e) => {
      gsap.to(".card1", {
        scale: 1,
        ease: "power2",
        delay: 0.1,
        duration: 0.4,
      });
    });
    card_div1.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;
      console.log(x, y);
      gsap.to(".card1", {
        x: `${x}px`,
        y: `${y}px`,
      });
    });

    card_div1.addEventListener("mouseleave", () => {
      gsap.to(card1, {
        scale: 0,
      });
    });

    {
      /* Card 3 */
    }
    let card_div2 = document.querySelector(".cardDiv2");
    let card2 = document.querySelector(".card2");
    card_div2.addEventListener("mouseenter", (e) => {
      gsap.to(".card2", {
        scale: 1,
        ease: "sine",
        delay: 0.1,
        duration: 0.4,
      });
    });
    card_div2.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;
      console.log(x, y);
      gsap.to(".card2", {
        x: `${x}px`,
        y: `${y}px`,
      });
    });

    card_div2.addEventListener("mouseleave", () => {
      gsap.to(card2, {
        scale: 0,
      });
    });

    {
      /* Card 2 */
    }
    let card_div = document.querySelector(".cardDiv");
    let card = document.querySelector(".card");
    card_div.addEventListener("mouseenter", (e) => {
      gsap.to(".card", {
        scale: 1,
        ease: "sine",
        delay: 0.1,
        duration: 0.4,
      });
    });
    card_div.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;
      console.log(x, y);
      gsap.to(".card", {
        x: `${x}px`,
        y: `${y}px`,
      });
    });

    card_div.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 0,
      });
    });
    {
      /* Card 3 */
    }
    let card_div3 = document.querySelector(".cardDiv3");
    let card3 = document.querySelector(".card3");
    card_div3.addEventListener("mouseenter", (e) => {
      gsap.to(".card3", {
        scale: 1,
        ease: "sine",
        delay: 0.1,
        duration: 0.4,
      });
    });
    card_div3.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;
      console.log(x, y);
      gsap.to(".card3", {
        x: `${x}px`,
        y: `${y}px`,
      });
    });

    card_div3.addEventListener("mouseleave", () => {
      gsap.to(card3, {
        scale: 0,
      });
    });
  }, []);
  return (
    <>
      <main className="relative main w-full h-full selection:bg-amber-600 selection:text-gray-300 overflow-hidden">
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
          <div className="absolute w-1/3 bottom-0 p-10 max-sm:w-full">
            <h4 className="txt text-white text-2xl max-sm:text-xl">
              Crafting modern, responsive, and high-performing websites tailored
              to your business needs. Lets turn your ideas into reality with
              clean code and sleek design.
            </h4>
          </div>
        </section>
      </main>
      <section className="relative experience w-full min-h-screen flex justify-center items-center bg-black shadow-4xl  shadow-black">
        <div className="flex justify-around items-center w-full h-full">
          <div className="relative w-64 rounded-t-full h-96 bg-[#FDB732]">
            <Image src="/p3.png" fill className="absolute" />
          </div>
          <div className="w-1/2 h-full flex items-center flex-col p-10 text-white">
            <h1 className="text-6xl uppercase">experience</h1>
            <p className="text-center text-2xl mt-2">
              Building dynamic websites and interactive web applications with a
              focus on clean code and performance.
            </p>
            <div className="w-full mt-10 flex justify-center items-center font-sans font-black flex-col gap-3">
              <div className="cardDiv relative bg-white/20 w-full h-32 flex justify-between items-center rounded-2xl p-3 ">
                <div className="bg-black w-10 h-10  text-center text-2xl rounded-full ">
                  1
                </div>
                <div className="z-10">Inter in softicera</div>
                <div className="z-10">1 year</div>
                <div className="card scale-0 pointer-events-none fixed top-0 left-0 w-24 h-40 bg-fuchsia-400 rounded-2xl z-0 transform -translate-x-1/2 -translate-y-1/2 ">
                  <Image src="/p2.png" fill />
                </div>
              </div>
              <div className="cardDiv1 relative bg-white/20 w-full h-32 flex justify-between items-center rounded-2xl p-3 ">
                <div className="bg-black w-10 h-10  text-center text-2xl rounded-full ">
                  1
                </div>
                <div className="z-10">Inter in softicera</div>
                <div className="z-10">1 year</div>
                <div className="card1 scale-0 pointer-events-none fixed top-0 left-0 w-24 h-40 bg-amber-400 rounded-2xl z-0 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                  <Image src="/p4.png" fill />
                </div>
              </div>
              <div className="cardDiv2 relative bg-white/20 w-full h-32 flex justify-between items-center rounded-2xl p-3 ">
                <div className="bg-black w-10 h-10  text-center text-2xl rounded-full ">
                  1
                </div>
                <div className="z-10">Inter in softicera</div>
                <div className="z-10">1 year</div>
                <div className="card2 scale-0 pointer-events-none fixed top-0 left-0 w-24 h-40 bg-amber-400 rounded-2xl z-0 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                  <Image src="/p1.png" fill />
                </div>
              </div>
              <div className="cardDiv3 relative bg-white/20 w-full h-32 flex justify-between items-center rounded-2xl p-3 ">
                <div className="bg-black w-10 h-10  text-center text-2xl rounded-full ">
                  1
                </div>
                <div className="z-10">Inter in softicera</div>
                <div className="z-10">1 year</div>
                <div className="card3 scale-0 pointer-events-none fixed top-0 left-0 w-24 h-40 bg-amber-400 rounded-2xl z-0 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                  <Image src="/p3.png" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
