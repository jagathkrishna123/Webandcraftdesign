import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

import { CASESTUDIESWORKDATA } from '../constants'

const CaseStudies = () => {
  return (
    // bg-amber-600 vv
    <div className='w-full max-w-7xl flex flex-col items-center justify-center mx-auto p-3 font-mont bg-white'>
        <div className='w-full flex flex-row items-center justify-between'>
            <div>
                <h2 className='text-[53px] font-mont'>Case Studies</h2>
            </div>
            <div className='flex flex-row max-w-md gap-3'>
                <button className='text-[16px] border border-gray-900 rounded-full px-4 py-2 flex flex-row items-center gap-2'>Industries <IoIosArrowDown /></button>
                <button className='text-[16px] border border-gray-900 rounded-full px-4 py-2 flex flex-row items-center gap-2'>Expertise <IoIosArrowDown /></button>
            </div>
        </div>
{/* bg-gray-500 vv */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-5 mt-3 gap-y-9'>
            {CASESTUDIESWORKDATA.map((item, index) => (
             <div key={index} className='w-full rounded-md mt-3'>
                {item.media.endsWith(".mp4") ? (
                <video 
                    src={item.media} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-50 object-cover rounded-lg"
                />
                ) : (
                <img 
                    src={item.media} 
                    alt={item.title} 
                    className="w-full h-50 object-cover rounded-lg"
                />
                )}

                <div className='flex flex-col gap-3 mt-3'>
                    <p className='text-[16px] font-mont font-semibold text-gray-900'>{item.title}</p>
                    <p className='text-[18px] font-mont text-[#141414]'>{item.subtitle}</p>
                </div>

             </div>
            ))}
        </div>
    </div>
  )
}

export default CaseStudies