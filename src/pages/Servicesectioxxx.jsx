import React from "react";
import Image12 from "../assets/img12.jpg"
import Servicebg from "../assets/servicebg.webp"
import { SERVICESDATA1, SERVICESDATA2, SERVICESDATA3, SERVICESDATA4 } from "../constants";
import { FaArrowRightLong } from "react-icons/fa6";



const Servicesectioxxx = () => {
  return (
    <div className="w-full bg-white font-mont">

      
      <section
        className="w-full h-[300px] bg-cover bg-center flex items-center justify-center px-6"
        style={{ backgroundImage: `url(${Servicebg})` }}>
        <h1 className="text-white text-[50px] font-mont w-7xl flex px-2 md:px-3">Our Services</h1>
      </section>

       {SERVICESDATA1.map((section, index) => (
            <section key={index} className="flex flex-col md:flex-row gap-10 px-2 md:px-3 py-16 max-w-7xl items-center justify-center mx-auto">
       
        {/* Left Side */}
                <div className="flex-1">
                    <h2 className="text-[35px] md:text-[42px] font-normal mb-6">{section.title}</h2>

                    <div className="max-h-[250px] overflow-y-auto border-gray-200 pl-6 space-y-4 custom-scroll">
                        {section.listitems.map((item, index)=> (
                            <p key={index} className="text-[20px] cursor-pointer hover:text-gray-600">{item}<hr className="border-t-2 border-gray-100 my-4"/></p>
                        ))}
                        
                    </div>
                    <button className="pl-6 mt-2 text-blue-700 font-medium flex flex-row items-center gap-3 cursor-pointer group">
                        Explore technology <FaArrowRightLong className="w-6 transform transition-transform duration-300 group-hover:translate-x-2"/>
                    </button>
                </div>

        {/* Right Side */}
                <div className="flex-1 flex justify-center items-start">
                    <video
                        src={section.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="max-w-full h-auto rounded-lg shadow-md invert"/>
                </div>
            </section>
        ))}

        {/* .......................................................................................... */}

        {SERVICESDATA2.map((section, index) => (
            <section key={index} className="flex flex-col md:flex-row gap-10 px-2 md:px-3 py-16 max-w-7xl items-center justify-center mx-auto">
       
        {/* Left Side */}
                <div className="flex-1 flex justify-center items-start">
                    <video
                        src={section.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="max-w-full h-auto rounded-lg shadow-md"/>
                </div>

        {/* Right Side */}
                <div className="flex-1">
                    <h2 className="text-[35px] md:text-[42px] font-normal mb-6">{section.title}</h2>

                    <div className="max-h-[250px] overflow-y-auto border-gray-200 pl-6 space-y-4 custom-scroll">
                        {section.listitems.map((item, index)=> (
                            <p key={index} className="text-[20px] cursor-pointer hover:text-gray-600">{item}<hr className="border-t-2 border-gray-100 my-4"/></p>
                        ))}
                        
                    </div>
                    <button className="pl-6 mt-2 text-blue-700 font-medium flex flex-row items-center gap-3 cursor-pointer group">
                        Explore technology <FaArrowRightLong className="w-6 transform transition-transform duration-300 group-hover:translate-x-2"/>
                    </button>
                </div>
            </section>
        ))}

        {/* .......................................................................................................... */}
      {SERVICESDATA3.map((section, index) => (
            <section key={index} className="flex flex-col md:flex-row gap-10 px-2 md:px-3 py-16 max-w-7xl items-center justify-center mx-auto">
       
        {/* Left Side */}
                <div className="flex-1">
                    <h2 className="text-[35px] md:text-[42px] font-normal mb-6">{section.title}</h2>

                    <div className="max-h-[250px] overflow-y-auto border-gray-200 pl-6 space-y-4 custom-scroll">
                        {section.listitems.map((item, index)=> (
                            <p key={index} className="text-[20px] cursor-pointer hover:text-gray-600">{item}<hr className="border-t-2 border-gray-100 my-4"/></p>
                        ))}
                        
                    </div>
                    <button className="pl-6 mt-2 text-blue-700 font-medium flex flex-row items-center gap-3 cursor-pointer group">
                        Explore technology <FaArrowRightLong className="w-6 transform transition-transform duration-300 group-hover:translate-x-2"/>
                    </button>
                </div>

        {/* Right Side */}
                <div className="flex-1 flex justify-center items-start">
                    <video
                        src={section.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="max-w-full h-auto rounded-lg shadow-md"/>
                </div>
            </section>
        ))}

        {SERVICESDATA4.map((section, index) => (
            <section key={index} className="flex flex-col md:flex-row gap-10 px-2 md:px-3 py-16 max-w-7xl items-center justify-center mx-auto">
       
        {/* Left Side */}
                <div className="flex-1 flex justify-center items-start">
                    <video
                        src={section.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="max-w-[480px] h-[480px] rounded-lg shadow-md"/>
                </div>

        {/* Right Side */}
                <div className="flex-1">
                    <h2 className="text-[35px] md:text-[42px] font-normal mb-6">{section.title}</h2>

                    <div className="max-h-[250px] overflow-y-auto border-gray-200 pl-6 space-y-4 custom-scroll">
                        {section.listitems.map((item, index)=> (
                            <p key={index} className="w-full text-[20px] cursor-pointer hover:text-gray-600">{item}<hr className="border-t-2 border-gray-100 my-4"/></p>
                        ))}
                        
                    </div>
                    <button className="pl-6 mt-2 text-blue-700 font-medium flex flex-row items-center gap-3 cursor-pointer group">
                        Explore technology <FaArrowRightLong className="w-6 transform transition-transform duration-300 group-hover:translate-x-2"/>
                    </button>
                </div>
            </section>
        ))}
{/* ........................OUR IMPACT............................... */}
        <div className="w-full max-w-7xl mx-auto font-mont mb-6">
            <div className="w-full flex items-center justify-center">
                <h2 className="text-[35px] md:text-[42px] ">Our Impact</h2>
            </div>
            <div className="w-full flex flex-col items-center justify-center mt-8">
                <p className="text-center max-w-3xl font-mont text-[10px] md:text-[17px]">Every innovation that happens here is out of a quest to get better at
                     what we are already doing. We deliver ideas that make a difference, 
                     create experiences that transform lives and build ecosystems that foster progress.
                </p>
            </div>
            {/* <div className="w-full flex flex-row items-center justify-evenly">
                <div className="w-full flex flex-col ">
                    <h2 className="text-center">700+</h2>
                    <p className="max-w-xs  justify-center">Projects launched successfully across the globe</p>
                </div>
                <div className="w-full flex flex-col ">
                    <h2 className="text-center">700+</h2>
                    <p className="max-w-xs text-center justify-center">Projects launched successfully across the globe</p>
                </div>
                <div className="w-full flex flex-col ">
                    <h2 className="text-center">700+</h2>
                    <p className="max-w-xs text-center justify-center">Projects launched successfully across the globe</p>
                </div>
            </div> */}
             <div className="w-full grid grid-cols-3 gap-5 mt-5">
                <div className="flex flex-col items-center">
                    <h2 className="text-center text-[42px]">700+</h2>
                    <p className="max-w-xs text-center text-[16px]">Projects launched successfully across the globe</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-center text-[42px]">10M</h2>
                    <p className="max-w-xs text-center text-[16px]">Daily customer engagement through our projects</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-center text-[42px]">100+</h2>
                    <p className="max-w-xs text-center text-[16px]">Digital transformation stories that made a difference</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                    <button className='flex items-center justify-center gap-3 w-[200px] border border-white bg-blue-700 font-mont text-white font-semibold px-4 py-3 hover:bg-white hover:text-black hover:border-black rounded-sm transition-all duration-500 cursor-pointer mt-[80px] group'>
                        Our Impact <FaArrowRightLong className="w-6 transform transition-transform duration-300 group-hover:translate-x-2" />
                    </button>
                </div>
        </div>
    </div>
  );
};

export default Servicesectioxxx


// margin in line 28
//pl-6 in line 26