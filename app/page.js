'use client'
import Image from 'next/image';
import Background from "../public/assets/download.jpg";
import { useState } from "react";
import Link from 'next/link';

export default function Home() {
const [clicked, setClicked] = useState(false);

const handleClick = () => {
  setClicked(true);

  setTimeout(() => {
    setClicked(false);
  }, 500);
};

  return (
    <>
      <div className="items-center justify-center flex h-screen font-[family-name:var(--font-geist-sans)]" style={{ backgroundImage: `url(${Background.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
      <Link href='/gamePage'> 
        <button onClick={handleClick} className={`border border-gray-500 px-4 py-2 bg-blue-500 text-white rounded-xl h-24 w-60 text-xl transition-all ${clicked ? "animate-[scale-animate_0.5s_ease-in-out]" : ""}`}>
          PLAY!
        </button>
      </Link>
      </div>

      <style>
      {`
        @keyframes scale-animate {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
      `}
      </style>
    </>
  );
}
