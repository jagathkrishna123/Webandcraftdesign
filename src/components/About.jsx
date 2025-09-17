import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <div className="w-full bg-black flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8">

        {/* Left Column - Text */}
        <div className="flex flex-col justify-center items-center md:items-start p-8">
          <p className="text-gray-300 text-[45px] sm:text-[60px] md:text-[75px] font-mont">
            Our Story
          </p>
          <p className="text-gray-200 text-[18px] sm:text-[21px] md:text-[25px] font-mont mt-4">
            In a world brimming with possibilities, we sprouted,
            seizing our destiny to create an extraordinary narrative
            - a tale that encapsulates laughter, tears, challenges, and triumphs.
          </p>

          <button className="max-w-[200px] border border-white bg-black font-mont
             text-white font-semibold px-4 py-3 flex items-center
             gap-3 hover:bg-white hover:text-black transition-all 
             duration-500 cursor-pointer mt-8">
            View all works <FaArrowRightLong />
          </button>
        </div>

        {/* Right Column - Video */}
<div className="flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
  <div className="w-full">
    <video
      className="w-full max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] object-cover rounded-lg shadow-lg"
      src="/videos/gift.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default About;
