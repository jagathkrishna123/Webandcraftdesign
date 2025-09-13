import React from 'react'
import { INSIGHTS } from '../constants'
import { FaArrowRightLong } from 'react-icons/fa6'

const Insights = () => {
  return (
    <div className='flex flex-col max-w-7xl font-mont mx-auto p-2 mt-8 mb-4'>
        <div className='w-full flex flex-col'>
            <h2 className='text-[30px] md:text-[53px]'>Insights</h2>
        </div>
        <div className='w-full flex flex-col md:flex-row gap-4 mt-5'>
            {INSIGHTS.map((item, index) => (
                <div key={index} className='w-full flex flex-col'>
                    <img src={item.img} alt="" className='w-full h-[220px] rounded-sm' />
                    <div className='w-full flex flex-row text-gray-700 justify-between p-1'>
                        <p className='text-[13px]'><span className='text-gray-950'>Blog</span>{item.time}</p>
                        <p className='text-[13px]'>{item.date}</p>
                    </div>
                    <div className='w-full h-auto flex flex-col p-1'>
                        <p className='text-[16px] md:text-[21px] font-medium text-gray-900'>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
            <div className='flex flex-col items-center justify-center'>
                <button className='flex items-center justify-center gap-3 max-w-md border border-white bg-black font-mont text-white font-semibold px-4 py-3 hover:bg-white hover:text-black hover:border-black rounded-sm transition-all duration-500 cursor-pointer mt-[80px] group'>
                        Explore all Our Impacts <FaArrowRightLong className="w-6 transform transition-transform duration-300 group-hover:translate-x-2" />
                </button>
            </div>
    </div>
  )
}

export default Insights