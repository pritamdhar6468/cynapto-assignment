import React from "react";
import { BsCrop } from "react-icons/bs";
import { PiResize } from "react-icons/pi";
import { FaUndo, FaRedo } from "react-icons/fa";
import video from "../assets/video2.mp4";
import { LuHand } from "react-icons/lu";
import { FaMousePointer } from "react-icons/fa";

const Workspace = ({ videoRef, currentVideoTime, setCurrentVideoTime }) => {
  return (
    <div className="flex flex-col items-center h-full w-[50vw]">
      <ul className="flex gap-8 p-4">
        <li>
          <FaMousePointer className=" text-[1.8rem] cursor-pointer" />
        </li>
        <li>
          <LuHand className=" text-[1.8rem] cursor-pointer" />
        </li>
        <li>
          <BsCrop className=" text-[1.8rem] cursor-pointer" />
        </li>
        <li>
          <PiResize className=" text-[1.8rem] cursor-pointer" />
        </li>
        <li>
          <FaUndo className=" mt-1 text-[1.6rem] cursor-pointer" />
        </li>
        <li>
          <FaRedo className="mt-1 text-[1.6rem] cursor-pointer" />
        </li>
        <li>
          <select className="text-[1.4rem]" name="100%" id="">
            <option value="50%" className="text-[1.4rem]">
              {" "}
              10%
            </option>
            <option value="50%" className="text-[1.4rem]">
              {" "}
              20%
            </option>
            <option value="50%" className="text-[1.4rem]">
              {" "}
              30%
            </option>
            <option value="50%" className="text-[1.4rem]">
              {" "}
              50%
            </option>
            <option value="50%" className="text-[1.4rem]">
              {" "}
              80%
            </option>
            <option value="50%" className="text-[1.4rem]">
              {" "}
              100%
            </option>
          </select>
        </li>
      </ul>
      <div className="">
        <video
          ref={videoRef}
          src={video}
          controls
          className=" w-[70rem] rounded-md bg-slate-500"
        />
      </div>
    </div>
  );
};

export default Workspace;
