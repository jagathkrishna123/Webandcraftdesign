import { div } from "framer-motion/client";
import React from "react";
import { WACCOMMERCE } from "../constants";

const Waccommerce = () => {
  return (
    // <div className='w-full item-center justify-center p-2       bg-amber-600bg-amber-600vv'>
    <div className="flex flex-col w-full max-w-7xl rounded-md mx-auto h-auto p-2 gap-4 mb-8">
      <div className="max-w-2xl mt-2">
        <h2 className="text-[32px] md:text-[48px] pl-3 md:p-1">
          WAC Commerce Use Cases
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 font-mont gap-4 mt-3 gap-y-8">
        {WACCOMMERCE.map((item, index) => (
          <div key={index} className="w-full flex flex-col rounded gap-5 p-2 border border-gray-300">
            <div>
              <img src={item.img} alt="" />
            </div>
            <div className="w-full flex flex-col gap-5">
              <p className="font-medium text-[21px]">{item.title}</p>
              <p className="text-[14px]">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default Waccommerce;
