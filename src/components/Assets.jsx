import React from "react";
import { BsUpload } from "react-icons/bs";
const Assets = () => {
  return (
    <div className="h-screen w-96 bg-slate-200 flex flex-col p-4 ">
      <h1 className="text-3xl text-gray-600 ">Assets</h1><hr/>
      <div className="h-1/2 mt-4 flex flex-row gap-2 flex-wrap bg-slate-300 p-2">
      <video src="" className="w-32 h-16 bg-gray-700"></video>
      <video src="" className="w-32 h-16 bg-gray-700"></video>
      
      </div><hr/>
      <div className=" rounded bg-white p-4 flex flex-col items-center cursor-pointer ">
        <BsUpload className="" />
      <span >Upload your files</span></div>
    </div>
  );
};

export default Assets;
