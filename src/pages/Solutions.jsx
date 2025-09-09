import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { SOLUTIONDATA } from "../constants";
import Cardimg from "../assets/card.webp";

const Solutions = () => {
  return (
    <div className="max-w-7xl w-full flex flex-col items-center justify-center font-mont mb-5 mx-auto p-4 md:p-6">
      <div className="p-[2.5px] rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-blue-800 inline-block mt-3">
        <button className="text-[12px] font-medium px-3 py-2 rounded-full bg-white text-gray-800">
          e-commerce suite
        </button>
      </div>

      <div className="w-full flex flex-col items-center gap-3">
        <h2 className="text-[70px] font-medium max-w-2xl text-center items-center justify-center flex flex-col leading-snug">
          {/* Introducing WAC Commerce */}
          <span>Introducing</span>
          <span>WAC Commerce</span>
        </h2>
        <p>
          A unified solution, designed particularly to manage, develop, and
          enhance your eCommerce ecosystem.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <button className="flex items-center justify-center gap-3 w-[160px] border border-white bg-blue-700 font-mont text-white font-semibold px-4 py-3 hover:bg-white hover:text-black hover:border-black rounded-sm transition-all duration-500 cursor-pointer mt-4 group">
          Let's Talk{" "}
          <FaArrowRightLong className="w-6 transform transition-transform duration-300 group-hover:translate-x-2" />
        </button>
      </div>
      <div className="flex items-center justify-center mt-8">
        <video
              className="max-w-3xl shadow-lg rounded-md"
              src="/videos/solutionvid.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"/>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-10 items-center justify-between p-4 mt-16 mb-16">
        <div className="w-full items-center text-start ">
          <p className="text-[43px] max-w-md">
            Integrating AI and Commerce to Accelerate Success
          </p>
        </div>
        <div className="w-full items-end flex justify-end">
          <div className="w-full flex items-end justify-center">
            <p className="w-full flex text-[16px] max-w-lg font-medium leading-loose">
              WAC Commerce provides a streamlined, all-in-one solution that
              integrates, scales, and simplifies retail operations while
              enhancing customer experience. From dynamic D2C brands to
              large-scale B2B enterprises, our intelligent modules collaborate
              seamlessly to optimize your business processes.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col mt-4">
        {SOLUTIONDATA.map((item,index) => (
            <div key={item.id} className={`w-full flex flex-row items-center gap-3 justify-between ${index % 2 !==0 ? "md:flex-row-reverse" : ""} `}>
                <img src={item.img} alt="" className="max-w-xl rounded-md shadow-lg"/>
                <div className="w-full flex flex-col max-w-xl items-center justify-center gap-3">
                    <p className="text-[36px] font-medium">{item.title}</p>
                    <p className="text-[17px] leading-loose">{item.description}</p>
                </div>
            </div>
        ))}
      </div>

      <div className="max-w-7xl w-full bg-amber-600 h-[500px] md:h-auto rounded-md mt-4 flex flex-col md:flex-row justify-start p-16 gap-2 relative">
          <div className="max-w-xl bg-amber-800 flex flex-col">
            <span className="text-[30px] md:text-[48px]">Get Started with WAC</span>
            <span className="text-[30px] md:text-[48px]">Commerce</span>

            <button className='flex items-center justify-center gap-3 max-w-xs border border-white bg-black font-mont text-white font-semibold px-4 py-3 hover:bg-white hover:text-black hover:border-black rounded-sm transition-all duration-500 mt-6 cursor-pointer group'>
                Talk to Our Experts
               <FaArrowRightLong className="w-6 transform transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>
          <div className="flex-1 max-w-xl">
            <img src={Cardimg} alt="" className="absolute w-md sm:w-lg md:w-xl right-2 bottom-0" />
          </div>
      </div>
    </div>
  );
};

export default Solutions;
