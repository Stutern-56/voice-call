"use client";
import ImageHolder from "@/components/ImageHolder";
import menu from "@/constants"
import {useEffect, useState} from 'react'

export default function Home() {
  const [activeMenu, setActiveMenu] = useState("Dashboard")

  function handleActiveMenu (menu) {
    setActiveMenu(menu)
  }
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
        <div className="border gap-[111px] pt-[14px] w-[272px] h-full flex flex-col">
          <div className="w-[200px] ml-[30px] h-[40px] relative">
            <ImageHolder filling={true} src="./images/logo-long.svg" />
          </div>
          <div style={{ backgroundImage: "url(./images/clip-shape.svg)" }} className="relative w-[248px] flex items-center h-[635px]">
            <ul className="w-full h-[352px] flex flex-col justify-between">
              {menu.map((item, index) => {
                return (
                  <button onClick={()=>{handleActiveMenu(item.name)}} key={index} className={`w-full relative pl-[32px] h-[52px] hover:bg-[#174501] text-white flex items-center gap-[12px] ${item.name == activeMenu ? "bg-[#174501]" : ""}`}>
                    <div className={`absolute h-full bg-[white] ${activeMenu == item.name ? "" : "hidden"} left-0 w-[2px]`}></div>
                    <div className="w-[24px] h-[24px] relative">
                      <ImageHolder filling={true} src={item.img} />
                    </div>
                    <h2 className="text-[#ffffff] text-[20px] font-[500] leading-[28px]">{item.name}</h2>
                  </button>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="bg-[yellow] grow"></div>
      </div>
    </main>
  );
}
