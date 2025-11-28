"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function Navigation() {
  const [isEntered, setIsEntered] = useState(false);
  const liste = [
    { name: "Home", link: "/" },
    { name: "Our Rooms", link: "/rooms" },
    { name: "Contact Us", link: "/contact" },
    { name: "Our Services", link: "/services" },
  ];
  const pathname = usePathname();

  useEffect(() => {
    console.log(isEntered);
  }, [isEntered]);

  return (
      <div
        className={`w-[500px] h-[250px] absolute z-30 backdrop-blur-2xs top-1/4 left-20`}
      >
        <div
          className="w-full h-full flex flex-col justify-evenly text-shadow-md"
        >
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
  );
}
