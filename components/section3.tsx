import { MapPin, MoveUpRight } from "lucide-react";
import Entete from "./Entete";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Section3() {
  return (
    <div className="min-h-[120vh] lg:min-h-screen w-full my-10 relative">
      <Entete
        span="Proven"
        title="By the numbers"
        subtitle="Our track record speaks to our dedication and excellence."
        bgSpan=""
        justify="center"
        textSpan=""
      />
      <div className="w-full flex flex-col lg:flex-row *:lg:max-w-1/3 h-100 mt-10 *:h-full *:grow relative *:relative lg:items-center gap-4">
        <div className="flex pr-2 flex-col max-h-full justify-between py-10 w-full">
          <Entete
            span="About Us"
            title="loremsa lksamdlksa ds mdlakmdlkadsa lakldmakdlsa  "
            bgSpan="white"
            justify="start lg:justify-center"
            textSpan="pr-2"
          />
          <Button className="w-full lg:w-1/3 mt-10 rounded-4xl py-3 flex justify-center gap-5 items-center">
            Voir plus{" "}
            <MoveUpRight
              size={20}
              className="bg-white w-20 h-15 rounded-full text-black"
            />
          </Button>
        </div>
        <div className="h-full w-full hidden lg:flex">
          <Image
            src={"/chambre.png"}
            width={100}
            height={100}
            alt="image"
            className="w-full h-full object-cover rounded-2xl shadow"
          />
        </div>
        <div className="flex flex-col">
          <div className="w-full lg:h-2/3 h-60 bg-[url('/chambre.png')] p-2 bg-center bg-cover rounded-2xl relative">
            <span className="rounded-2xl border w-max text-white px-4 pb-1">only you</span>
            <div className="absolute bottom-2 w-full left-0 rigth-0 px-1 flex justify-between">
                <div className="rounded-3xl bg-white max-w-max flex px-4 items-center gap-4 py-1"><span className="rounded-full bg-gray-200 h-8 w-8 pt-2"><MapPin size={15} className="m-auto" /></span> Kotto, Douala cameroun</div>
                <div className="rounded-full bg-white w-10 h-10 flex justify-center items-center"><MoveUpRight /></div>
            </div>
          </div>
          <div className="h-1/3">
            <p>andy est le meilleur </p>
          </div>
        </div>
      </div>
    </div>
  );
}
