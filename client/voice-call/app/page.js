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
        <div className="flex flex-col py-[10px] px-[80px] gap-10 grow">
        <div className="flex gap-2 self-end">
            <button className="bg-[#D0FBC6] p-2 rounded-md flex">
             <ImageHolder src={'/images/zap-green.svg'} sizing={{width: 15, height:15}}/>
            </button>
            <button className="bg-[#D0FBC6] p-2 flex gap-1 rounded-md items-center justify-center">
              <p className="text-[#1cca00] text-[15px]">Upgrade</p>
            <ImageHolder src={'/images/zap-green.svg'} sizing={{width: 15, height:15}}/>
            </button>
            <ImageHolder src={'/images/avatar-headshot.svg'} sizing={{ width: 40, height: 40}} />
          </div>

          {/*  switch div */}
          <div className="flex flex-col gap-[84px]">
            <div className="flex items-center justify-center flex-col py-[10px] px-[20px] w-full self-center gap-[16px]">
              <button className="rounded-full w-[120px] h-[120px] items-center flex flex-col justify-center p-1 text-white text-lg font-semibold bg-[#1cca00] shadow-md">
                
                <ImageHolder src={'/images/switch.svg'} sizing={{width: 58, height:58}} className={'z-10'}/>
                OFF
              </button>
              <p className="text-center">Click to <span className="text-[#1cca00]">activate</span> or <span className="text-[red]">de-activate</span> Linguabridge</p>
            </div>
            <div className="w-full py-[24px] px-[32px] flex flex-col gap-[24px] grow shadow-md rounded-md ">
              <div className="flex gap-1 flex-col w-full">
              <h2 className="text-gray-400">Language Preference</h2>
              <p className="text-gray-300">Click the dropdown to edit your languages</p>
              </div>
              <div className="flex justify-between">
                <div className=" flex flex-col gap-2">
                <h3 className="text-gray-400">Translate from</h3>
                <details className="cursor-pointer">
                  <summary className="flex gap-2 ">
                    <ImageHolder src={'/images/globe-check.svg'} sizing={{width: 15, height:15}}/> 
                    <p className="text-gray-300">Auto detect</p>
                  </summary>
                  <article>Auto detect</article>
                </details>
                </div>
                <div className=" flex flex-col gap-2">
                <h3 className="text-gray-400">Translate to</h3>
                <details className="cursor-pointer">
                  <summary className="flex gap-2">
                    <ImageHolder src={'/images/globe-check.svg'} sizing={{width: 15, height:15}}/> 
                    <p className="text-gray-300">Auto detect</p>
                  </summary>
                  <article>Auto detect</article>
                </details>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
