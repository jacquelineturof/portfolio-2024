"use client";

import { useState } from "react";

import { Open_Sans, Poiret_One } from "next/font/google";

import Cursor from "../components/cursor";
import Navbar from "../components/navbar";
import StackButton from "@/components/stackButton";
import SocialMediaMenu from "@/components/socailMediaMenu";

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
          <SocialMediaMenu />
          <StackButton />
        </div>
      </section>
    </main>
  );
}
