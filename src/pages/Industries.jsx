import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { INDUSTRYDATA } from "../constants";
import Insights from "./Insights";

const Industries = () => {
  const [number, setNumber] = useState(0);
  const finalNumber = 20;

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 1) + 1; // random jump
      if (current >= finalNumber) {
        current = finalNumber; // stop exactly at 100
        clearInterval(interval);
      }
      setNumber(current);
    }, 100); // every 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl flex flex-col mx-auto p-1 font-mont">
      <div className="w-full p-2">
        <div className="max-w-4xl">
          <p className="text-[40px] sm:text-[70px] md:text-[80px] font-light">
            Boosting Growth Across Industries
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full flex flex-col p-2 mt-2 gap-9">
          <div className="max-w-md">
            <p className="text-[17px]">
              Serving across a variety of industries and leaving our mark in
              every one of them
            </p>
          </div>
          <div className="flex items-center justify-center md:items-start md:justify-start">
            <button className="flex items-center justify-center gap-3 w-[160px] border border-blue-600 bg-white font-mont text-blue-600 font-semibold px-4 py-3 hover:bg-blue-600 hover:text-white hover:border-white rounded-sm transition-all duration-500 cursor-pointer mt-4 group">
              Let's Talk{" "}
              <FaArrowRightLong className="w-6 transform transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col mt-2">
          <div className="w-full flex flex-col text-[150px] sm:text-[200px] md:text-[250px] font-semibold items-center">
            <span className="bg-gradient-to-r from-blue-500 to-rose-500 bg-clip-text text-transparent">
              {number}+
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        {INDUSTRYDATA.map((item, index) => (
          <div key={index}>
            <p className="text-[40px] font-mont">{item.text} <hr className="border-t-2 border-gray-300 my-3"/></p>
          </div>
        ))}
      </div>
      <Insights/>
    </div>
  );
};

export default Industries;
