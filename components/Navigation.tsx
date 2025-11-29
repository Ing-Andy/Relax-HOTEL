"use client";

import { useAppContext } from "@/context/cont";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isEntered, setIsEntered] = useState(false);
  const liste = [
    { name: "Home", link: "/fr" },
    { name: "Our Rooms", link: "/fr/rooms" },
    { name: "Contact Us", link: "/contact" },
    { name: "Our Services", link: "/services" },
  ];
  const pathname = usePathname();

  useEffect(() => {
    console.log(isEntered);
  }, [isEntered]);

  const {open} = useAppContext()
  return (
    <div className="w-full">
      <div
        className={`w-[500px] h-[250px] absolute z-30 backdrop-blur-2xs top-1/4 left-20 hidden md:flex`}
      >
        <div className="w-full h-full flex flex-col justify-evenly text-shadow-md">
          {liste.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`${
                pathname === item.link
                  ? "opacity-100 border-white"
                  : "opacity-70"
              } font-bold tracking-widest text-xl w-[80%] py-1 rounded-2xl px-${
                index + 2
              } hover:opacity-100 transition-all mix-blend-difference text-white`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div
        className={` md:hidden bg-amber-300 duration-500 h-screen absolute right-0 z-50 transition-all ${
          open === true ? "w-[40%] " : "w-0"
        }`}
      >
        <div className="flex flex-col pl-2">
          {liste.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`${
                pathname === item.link
                  ? "opacity-100 border-white"
                  : "opacity-70"
              } font-semibold text-lg hover:pl-2 my-2 rounded-2xl hover:opacity-100 transition-all text-black`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
