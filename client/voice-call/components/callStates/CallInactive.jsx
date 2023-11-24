import React from "react";
import ImageHolder from "../ImageHolder";

const CallInactive = () => {
  return (
    <div className="flex justify-between flex-col self-center grow">
      <div className="flex flex-col gap-2 self-center items-center">
        <div className="flex flex-col gap-1 items-center">
          <ImageHolder
            src={"/images/avatar-headshot.svg"}
            sizing={{ width: 180, height: 180 }}
          />
          <p className="text-[20px]">oluwatimilehinkomolafe202@gmail.com</p>
        </div>

        <h2 className="text-[32px] ">In Call with...</h2>
        <h3 className="text-[36px] text-[#1cca00]">waiting for co-callers...</h3>
      </div>
      <div className="rounded-xl shadow-md flex lg:gap-[160px] gap-28 py-[16px] px-[48px] self-center">
        <button className="">
        <ImageHolder src={'/images/speaker-grey.svg'} sizing={{width:48, height:48}}/>
        </button>
        <button className="flex items-center p-[10px] bg-[#FF1818] rounded-xl hover:bg-[#C32222] duration-300 transition-colors">
            <ImageHolder src={'/images/call-red.svg'} sizing={{width:48, height:48}}/>
        </button>
        <button className="">
        <ImageHolder src={'/images/mic-grey.svg'} sizing={{width:48, height:48}}/>
        </button>
      </div>
    </div>
  );
};

export default CallInactive;