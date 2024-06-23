import React from "react";
import { BsUpload } from "react-icons/bs";
const Assets = () => {
  return (
    <div className=" w-[25vw] h-full bg-white flex flex-col p-4 ">
      <h1 className="text-4xl font-bold text-gray-600 ">Assets</h1>
      <div className="h-full mt-4 flex flex-row gap-2 flex-wrap shadow-xl bg-[#f5f5f5] p-4 overflow-y-scroll">
        <div className="w-full flex flex-wrap h-fit gap-2">
          {" "}
          {/* <div>
            {" "}
            <video src="" className="w-60 h-40 bg-gray-700"></video>
            <span>oooo.mp3</span>
          </div> */}
          <video src="" className="w-60 h-40 bg-gray-700"></video>
          <video src="" className="w-60 h-40 bg-gray-700"></video>
          <video src="" className="w-60 h-40 bg-gray-700"></video>
        </div>
      </div>
      <hr />
      <div className=" rounded bg-white p-4 ">
        <div className=" border-dashed border-2 flex flex-col  hover:bg-slate-100 rounded-md items-center cursor-pointer p-4">
          <BsUpload className="w-8 h-8" />
          <span className="text-[1.2rem] font-medium text-[#00000089]">
            Upload your files
          </span>
        </div>
      </div>
    </div>
  );
};

export default Assets;
