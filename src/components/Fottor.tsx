"use client";
import React from "react";
// import Signature from "../../public/signature_new.png";
// import Image from "next/image";

import { FaLinkedin } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
const Fottor = () => {
  return (
    <>
      <div className="w-full h-full bg-black/[90] flex flex-col items-center justify-center ">
        <div className="font-Arizonia flex flex-col items-center justify-center space-y-20 text-7xl font-shadow-2xl shadow-white">
          Connect With Me
        </div>

        <div className="flex flex-row w-1/2 justify-between items-center p-4  mt-16 text-5xl ">
          <Link
            href="https://www.linkedin.com/in/ravi-kant2705/"
            target="_blank"
          >
            <div className="text-orange-400 hover:text-orange-500 font-bold hover:scale-125 transition-all duration-500">
              <FaLinkedin />
            </div>
          </Link>

          <Link href="mailto:rk3727000@gmail.com" target="_blank">
          <div className="text-orange-400 hover:text-orange-500 font-bold hover:scale-125 transition-all duration-500">
            <ImMail />
          </div>
          </Link>

         <Link href="https://github.com/Ravi3727" target="_blank">
         <div className="text-orange-400 hover:text-orange-500 font-bold hover:scale-125 transition-all duration-500">
            <FaGithubSquare />
          </div>
         </Link>

          <Link href="https://x.com/Ravi61525011705?t=S2HpuBYBAVzhyHASzEUTWg&s=09" target="_blank">
          <div className="text-orange-400 hover:text-orange-500 font-bold hover:scale-125 transition-all duration-500">
            <FaSquareXTwitter />
          </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Fottor;
