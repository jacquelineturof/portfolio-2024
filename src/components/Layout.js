"use client";

import { Open_Sans } from "next/font/google";
import { CursorContextProvider } from "@/context/CursorContext";
import Navbar from "@/components/Navbar";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <CursorContextProvider>
      <div className="h-screen w-screen flex flex-col">
        <Navbar />
        <main className={`w-full flex-1 ${openSans.className}`}>
          {children}
        </main>
      </div>
    </CursorContextProvider>

  );
};