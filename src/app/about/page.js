"use client";

import PageTransition from "@/components/PageTransition";

export default function Page() {
  return (
    <PageTransition>
      <section className="w-full h-full flex bg-bg-gray p-8">
        <div className="h-full flex-1 flex">
          <h1 className="text-black text-5xl md:text-7xl lg:text-9xl font-bold uppercase mt-36">
            About
          </h1>
        </div>
        <div className="h-full flex-1 flex flex-col">
          <p className="text-black p-8">
          Certainly! Here's a paragraph of Lorem Ipsum text for your use:

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          
        </div>  
      </section>
    </PageTransition>
  )
}