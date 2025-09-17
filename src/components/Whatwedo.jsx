import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import {OUR_SERVICES} from "../constants"
const Whatwedo = () => {
  return (
    <div className='max-w-7xl flex flex-col  mx-auto bg-white py-16'>
        <div className='flex flex-col '>
            <p className='text-[30px] md:text-[53px] font-medium font-mont text-gray-800'>What We Do</p>
        </div>

        <div className='w-full grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-9 mt-5 px-4 gap-3'>
            {OUR_SERVICES.map((item, index)=> (
                <div key={index} className='w-80 sm:w-75 lg:w-80 xl:w-96  rounded-md border border-gray-400 mx-auto'>
                    <img src={item.img} alt="" className='w-full h-48 object-cover'/>
                    <div className='py-5 md:py-7'>
                        <p className='p-2 text-[16px] sm:text-[10px] md:text-[20px] font-mont flex justify-center text-gray-800'>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className='flex justify-center mt-6'>
            <button className='border border-gray-700 bg-white font-mont
             text-gray-800 font-semibold mt-4 px-4 py-3 flex items-center gap-3
              hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>
                Explore What We Do <FaArrowRightLong />
            </button>
        </div>
    </div>
  )
}

export default Whatwedo