"use client";
import CallLinkSuccess from "@/components/CallLinkSuccess";
import ImageHolder from "@/components/ImageHolder";
import CallActive from "@/components/callStates/CallActive";
import CallInactive from "@/components/callStates/CallInactive";
import menu from "@/constants";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  function handleActiveMenu(menu) {
    setActiveMenu(menu);
  }
  return (
    <main className="flex flex-col h-screen">
      <nav className="w-full shadow-md pl-[50px] flex items-center h-[72px]">
        <div className="borde border-black flex gap-[10px]">
          <button
            id="red-button-indicator"
            className="rounded-[50%] w-[12px] h-[12px] bg-[#FF5F57]"
          ></button>
          <button
            id="yellow-button-indicator"
            className="rounded-[50%] w-[12px] h-[12px] bg-[#FEBC2E]"
          ></button>
          <button
            id="green-button-indicator"
            className="rounded-[50%] w-[12px] h-[12px] bg-[#28C840]"
          ></button>
        </div>
      </nav>

      <div className=" flex grow justify-between">
        <div className="border gap-[111px] pt-[14px] w-[272px] h-full flex flex-col">
          <div className="w-[200px] ml-[30px] h-[40px] relative">
            <ImageHolder filling={true} src="./images/logo-long.svg" />
          </div>
          <div
            style={{ backgroundImage: "url(./images/clip-shape.svg)" }}
            className="relative w-[248px] flex items-center h-[635px]"
          >
            <ul className="w-full h-[352px] flex flex-col justify-between">
              {menu.map((item, index) => {
                return (
                  <button
                    onClick={() => {
                      handleActiveMenu(item.name);
                    }}
                    key={index}
                    className={`w-full relative pl-[32px] h-[52px] hover:bg-[#174501] text-white flex items-center gap-[12px] ${
                      item.name == activeMenu ? "bg-[#174501]" : ""
                    }`}
                  >
                    <div
                      className={`absolute h-full bg-[white] ${
                        activeMenu == item.name ? "" : "hidden"
                      } left-0 w-[2px]`}
                    ></div>
                    <div className="w-[24px] h-[24px] relative">
                      <ImageHolder filling={true} src={item.img} />
                    </div>
                    <h2 className="text-[#ffffff] text-[20px] font-[500] leading-[28px]">
                      {item.name}
                    </h2>
                  </button>
                );
              })}
            </ul>
          </div>
        </div>
        {/* === main section === */}
        <div className="flex flex-col py-[10px] lg:px-[80px] sm:px-[10px] gap-[40px] grow">
          <div className="flex items-center justify-between w-full">
            <p className="text-[#1cca00] sm:text-lg md:text-xl ">
              Welcome Timilehin😊
            </p>
            <div className="self-end flex gap-2">
              <button className="bg-[#D0FBC6] p-2 rounded-md flex">
                <ImageHolder
                  src={"/images/carbon_headphones.svg"}
                  sizing={{ width: 25, height: 25 }}
                />
              </button>
              <button className="bg-[#D0FBC6] p-2 flex gap-1 rounded-md items-center justify-center">
                <p className="text-[#1cca00] text-[16px]">Upgrade</p>
                <ImageHolder
                  src={"/images/zap-green.svg"}
                  sizing={{ width: 15, height: 15 }}
                />
              </button>
              <ImageHolder
                src={"/images/avatar-headshot.svg"}
                sizing={{ width: 40, height: 40 }}
              />
            </div>
          </div>

          {/* ==== hero illustration ==== */}
          <div className="flex flex-col gap-[84px]">
            <div className="flex items-center justify-center flex-col w-full self-center">
              <ImageHolder
                src={"/images/hero-illustration.svg"}
                sizing={{ width: 600, height: 200 }}
              />

              <div className="flex flex-col self-center gap-2 items-center">
                <ImageHolder src={'/images/translate-icon.svg'} sizing={{width: 50, height: 50}}/>
                <ImageHolder src={'/images/theme-text.svg'} sizing={{width: 348, height: 28}}/>
              </div>
            </div>
            {/* ==== select language section ==== */}
            <div className="flex flex-col gap-[40px]">
            <div className="w-full py-[24px] px-[32px] flex flex-col gap-[24px] grow shadow-md rounded-md ">
              <div className="flex gap-1 flex-col w-full">
                <h2 className="text-black text-[32px]">Language Preference</h2>
                <p className="text-gray-300 text-[14px]">
                  Click the dropdown to edit your languages
                </p>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className=" flex flex-col gap-2 w-full">
                  <label
                    htmlFor="languageSelect"
                    className="text-black text-[16px]"
                  >
                    Translate to
                  </label>
                  <select
                    name="languageSelect"
                    className="w-full text-gray-300 text-[14px] bg-transparent p-2 border rounded-md cursor-pointer"
                  >
                    <option
                      className="text-gray-300 text-[14px] flex gap-2"
                      value={"English"}
                    >
                      <ImageHolder
                        src={"/images/uk-flag.svg"}
                        sizing={{ width: 20, height: 20 }}
                      />
                      English(Default)
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <button className="p-2 lg:py-[20px] bg-[#1cca00] text-center h-[88px] text-[28px] flex gap-2 items-center justify-center rounded-md  text-white hover:bg-[#128000] duration-300 transition-colors">
              Create a Call link
              <ImageHolder
                src={"/images/material-symbols_call-sharp.svg"}
                sizing={{ width: 48, height: 48 }}
              />
            </button>
           </div>
          </div>
        </div>
      </div>
    </main>
  );
}
