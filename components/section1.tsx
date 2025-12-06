"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  CircleDollarSignIcon,
  Heart,
  Home,
  List,
  MapPinIcon,
  Search,
  X,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Section1() {
  {
    /* section1 */
  }
  const [inputvisible, setInputVisible] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navList = [
    { name: "home", lien: "/" },
    { name: "about Us", lien: "/aboutUs" },
    { name: "services", lien: "/services" },
    { name: "facilites", lien: "/facilites" },
    { name: "membership", lien: "/membership" },
  ];
  return (
    <section className="min-h-screen flex flex-col gap2 relative w-full mb-10 ">
      {/* navbar */}
      <nav className="w-full flex justify-between *:w-1/2 h-15 *:h-full">
        <div className="flex justify-between items-center">
          <Image src={"/"} alt="logo" width={50} height={50} />
          <ul className="hidden lg:flex gap-5">
            {navList.map((el, index) => (
              <li className="flex capitalize font-semibold text-lg" key={index}>
                <Link href={el.lien}>{el.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end items-center gap-2 lg:gap-4">
          <div
            className={`rounded-lg lg:rounded-2xl overflow-hidden border-2 border-black ${
              inputvisible == false ? "w-7 lg:w-10 h-7 lg:h-10 " : "w-100"
            } flex items-center justify-center *:grow *:flex transition-all duration-500 *:transition-all *:duration-300`}
          >
            <input
              type="text"
              className={`${
                inputvisible == false ? "w-0 bg-black" : "w-full"
              } min-h-10 flex bg-neutral-300`}
            />
            <Button
              onClick={() => setInputVisible((prev) => !prev)}
              className={`cursor-pointer h-10 flex ${
                inputvisible == false ? "w-10" : "min-w-20 max-h-20"
              } rounded-l-none`}
            >
              {inputvisible == false ? <Search color="white" /> : "search"}
            </Button>
          </div>
          <Button className="flex w-7 lg:h-10 h-7 lg:w-10 hover:bg-red-500 cursor-pointer bg-black rounded-lg lg:rounded-2xl">
            <Heart />
          </Button>
          <Button
            onClick={() => setIsOpen(true)}
            className="flex lg:hidden w-7 lg:h-10 h-7 lg:w-10 hover:bg-red-500 cursor-pointer bg-black rounded-lg lg:rounded-2xl"
          >
            <List />
          </Button>
        </div>
      </nav>

      {/* hero */}
      <div className="flex w-full h-[60vh] lg:h-[140vh] bgblack rounded-2xl relative bg-[url('/chambre.png')] bg-no-repeat bg-cover bg-center bgbottom">
        <div className="m-auto ">
          <h1 className="text-2xl font-semibold lg:font-bold lg:text-7xl text-gray-200 capitalize text-center ">
            {" "}
            welcome to the best hotel to the place,{" "}
            <span>
              welcome to{" "}
              <strong className="uppercase font-black mask-conic-from-neutral-300 ml-2">
                relaxe hotel
              </strong>
            </span>
          </h1>
          <p className="w-1/2 text-center hidden lg:flex justify-center m-auto text-white">
            search l'hotel Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aut incidunt aspernatur quibusdam maxime unde aperiam eos
            officiis velit recusandae dolorem! de tes reves avec la meilleuur
            attraction de tout douala cameroun{" "}
          </p>
        </div>
        <div className="absolute w-[95%] mx-auto shadow-xl bottom-2 h-50 rounded-2xl hidden lg:flex left-0 right-0 bg-white">
          <div className="relative w-full h-full flex px-2 pb-2 *:justify-end *:w-1/4 *:flex *:flex-col *:gap-4 gap-4 ">
            <div className="">
              <label>Location</label>
              <div className="flex w-full h-full rounded-lg max-h-1/2 pr-2">
                <Select>
                  <SelectTrigger className="flex min-h-15 w-full gap-4 outline-none">
                    <MapPinIcon /> <SelectValue defaultValue={"bependa"} />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="bepanda">
                      Bependa Commissariat du 7eme
                    </SelectItem>
                    <SelectItem value="bepanda">
                      kotto derriere l'aval
                    </SelectItem>
                    <SelectItem value="bepanda">
                      Bependa Commissariat du 7eme
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="">
              <label>Type</label>
              <div className="flex w-full h-full rounded-lg max-h-1/2 pr-2">
                <Select>
                  <SelectTrigger className="flex min-h-15 w-full gap-4 outline-none">
                    <Home /> <SelectValue defaultValue={"bependa"} />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="chambre">chambre</SelectItem>
                    <SelectItem value="studio">studio</SelectItem>
                    <SelectItem value="appartement">appartement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="">
              <label>Price</label>
              <div className="flex w-full h-full rounded-lg max-h-1/2 pr-2">
                <Select defaultValue="bependa">
                  <SelectTrigger className="flex min-h-15 w-full gap-4 outline-none">
                    <CircleDollarSignIcon />{" "}
                    <SelectValue defaultValue={"15000"} />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="15000">15000 fcfa</SelectItem>
                    <SelectItem value="25000">25000 fcfa</SelectItem>
                    <SelectItem value="4000">40000 fcfa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <Button className="h-15 mb-9 cursor-pointer">
                {" "}
                search hotel
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`
    fixed inset-0 z-50 transition-all duration-300
    bg-slate-900/30 backdrop-blur-xs
    ${
      isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }
    flex justify-end
  `}
      >
        <div
          className={`
      flex flex-col bg-slate-900 h-full transition-all duration-500
      w-2/3 max-w-[300px]
      ${isOpen ? "translate-x-0" : "translate-x-full"}
    `}
        >
          <Button
            onClick={() => setIsOpen(false)}
            className="rounded-lg w-max bg-transparent border-none absolute right-2 top-2"
          >
            <X />
          </Button>
          <div className="w-full h-max">
            <ul className="flex flex-col w-full gap-2 mt-10 pl-2">
              {navList.map((el, index) => (
                <li key={index} className="text-gray-200 hover:bg-slate-700/20">
                  <Link href={el.lien}>{el.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className=" w-full  shadow-xl bottom-2 h-50 rounded-2xl flex mt-4 bg-white lg:hidden">
        <div className="relative w-full h-full flex flex-wrap items-center justify-center pt-4">
          <div className="min-w-full flex bgblack">
            {" "}
            <div className="w-1/2 pl-2">
              <label>Location</label>
              <div className="flex w-full h-full rounded-lg max-h-1/2 pr-2">
                <Select>
                  <SelectTrigger className="flex min-h-15 w-full gap-4 outline-none">
                    <MapPinIcon /> <SelectValue defaultValue={"bependa"} />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="bepanda">
                      Bependa Commissariat du 7eme
                    </SelectItem>
                    <SelectItem value="bepanda">
                      kotto derriere l'aval
                    </SelectItem>
                    <SelectItem value="bepanda">
                      Bependa Commissariat du 7eme
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-1/2 ">
              <label>Type</label>
              <div className="flex w-full h-full rounded-lg max-h-1/2 pr-2">
                <Select>
                  <SelectTrigger className="flex min-h-15 w-full gap-4 outline-none">
                    <Home /> <SelectValue defaultValue={"bependa"} />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="chambre">chambre</SelectItem>
                    <SelectItem value="studio">studio</SelectItem>
                    <SelectItem value="appartement">appartement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="min-w-full flex bgblack">
            <div className="w-1/2 pl-2">
              <label>Price</label>
              <div className="flex w-full h-full rounded-lg max-h-1/2 pr-2">
                <Select defaultValue="bependa">
                  <SelectTrigger className="flex min-h-15 w-full gap-4 outline-none">
                    <CircleDollarSignIcon />{" "}
                    <SelectValue defaultValue={"15000"} />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="15000">15000 fcfa</SelectItem>
                    <SelectItem value="25000">25000 fcfa</SelectItem>
                    <SelectItem value="4000">40000 fcfa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col justify-end w-1/2 pr-2">
              <Button className="h-15 mb-9 cursor-pointer mt-6">
                {" "}
                search hotel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
