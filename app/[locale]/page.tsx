"use client";

import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";

export default function home() {

  return (
    <div className="min-h-screen w-full flex flex-col items-center relative bg-gray-100 *:px-4">
      <Section1 />

      <Section2 />

      <Section3 />
    </div>
  );
}
