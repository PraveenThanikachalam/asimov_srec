"use client";

import Image from "next/image";
import asimov from "@/public/Asmiov.png";
import NavBar from "./components/NavBar";
import wipro_pari from "@/public/wipro_pari.png";

export default async function Home() {
  return (
    <div className="relative flex h-screen bg-black w-screen flex-col  md:items-center md:justify-center bg-transparent">
      {/* {await new Promise((resolve) => setTimeout(resolve, 1500))} */}
      <video
        autoPlay
        muted
        loop
        src="https://res.cloudinary.com/dhdyc3u1n/video/upload/v1703759297/robot_zdjsph.mp4"
        className="w-full sm:flex absolute top-0 left-0 h-[100vh] object-cover -z-10 brightness-[60%]"
      ></video>
      <div className="w-auto h-auto flex flex-col items-center fade-in">
        <Image width={500} height={500} src={asimov} alt={""} />
        <h1 className="font-normal sm:text-sm text-white font-mono">
          Sponsored by
        </h1>
        <div className="flex flex-row">
          <Image
            src={wipro_pari}
            alt="Wipro-Pari"
            className="sm:w-[150px] sm:mt-2 md:w-[200px] "
          />
          {/* <Image
            src={snr}

            alt="SNR Trust"
            className="sm:w-[150px] sm:mt-2 md:w-[200px] "
          /> */}
        </div>
        <div className="mt-10 relative inline-flex  group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfzhT9rJxQMYLKppSy-YhxU9fG_fHV42Y3UYV-3UlxJtvE6bw/formResponse?pli=1"
            title="Get quote now"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Register now !!
          </a>
        </div>
      </div>

      {/* <Image
        src={asimov}
        alt="Logo"
        width={200}
        height={120}
        priority
        classNameName="absolute left-4 top-4 object-contain md:left-10 md:top-6"
      /> */}

      <NavBar />
    </div>
  );
}
