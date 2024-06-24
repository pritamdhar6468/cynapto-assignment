import React from "react";
import { BsCrop } from "react-icons/bs";
import { PiResize } from "react-icons/pi";
import { FaUndo, FaRedo } from "react-icons/fa";
import video from "../assets/video.mp4";
import { LuHand } from "react-icons/lu";
import { FaMousePointer } from "react-icons/fa";

const Workspace = ({ videoRef, currentVideoTime, setCurrentVideoTime }) => {
  return (
    <div className="flex flex-col items-center h-full w-[50vw]">
      <ul className="flex gap-8 p-4">
        <li>
          <FaMousePointer className="w-8 h-8" />
        </li>
        <li>
          <LuHand className="w-8 h-8" />
        </li>
        <li>
          <BsCrop className="w-8 h-8" />
        </li>
        <li>
          <PiResize className="w-8 h-8" />
        </li>
        <li>
          <FaUndo className="w-8 h-8" />
        </li>
        <li>
          <FaRedo className="w-8 h-8" />
        </li>
        <li>
          <select className="text-[1.4rem]" name="100%" id="">
            <option value="50%" className="text-[1.4rem]"> 10%</option>
            <option value="50%" className="text-[1.4rem]"> 20%</option>
            <option value="50%" className="text-[1.4rem]"> 30%</option>
            <option value="50%" className="text-[1.4rem]"> 50%</option>
            <option value="50%" className="text-[1.4rem]"> 80%</option>
            <option value="50%" className="text-[1.4rem]"> 100%</option>



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
