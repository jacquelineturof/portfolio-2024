"use client";

import { useState } from "react";

import { Open_Sans, Poiret_One } from "next/font/google";

import Cursor from "../components/cursor";
import Navbar from "../components/navbar";

import { IconContext } from "react-icons";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoMailOpenOutline,
} from "react-icons/io5";

const openSans = Open_Sans({ subsets: ["latin"] });
const poiretOne = Poiret_One({
  subsets: ["latin"],
  weight: "400"
});

export default function Home() {
  const [color, setColor] = useState("black");
  const [isMouseOverNav, setIsMouseOverNav] = useState(false);

  return (
    <main className={`h-screen w-screen p-8 ${openSans.className} flex flex-col bg-bg-gray`}>
      <Cursor color={color} isNav={isMouseOverNav} />
      <nav className="flex h-16 w-full items-center justify-between">
        <div className={`flex flex-col text-3xl text-black leading-none ${poiretOne.className}`}>
          <span>Jackie</span>
          <span className="ml-4"> Turof </span>
        </div>
        <Navbar setIsNav={setIsMouseOverNav} />
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/headshot.png" />
          </div>
        </div>

      </nav>
      <section className="flex-1 w-full flex flex-col mt-36">
        <div
          className="flex flex-col uppercase"
          onMouseEnter={() => setColor("blue")}
          onMouseLeave={() => setColor("black")}
        >
          <h1 className="text-black text-9xl font-bold">
            Software
          </h1>
          <h1 className="text-black text-9xl font-bold ml-12">
            Developer
          </h1>
        </div>
        <div className="mt-auto flex justify-between">
          <div className="flex flex-col">
            <IconContext.Provider value={{
              color: 'black',
              size: 36,
              style: {
                marginBottom: '1rem'
              }
            }}>
              <IoLogoLinkedin />
              <IoLogoGithub />
              <IoMailOpenOutline />
            </IconContext.Provider>
          </div>
          <button
            className="btn rounded-full h-24 w-24 mt-auto flex flex-col text-white"
            onClick={() => document.getElementById('my_modal_1').showModal()}
          >
            <span className="font-bold">Stack</span>
            <span className="text-xs font-light">&</span>
            <span className="font-bold">CV</span>
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">My current stack</h3>
              <p className="py-4">
                My current tech stack is serverless. Utilizing NextJS with Typescript (and Redux), Supabase and Vercel.
                I am currently studying for my AWS certification.
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
                <button className="btn btn-secondary">Download CV</button>
              </div>
            </div>
          </dialog>
        </div>
      </section>
    </main>
  );
}
