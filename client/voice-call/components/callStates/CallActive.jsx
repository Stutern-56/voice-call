import React from "react";
import ImageHolder from "../ImageHolder";

const CallActive = () => {
  return (
    <div className="flex justify-between flex-col grow">
      <div className="flex flex-col gap-2 w-full items-center">
        <div className="flex flex-col gap-14">
          <div className="flex gap-[160px]">
            <div className="flex flex-col items-center">
              <ImageHolder
                src={"/images/avatar-headshot.svg"}
                sizing={{ width: 180, height: 180 }}
              />
              <p className="text-[20px]">oluwatimilehinkomolafe202@gmail.com</p>
            </div>

            <ImageHolder
              src={"/images/green-arrow-right.svg"}
              sizing={{ width: 94, height: 86 }}
            />
            <div className="flex gap-1">
              <div className="flex flex-col items-center">
                <ImageHolder
                  src={"/images/avatar-headshot.svg"}
                  sizing={{ width: 180, height: 180 }}
                />
                <p className="text-[20px]">ekpa.ntan@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="self-center">
            <h2 className="text-[32px] ">In Call</h2>
            <p className="text-[22px] text-[#1cca00]">00:00:01</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl shadow-md flex lg:gap-[160px] gap-28 py-[16px] px-[48px] self-center">
          <button className="">
            <ImageHolder
              src={"/images/Speaker.svg"}
              sizing={{ width: 48, height: 48 }}
            />
          </button>
          <button className="flex items-center p-[10px] bg-[#FF1818] rounded-xl hover:bg-[#C32222] duration-300 transition-colors">
            <ImageHolder
              src={"/images/call-red.svg"}
              sizing={{ width: 48, height: 48 }}
            />
          </button>
          <button className="">
            <ImageHolder
              src={"/images/Mic.svg"}
              sizing={{ width: 48, height: 48 }}
            />
          </button>
        </div>
    </div>
  );
};

export default CallActive;
