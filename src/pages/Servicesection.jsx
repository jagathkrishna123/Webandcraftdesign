// import React from 'react'

// const Servicesection = () => {
//   return (
//     <div className='flex w-full h-full '>

//     </div>
//   )
// }

// export default Servicesection


import React from "react";
import Image12 from "../assets/img12.jpg"
import Servicebg from "../assets/servicebg.webp"



const Servicesection = () => {
  return (
    <div className="w-full bg-white font-mont">

      
      <section
        className="w-full h-[300px] bg-cover bg-center flex items-center justify-center px-6"
        style={{ backgroundImage: `url(${Servicebg})` }}>
        <h1 className="text-white text-[50px] font-mont w-7xl flex px-2 md:px-3">Our Services</h1>
      </section>

      
      <section className="flex flex-col md:flex-row gap-10 px-2 md:px-3 py-16 max-w-7xl items-center justify-center mx-auto">
        
        {/* Left Side */}
        <div className="flex-1">
          <h2 className="text-[42px] font-normal mb-6">Experience Design</h2>

          <div className="max-h-[250px] overflow-y-auto border-l-2 border-gray-200 pl-6 space-y-4">
            <p className="text-lg cursor-pointer hover:text-blue-600">UI/UX Design</p>
            <p className="text-lg cursor-pointer hover:text-blue-600">Website Design</p>
            <p className="text-lg cursor-pointer hover:text-blue-600">Mobile Experience</p>
            <p className="text-lg cursor-pointer hover:text-blue-600">Commerce Experience</p>
            <p className="text-lg cursor-pointer hover:text-blue-600">Human Machine Interface (HMI)</p>
            <p className="text-lg cursor-pointer hover:text-blue-600">Applications and Dashboards</p>
            <p className="text-lg cursor-pointer hover:text-blue-600">Wearable App Design</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center items-start">
          {/* <img
            src={Image12} // replace with your image
            alt="Experience Design"
            className="max-w-full h-auto rounded-lg shadow-md"
          /> */}
          <video
            src="/videos/mock1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="max-w-full h-auto rounded-lg shadow-md invert"
            />
        </div>
      </section>
    </div>
  );
};

export default Servicesection;
