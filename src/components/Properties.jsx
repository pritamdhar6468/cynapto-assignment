import React from "react";
import { useState } from "react";

const Properties = () => {
  const [scale, setScale] = useState(100); 
  const [opacity, setOpacity] = useState(50); 


  const handleChangeOpcity = (e) => {
    setOpacity(e.target.value);
  }


  const handleScaleChange = (event) => {
    setScale(event.target.value);
  };
  return (
    <div className="h-full  border-l  w-[25vw] p-4">
      {/* <h1 className='text-4xl font-bold text-gray-600'>Properties</h1> */}
      <div className="w-full flex justify-end">
        {" "}
        <button className="text-[1.5rem] font-medium px-4 py-2  text-gray-600 bg-slate-100 border rounded-md">
          Export
        </button>
      </div>

      <div className="properties mt-6">
        <h1 className="text-4xl font-bold text-gray-600">Properties</h1>
        <div className="pl-24 flex flex-col gap-6">
          <div className="flex items-center justify-between gap-8">
            <label className="text-[1.5rem] w-28 font-medium" htmlFor="scale-slider">
              Scale:
            </label>
            <input
              type="range"
              id="scale-slider"
              className="appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-md [&::-webkit-slider-runnable-track]:bg-black/5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[10px] [&::-webkit-slider-thumb]:rounded-md [&::-webkit-slider-thumb]:bg-[#37B7C3]"
              min="0"
              max="100"
              value={scale}
              onChange={handleScaleChange}
            />
            <span className="w-20 text-[1.5rem]">{scale} %</span>
          </div>
          <div className="flex items-center justify-between  gap-8">
            <label className="text-[1.5rem] w-28 font-medium" htmlFor="scale-slider">
              Opacity:
            </label>
            <input
              type="range"
              id="scale-slider"
              className="appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-md [&::-webkit-slider-runnable-track]:bg-black/5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[10px] [&::-webkit-slider-thumb]:rounded-md [&::-webkit-slider-thumb]:bg-[#37B7C3]"
              min="0"
              max="100"
              value={opacity}
              onChange={handleChangeOpcity}
            />
            <span className="w-20 text-[1.5rem]">{opacity} %</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
