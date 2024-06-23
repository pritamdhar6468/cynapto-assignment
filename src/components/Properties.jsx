import React from "react";
import { useState } from "react";
import { LuFlipHorizontal2 } from "react-icons/lu";
import { LuFlipVertical2 } from "react-icons/lu";

const Properties = () => {
  const [scale, setScale] = useState(100);
  const [opacity, setOpacity] = useState(50);

  const handleChangeOpcity = (e) => {
    setOpacity(e.target.value);
  };

  const handleScaleChange = (event) => {
    setScale(event.target.value);
  };
  return (
    <div className="h-full bg-[#ffffffd4]  border-l  w-[25vw] p-4">
      {/* <h1 className='text-4xl font-bold text-gray-600'>Properties</h1> */}
      <div className="w-full flex justify-end">
        {" "}
        <button className="text-[1.5rem] font-medium px-4 py-2  text-gray-600 bg-slate-100 border rounded-md">
          Export
        </button>
      </div>

      <div className="properties mt-6 flex flex-col justify-between h-[90%] ">
        <div className=" flex flex-col gap-3 ">
          <h1 className="text-4xl font-bold text-gray-600 mb-4">Properties</h1>

          <div className="flex shadow1 items-center justify-between gap-8 p-6 rounded-lg bg-white border-[.5px]">
            <label
              className="text-[1.5rem] w-28 font-medium"
              htmlFor="scale-slider"
            >
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
            <span className="w-20 flex justify-end text-[1.5rem]">
              {scale} %
            </span>
          </div>
          <div className="flex shadow1 border-[.5px] rounded-lg  items-center justify-between  bg-white  gap-8 p-6">
            <label
              className="text-[1.5rem] w-28 font-medium"
              htmlFor="scale-slider"
            >
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
            <span className="w-20 flex justify-end text-[1.5rem]">
              {opacity} %
            </span>
          </div>

          <div className="flex gap-3">
            <div className="flex shadow1 border-[.5px] rounded-lg  items-center justify-between  bg-white  gap-8 p-6 w-full">
              <label
                className="text-[1.5rem] w-28 font-medium"
                htmlFor="scale-slider"
              >
                Rotatation:
              </label>
              <input
                type="text"
                className="appearance-none w-20 bg-slate-100 rounded-md text-center text-[1.5rem]"
                min="0"
                max="100"
                value="0°"
              />
            </div>
            <div className="flex shadow1 border-[.5px] rounded-lg  items-center justify-between  bg-white  gap-8 p-6">
              <LuFlipHorizontal2 className="w-8 h-8" />
            </div>
            <div className="flex shadow1 border-[.5px] rounded-lg  items-center justify-between  bg-white  gap-8 p-6">
              <LuFlipVertical2 className="w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-[1.5rem] font-medium">Position</h1>
          <div className="flex gap-3">
            <div className="flex shadow1 w-full border-[.5px] rounded-lg  items-center justify-between  bg-white  gap-8 p-6">
              <span className="text-[1.5rem]">X</span>{" "}
              <input
                type="text"
                className="appearance-none w-20 bg-slate-100 rounded-md text-center text-[1.5rem]"
                min="0"
                max="100"
                value="0.0"
              />
            </div>
            <div className="flex shadow1 w-full border-[.5px] rounded-lg  items-center justify-between  bg-white  gap-8 p-6">
              <span className="text-[1.5rem]">Y</span>{" "}
              <input
                type="text"
                className="appearance-none w-20 bg-slate-100 rounded-md text-center text-[1.5rem]"
                min="0"
                max="100"
                value="0.0"
              />
            </div>
            <div className="flex shadow1 w-full border-[.5px] rounded-lg  items-center justify-between  bg-white  gap-8 p-6">
              <span className="text-[1.5rem]">Z</span>{" "}
              <input
                type="text"
                className="appearance-none w-20 bg-slate-100 rounded-md text-center text-[1.5rem]"
                min="0"
                max="100"
                value="0.0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
