"use client";

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/cont";
import { Sidebar } from "lucide-react";

export default function home() {
  const { open, setopen } = useAppContext();
  return (
    <div className="h-screen w-full contain-content flex flex-col items-center relative bg-amber-50">
      <Navigation />
      <Button
        onClick={() => {
          setopen();
          console.log(open);
        }}
        className="absolute md:hidden top-1 left-1 z-50"
      >
        <Sidebar />
      </Button>
      <main className="w-full h-full overflow-auto relative shadow-2xl">
        <header className="h-[50vh] lg:h-screen scrollbar-hidden z-10 shadow-2xl bg-amber-400 w-full bg-[url('/chambre.png')] bg-cover bg-bottom bg-no-repeat overflow-scroll relative">
          <div className="h-full w-full flex grow bg-slate-800/30"></div>
          <div className="h-full bg-black text-gray-200">en maintenance</div>
          <div className="absolute bottom-0 flex justify-around items-center w-full z-50 -mb-20 *:rounded-lg *:hover:shadow *:border-2 *:border-amber-200 *:shadow-inner *:w-80 *:bg-amber-500 *:h-40">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </header>
        <main className="h-screen w-full z-0"></main>
      </main>
    </div>
  );
}
