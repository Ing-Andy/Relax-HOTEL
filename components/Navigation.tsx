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
    <div className="w-full h-screen bg-transparent absolute flex items-center pl-20 top-0 left-0">
      <div
        className="w-[500px] h-[250px] bg-amber-200 container rounded-lg flex flex-col px-5"
        onMouseEnter={() => setIsEntered((prev) => !prev)}
        onMouseOut={() => setIsEntered((prev) => !prev)}
      >
        <div className="w-full h-full flex flex-col justify-evenly" onMouseOver={(e)=> e.stopPropagation()}>
          {liste.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              onMouseEnter={(e) => {
                e.stopPropagation();
                console.log(index + 2);
              }}
              className={`${
                pathname === item.link
                  ? "opacity-100 border-white"
                  : "opacity-50"
              } font-bold tracking-widest text-xl w-[80%] py-1 rounded-2xl px-${
                index + 2
              } hover:opacity-100 transition-all`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
