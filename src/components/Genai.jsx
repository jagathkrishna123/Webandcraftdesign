// import React from 'react'

// const Genai = () => {
//   return (
//     <div className='w-full h-full relative flex flex-col overflow-hidden'>
//         <video
//               className="max-w-full h-full shadow-lg object-cover absolute -z-20"
//               src="/videos/fluidsphere2.mp4"
//               autoPlay
//               loop
//               muted
//               playsInline
//               preload="auto"/>

//     </div>
//   )
// }

// export default Genai

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Genai = () => {
  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/videos/fluidsphere2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/*---------------------*/}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10" />

      {/* Text------------------------- */}
      <div className="absolute inset-0 flex flex-row items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal font-mont absolute text-center justify-center items-center">
          Unlock The
          <br /> Power of{" "}
          <span className=" bg-gradient-to-l from-blue-700 to bg-pink-500 bg-clip-text text-transparent">
            Gen AI
          </span>
        </h1>
        <button className="flex items-center justify-center gap-3 w-[160px] border border-blue-600 font-mont text-blue-600 font-semibold px-4 py-3 hover:text-white hover:border-white rounded-sm transition-all duration-500 cursor-pointer mt-[180px] group">
          Let's Talk
          <FaArrowRightLong className="w-6 transform transition-transform duration-300 group-hover:translate-x-2" />
        </button>
      </div>
    </div>
  );
};

export default Genai;
