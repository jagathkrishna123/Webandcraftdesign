// import React from 'react'

// const Header = () => {
//   return (
//     <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("")]'>

//     </div>
//   )
// }

// export default Header

import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';


const Header = () => {
  return (
    <div className="relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 h-screen text-white overflow-hidden">
      
          <video className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            src="/videos/bgvideo.mp4"
            autoPlay
            loop
            muted
            playsInline/>

          {/*---------------------*/}
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10" />

          {/* Text------------------------- */}
          <motion.h1 className="text-5xl md:text-6xl font-extralight font-mont leading-relaxed" 
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.4}}>
           The Ultimate <span className="font-normal bg-gradient-to-b from-green-200 to-green-500 bg-clip-text text-transparent">Software</span><br /> <span>For Your Business</span>
          </motion.h1>
          
          <motion.button className="flex flex-row gap-3 items-center mt-8 text-lg md:text-[13px] max-w-lg font-mont bg-green-700 px-4 py-3 rounded shadow-lg"
          initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.6}}>
            Event highlights <FaArrowRightLong />
          </motion.button>
    </div>
  );
};

export default Header;
