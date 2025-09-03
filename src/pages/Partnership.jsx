import React from 'react'
import Doc from "../assets/doc.png"
import { LiaDownloadSolid } from "react-icons/lia";

const Partnership = () => {
  return (
    <div className='w-[400px] h-[565px] p-3 bg-black text-white font-geist '>
            <div className='flex flex-col p-3 h-full justify-evenly'> 
                <div className='text-5xl font-normal text-gray-300'>
                    <p>Everything's Better Together</p>
                </div>
                <div className='text-[16px] font-poppins'>
                    <p>Together, let's get a taste of industry leadership..</p>
                </div>
    
                <div className='flex flex-row gap-1'>
                    <img src={Doc} alt="" className='w-[99px] h-[99px]' />
                    <div className='flex flex-col items-center justify-center border border-gray-500 rounded-sm px-8'>
                        <p className='text-[14px]'>Download Our Bronche</p>
                        <p className='flex flex-row items-center text-[12px]'>PDF 2.0 MB <LiaDownloadSolid className='w-8'/></p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Partnership