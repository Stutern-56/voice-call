"use client";
import ImageHolder from "@/components/ImageHolder";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <nav className="w-full shadow-md pl-[50px] flex items-center h-[72px]">
        <div className="borde border-black flex gap-[10px]">
          <button id="red-button-indicator" className="rounded-[50%] w-[12px] h-[12px] bg-[#FF5F57]"></button>
          <button id="yellow-button-indicator" className="rounded-[50%] w-[12px] h-[12px] bg-[#FEBC2E]"></button>
          <button id="green-button-indicator" className="rounded-[50%] w-[12px] h-[12px] bg-[#28C840]"></button>
        </div>
      </nav>

      <div className=" flex grow justify-between">
        <div className="border border-black pt-[14px] w-[272px] h-full flex flex-col">
          <div className="w-[]"></div>
        </div>
        <div className="bg-[yellow] grow"></div>
      </div>
    </main>
  );
}
