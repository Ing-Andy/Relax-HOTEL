"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Entete from "./Entete";
import { CookingPotIcon, HandHeart, Smile } from "lucide-react";
import { Button } from "./ui/button";

export default function Section2() {
  {
    /* section1 */
  }
  const [inputvisible, setInputVisible] = useState<boolean>(false);
  const navList = [
    { name: "home", lien: "/" },
    { name: "about Us", lien: "/aboutUs" },
    { name: "services", lien: "/services" },
    { name: "facilites", lien: "/facilites" },
    { name: "membership", lien: "/membership" },
  ];
  const block1 = [
    {
      title: "Contemporary cuisine",
      subtitle:
        "Our chefs blend classical techniques with modern creativity to deliver unforgettable flavors.",
      icon: CookingPotIcon,
    },
    {
      title: "Elegant ambience",
      subtitle:
        "Minimalist design and thoughtful lighting create an atmosphere that enhances every moment.",
      icon: Smile,
    },
    {
      title: "Exceptional service",
      subtitle:
        "Our team anticipates your needs with attentive care and genuine hospitality.",
      icon: HandHeart,
    },
  ];

  return (
    <section className="min-h-screen w-full flex relative gap-4 flex-col my-20">
      <Entete
        span="let's know us"
        title="What sets us apart from the rest"
        subtitle="Every element of our restaurant reflects our commitment to excellence and forward-thinking design."
        justify="center"
        bgSpan="bg-white"
        border="border-gray-200"
      />
      <div className="w-full h-full my-10 flex lg:flex-row flex-col gap-5 lg:gap-2 items-center">
        {block1.map((el, index) => (
          <div
            className={`w-full h-full lg:gap-5 gap-15 bg-white py-15 lg:py-5 rounded-2xl lg:rounded-none lg:bg-transparent shadow-md lg:shadow-none *:text-center flex flex-col items-center px-10 ${
              index == 1 ? "lg:mt-4" : ""
            }`}
            key={index}
          >
            <el.icon size={30} />
            <h3 className="text-3xl font-semibold">{el.title}</h3>
            <p>{el.subtitle}</p>

            {index == 1 ? (
              <div className="lg:flex pt-8 *:w-25 gap-5 hidden *:cursor-pointer">
                <Button>voir</Button>
                <Button>contacter</Button>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
