import React from 'react'
import ImageHolder from './ImageHolder'

const CallLinkSuccess = () => {
  return (
    <div className='fixed top-0 left-0 h-[100dvh] w-[100vw] bg-white p-[32px]'>
        <div className="flex flex-col gap-[80px] rounded-xl shadow-md p-[40px] items-center">
            <div className="flex flex-col items-center gap-2 px-2">
            <h3 className="text-center text-[28px]">
                Your call link has been generated <span className='text-[#1cca00]'>successfully 🎉</span>
            </h3>
                <p className="text-gray-300 text-[14px]">Click the below link to copy your call link</p>
            </div>

            <div className="flex flex-col gap-[60px]">
                <div className="flex gap-1">
                    <p className="underline text-blue-500  text-[20px]">
                        https://www.linguabridge.com/vrh-oqow-qeq
                    </p>
                    <button className=" p-2 flex">
                        <ImageHolder src={'/images/tabler_copy.svg'} sizing={{width: 24, height: 24}}/>
                    </button>
                </div>
                <button className="flex flex-col self-center gap-2 items-center">
                <ImageHolder src={'/images/uil_share.svg'} sizing={{width: 40, height: 40}}/>
                    <p className="text-[20px]">Share</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default CallLinkSuccess