import React, { useState } from "react";
import Getaquote from "../pages/Getaquote";
import Partnership from "../pages/Partnership";
import Genquiry from "../pages/Genquiry";
import { FaArrowRightLong } from "react-icons/fa6";
import Locations from "../pages/Locations";

const Contact = () => {
  const [menu, setMenu] = useState("getaquote")
  const [activeTab, setActiveTab] = useState("getaquote");

  return (
    <div className="w-full bg-black">
    <div className="max-w-7xl flex flex-col md:flex-row p-4 md:p-3  font-mont mx-auto text-white bg-black">
      <div className="flex flex-1">
        {activeTab === "getaquote" && <Getaquote />}
        {activeTab === "partnership" && <Partnership />}
        {activeTab === "getenquiry" && <Genquiry />}
      </div>

      <div className="flex flex-col font-mont flex-1 bg-black">
        <div className="flex flex-col h-full justify-evenly">
          <div className="flex flex-row items-center justify-evenly font-semibold p-3 md:p-3">
            <button
              onClick={() => setActiveTab("getaquote")}
              className={menu === "getaquote"}>
              Get a quote
            </button>

            <button
              onClick={() => setActiveTab("partnership")}
              className="cursor-pointer">
              Partnership
            </button>

            <button
              onClick={() => setActiveTab("getenquiry")}
              className="cursor-pointer">
              General Enquiry
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-evenly mt-8 space-y-8">
            <div className="flex flex-col gap-3">
              <label htmlFor="">First Name*</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className=" border-b-2 outline-none"/>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="border-b-2 outline-none"/>
            </div>
          </div>

          <div className="flex flex-col h-full justify-evenly mt-3 space-y-8">
            <div className="flex flex-col gap-3">
              <label htmlFor="">Email*</label>
              <input
                type="text"
                placeholder="Enter email"
                className="border-b-2 outline-none"/>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="">Tell us more</label>
              <textarea
                name=""
                id=""
                placeholder="Brief about your project"
                className="border border-gray-600 rounded-md h-[150px] p-2"
              ></textarea>
            </div>
          </div>
          <div className="w-full h-full flex justify-end">
            <button
            className="w-[160px] md:w-[210px] text-[12px] md:text-[16px] border border-black bg-white font-mont text-black font-semibold px-4 py-3 flex items-center gap-3 hover:bg-black hover:text-white hover:border-white transition-all  duration-500 cursor-pointer mt-[40px]">
            Send Enquiry <FaArrowRightLong />
          </button>
          </div>
        </div>
      </div>
    </div>
    <Locations/>
    </div>
  );
};

export default Contact;
