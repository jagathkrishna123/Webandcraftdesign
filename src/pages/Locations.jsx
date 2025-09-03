// import React from 'react'
// import Mggs from "../assets/message.svg"
// import Sales from "../assets/sales.svg"
// import Email from "../assets/email.svg"
// import Hrenq from "../assets/hrenq.svg"
// import Flag from "../assets/flag.webp"
// import Gate from "../assets/gate.webp"
// const Locations = () => {
//   return (
//     <div className='flex flex-col max-w-7xl mx-auto mt-16 text-white'>
//         <div className='flex flex-col items-center justify-center'>
//             <p className='text-[50px]'>Our Locations</p>
//             <p className='text-[18px]'>We work in all corners of the world. Find a WAC location near you.</p>
//         </div>

//         <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-8'>
//             <div className='grid grid-cols-1 gap-4 '>
//                 <img src={Gate} alt="" className='w-[450px]' />
//                 <p className='flex flex-row items-center gap-8'><img src={Flag} alt="" className='w-[50px]' />INDIA</p>
//                 <p>Webandcrafts Technology Solutions Pvt. Ltd. Special Economic Zone (SEZ) Infopark Thrissur, Koratty P.O, Thrissur - 680308, Kerala, India.</p>
//                 <p className='font-bold mb-6'>Google Map</p>
//             </div>

//             <div className='grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-3'>
//                 <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center  gap-8 border border-gray-600'>
//                     <img src={Mggs} alt="" />
//                     <div className='flex flex-col'>
//                         <p>General Enquiry</p>
//                         <p>+91 480 2733 111</p>
//                     </div>
//                 </div>
//                 <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-8 border border-gray-600'>
//                     <img src={Sales} alt="" />
//                     <div className='flex flex-col'>
//                         <p>General Enquiry</p>
//                         <p>+91 480 2733 111</p>
//                     </div>
//                 </div>
//                 <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-8 border border-gray-600'>
//                     <img src={Email} alt="" />
//                     <div className='flex flex-col'>
//                         <p>General Enquiry</p>
//                         <p>+91 480 2733 111</p>
//                     </div>
//                 </div>
//                 <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-8 border border-gray-600'>
//                     <img src={Hrenq} alt="" />
//                     <div className='flex flex-col'>
//                         <p>General Enquiry</p>
//                         <p>+91 480 2733 111</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <hr className='border-gray-900' />
//         {/* ......................................................................................................................... */}
//         <div className='mt-10 flex flex-row'>
//             <div className='flex flex-col gap-8'>
//                 <img src={Gate} alt="" className='w-[450px]' />
//                 <p className='flex flex-row gap-8 items-center'><img src={Flag} alt="" className='w-[50px]' />USA</p>
//                 <p>Webandcrafts LLC, 20 F Street Northwest, 7th floor, Washington, District of Columbia 20001.</p>
//                 <p className='font-bold underline'>Google map</p>
//             </div>

//             <div className=' flex flex-row gap-6'>
//                 <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-8 border border-gray-600'>
//                     <img src={Sales} alt="" />
//                     <div className='flex flex-col'>
//                         <p>General Enquiry</p>
//                         <p>+91 480 2733 111</p>
//                     </div>
//                 </div>
//                 <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-8 border border-gray-600'>
//                     <img src={Sales} alt="" />
//                     <div className='flex flex-col'>
//                         <p>General Enquiry</p>
//                         <p>+91 480 2733 111</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Locations

import React from "react";
import Mggs from "../assets/message.svg";
import Sales from "../assets/sales.svg";
import Email from "../assets/email.svg";
import Hrenq from "../assets/hrenq.svg";
import Flag from "../assets/flag.webp";
import Gate from "../assets/gate.webp";
import Usaflag from "../assets/usaflag.webp"
import Usalibrty from "../assets/usalibrty.webp"
import { FaLocationDot } from "react-icons/fa6";


const Locations = () => {
  return (
    <div className="w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4">
        <div className="text-center mb-12">
          <h2 className="text-[30px] md:text-[50px] font-normal font-mont text-white">Our Locations</h2>
          <p className="text-[20px] md:text-[28px] font-mont text-gray-400 mt-2">
            We work in all corners of the world. Find a WAC location near you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {/* left.......*/}
          <div className="flex flex-col space-y-4">
            <img src={Gate} alt="India Gate" className="rounded-md w-full h-52 object-cover"/>
            <div className="flex items-center space-x-2">
              <img src={Flag} alt="India Flag" className="w-6 h-4" />
              <h3 className="text-xl font-bold">INDIA</h3>
            </div>

            <p className="text-gray-300 font-mont leading-relaxed">
              Webandcrafts Technology Solutions Pvt. Ltd. <br />
              Special Economic Zone (SEZ) Infopark <br />
              Thrissur, Koratty P.O, Thrissur - 680308, Kerala, India.
            </p>

            <a href="#" className="flex items-center space-x-2 text-sm font-medium text-white">
              <FaLocationDot />
              <span className="border-b border-black">Google Map</span>
            </a>
          </div>

          {/* Right............ */}
          <div className=' flex-cols-1 md:grid-cols-2 gap-6 md:gap-4 justify-center items-center space-x-3 space-y-3'>
                          <div className='w-full h-[80px] md:w-md md:h-[90px] flex flex-row  rounded-sm items-center justify-center gap-4  md:gap-8 border border-gray-600'>
                              <img src={Mggs} alt="" className="w-[30px] md:w-[40px]"/>
                              <div className='flex flex-col'>
                                  <p className="text-[14px] md:text-[16px]">General Enquiry</p>
                                  <p className="text-[14px] md:text-[16px]">+91 480 2733 111</p>
                              </div>
                          </div>
                          <div className='w-full h-[80px] md:w-md md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-4  md:gap-8 border border-gray-600'>
                              <img src={Sales} alt="" className="w-[30px] md:w-[40px]"/>
                              <div className='flex flex-col'>
                                  <p className="text-[14px] md:text-[16px]">General Enquiry</p>
                                  <p className="text-[14px] md:text-[16px]">+91 480 2733 111</p>
                              </div>
                          </div>
                          <div className='w-full h-[80px] md:w-md md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-4  md:gap-8 border border-gray-600'>
                              <img src={Email} alt="" className="w-[30px] md:w-[40px]"/>
                              <div className='flex flex-col'>
                                  <p className="text-[14px] md:text-[16px]">General Enquiry</p>
                                  <p className="text-[14px] md:text-[16px]">+91 480 2733 111</p>
                              </div>
                          </div>
                          <div className='w-full h-[80px] md:w-md md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-4  md:gap-8 border border-gray-600'>
                              <img src={Hrenq} alt="" className="w-[30px] md:w-[40px]"/>
                              <div className='flex flex-col'>
                                  <p className="text-[14px] md:text-[16px]">General Enquiry</p>
                                  <p className="text-[14px] md:text-[16px]">+91 480 2733 111</p>
                              </div>
                          </div>
                      </div>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-16">
          {/* left.......*/}
          <div className="flex flex-col space-y-4">
            <img src={Usalibrty} alt="India Gate" className="rounded-md w-full h-52 object-cover"/>
            <div className="flex items-center space-x-2">
              <img src={Usaflag} alt="India Flag" className="w-6 h-4" />
              <h3 className="text-xl font-bold">USA</h3>
            </div>

            <p className="text-gray-300 font-mont leading-relaxed">
              Webandcrafts LLC, 20 F Street Northwest, 7th <br /> floor, Washington, District of Columbia 20001.
            </p>

            <a href="#" className="flex items-center space-x-2 text-sm font-medium text-white">
              <FaLocationDot />
              <span className="border-b border-black">Google Map</span>
            </a>
          </div>

          {/* Right............ */}
          <div className='flex-cols-1 md:flex justify-center md:space-x-3 space-y-4'>
                          <div className='w-full h-[80px] md:w-[280px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center  gap-8 border border-gray-600'>
                              <img src={Mggs} alt="" className="w-[30px] md:w-[40px]"/>
                              <div className='flex flex-col'>
                                  <p>General Enquiry</p>
                                  <p>+91 480 2733 111</p>
                              </div>
                          </div>
                          <div className='w-full h-[80px] md:w-[280px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-8 border border-gray-600'>
                              <img src={Sales} alt="" className="w-[30px] md:w-[40px]"/>
                              <div className='flex flex-col'>
                                  <p>General Enquiry</p>
                                  <p>+91 480 2733 111</p>
                              </div>
                          </div>
                          
                      </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
