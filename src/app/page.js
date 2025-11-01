import Navbar from "@/components/applications/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main className="bg-black w-full h-screen">
        <Navbar />
        <main className="p-20">
          <section>
            <h1 className="text-gray-200 text-2xl">
              Hi I am <br /> Muhammad Farooq
            </h1>
            <h1 className="uppercase text-5xl font-bold text-[#E86600] mt-5">
              website developer
            </h1>
            <div className="flex gap-4">
              <button className="bg-[#E66500] text-white w-26 p-1 text-center rounded">
                <a href="#"> Hire me </a>
              </button>

              <a
                href="#"
                download
                className="border-1 border-gray-400 text-white w-32 p-2 text-center rounded hover:bg-[#F86D00]"
              >
                Download CV
              </a>
            </div>
          </section>
          <section></section>
        </main>
      </main>
    </>
  );
}
