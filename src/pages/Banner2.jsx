import React from 'react'
import Bannerimage2 from "../assets/bannerimg2.webp"
import { FaArrowRightLong } from 'react-icons/fa6'
const Banner2 = () => {
  return (
    <div className="w-full h-[500px] bg-cover bg-center flex items-center justify-center px-6"
            style={{ backgroundImage: `url(${Bannerimage2})` }}>
        <div className='max-w-3xl flex flex-col font-mont'>
            <p className='text-white text-[32px] md:text-[48px] text-center'>Ready to Transform Your Retail Business?</p>
            <div className='w-full flex flex-col items-center justify-center'>
                <button className='flex items-center text-[16px] justify-center gap-3 max-w-md border border-white bg-black font-mont text-white font-semibold px-4 py-3 hover:bg-white hover:text-black hover:border-black rounded-sm transition-all duration-500 cursor-pointer mt-8 group'>
                 Talk to Our Experts <FaArrowRightLong className="w-6 transform transition-transform duration-300 group-hover:translate-x-2" />
            </button>
            </div>
        </div>

    </div>
  )
}

export default Banner2