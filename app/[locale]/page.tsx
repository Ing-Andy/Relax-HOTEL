import Navigation from "@/components/Navigation";

export default function home() {
  return (
    <div className="h-screen w-full contain-content flex flex-col items-center relative bg-amber-50">
      <Navigation />
      <main className="w-full h-full overflow-auto relative">
        <header className="h-screen scrollbar-hidden z-10 bg-amber-400 w-full bg-[url('/chambre.png')] bg-cover bg-bottom bg-no-repeat overflow-auto relative">
          <div className="h-full w-full flex grow bg-slate-800/30"></div>
          <div className="h-full bg-black">andy est le best</div>
        </header>
        <div className="absolute bottom-0 flex justify-around items-center w-full z-10 -mb-20 *:rounded-lg *:hover:shadow *:border-2 *:border-amber-200 *:shadow-inner *:shadow-2xl *:w-80 *:bg-amber-500 *:h-40">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
        <main className="h-screen w-full z-0"></main>
      </main>
    </div>
  );
}
