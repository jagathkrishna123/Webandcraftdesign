import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const About = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-black h-screen mt-4'>
            <div className='flex flex-col items-start justify-center p-8 bg-black'>
                <div className='mx-auto max-w-2xl'>
                    <p className='text-gray-300 text-left text-[45px] sm:text-[60px] md:text-[75px] font-mont'>Our Story</p>
                    <p className='text-gray-200 text-[18px] sm:text-[21px] md:text-[25px] font-mont'>In a world brimming with possibilities, we sprouted,
                        seizing our destiny to create an extraordinary narrative
                    - a tale that encapsulates laughter, tears, challenges, and triumphsx.
                    </p>

                <button className='border border-white bg-black font-mont
                 text-white font-semibold px-4 py-3 flex items-center
                  gap-3 hover:bg-white hover:text-black transition-all 
                  duration-500 cursor-pointer mt-[40px]'>View all works <FaArrowRightLong />
                </button>
                </div>
            </div>

        
          <div className="flex items-center justify-center relative h-full">
            <video
              className="w-[50%] md:w-[80%] h-auto shadow-lg"
              src="/videos/gift.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"/>
        </div>
       
    </div>
  )
}

export default About