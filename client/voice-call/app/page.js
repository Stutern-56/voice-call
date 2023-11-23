'use client'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col">
      <nav className="w-full shadow-md pl-[60px] flex items-center h-[72px]"> 
      <div className='border border-black flex gap-[10px]'>
        <button className='rounded-[50%] w-[30px] h-[30px] bg-[#FF5F57]'></button>
        <button className='rounded-[50%] w-[30px] h-[30px] bg-[#FEBC2E]'></button>
        <button className='rounded-[50%] w-[30px] h-[30px] bg-[#28C840]'></button>
        </div>       
      </nav>
      <div className="">        
      </div>
    </main>
  )
}
