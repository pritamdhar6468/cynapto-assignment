import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Gallary from "../components/Gallary";

const Allvideo = () => {
  return (
    <>
      <div className="flex flex-row ">
        <Sidebar className="" />
        <div className="w-full p-8 bg-[#EBF4F6]">
          <Navbar />
          <div className=" flex  w-full gap-8 mt-4 p-4  ">
            <div className="border flex justify-center item-center w-[10rem] rounded-full bg-white text-black font-semibold text-[1.8rem] p-4 cursor-pointer ">
              ALL
            </div>
            <div className="border flex justify-center item-center w-[10rem] rounded-full bg-white text-black font-semibold text-[1.8rem] p-4 cursor-pointer">
              Hindi
            </div>
            <div className="border flex justify-center item-center w-[10rem] rounded-full bg-white text-black font-semibold text-[1.8rem] p-4 cursor-pointer">
              English
            </div>
            <div className="border  flex justify-center item-center w-[10rem]  rounded-full bg-white text-black font-semibold text-[1.8rem] p-4 cursor-pointer">
              Marathi
            </div>
            <div className="border flex justify-center item-center w-[10rem] rounded-full bg-white text-black font-semibold text-[1.8rem] p-4 cursor-pointer">
              Telugu
            </div>
          </div>
         <div>
         < Gallary className=""/>
         </div>
        </div>
      </div>
    </>
  );
};

export default Allvideo;
