"use client";

import { useState } from "react";

import { Open_Sans } from "next/font/google";

import Cursor from "../components/Cursor";
import StackButton from "@/components/StackButton";
import SocialMediaMenu from "@/components/SocailMediaMenu";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  const [color, setColor] = useState("black");

  return (
    <main className={`h-full w-full p-8 ${openSans.className} flex flex-col bg-bg-gray`}>
      <Cursor color={color} />
      <section className="flex-1 w-full flex flex-col mt-36">
        <div
          className="flex flex-col uppercase"
          onMouseEnter={() => setColor("blue")}
          onMouseLeave={() => setColor("black")}
        >
          <h1 className="text-black text-5xl md:text-7xl lg:text-9xl font-bold">
            Software
          </h1>
          <h1 className="text-black text-5xl md:text-7xl lg:text-9xl font-bold ml-12">
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
