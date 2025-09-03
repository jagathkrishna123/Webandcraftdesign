
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { OUR_CLIENTS } from '../constants'

const Clients = () => {
  return (
    <div className="w-full h-full flex flex-col py-16 bg-black ">
      <div className="flex flex-col max-w-7xl mx-auto py-4  p-2  px-4 sm:px-6 md:px-8 items-center">
        <div className="flex justify-between items-center text-white  w-full ">
          <p className="text-[32px] md:text-[50px] font-mont">Clients</p>
          <p className="text-[14px] md:text-[20px] font-mont text-end md:text-start">
            Our clients are everything to us; <br /> so are we to them.
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-1 mt-16'>
          {OUR_CLIENTS.map((item, index)=>(
            <div key={index} className='flex w-[180px] h-[150px] md:w-[248px] md:h-[119px] items-center justify-center'>
                <img src={item.img} alt="" className='w-[100px] h-[40px] md:w-[120px] md:h-[60px]'/>
            </div>
          ))}
        </div>
              <button className='flex items-center gap-3 w-[200px] border border-white bg-black font-mont text-white font-semibold px-4 py-3 hover:bg-white hover:text-black transition-all duration-500 cursor-pointer mt-[80px]'>
              View all clients <FaArrowRightLong />
            </button>

      </div>
    </div>
  )
}

export default Clients
