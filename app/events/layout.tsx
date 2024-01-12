"use client";

import { ReactNode } from "react";
import NavBar from "../components/NavBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className=" bg-zinc-900  flex flex-col  justify-center items-center w-screen sm:h-full  md:h-screen">
      <NavBar />
      {children}
    </div>
  );
}
