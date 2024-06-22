import React from "react";
import { BsCrop } from "react-icons/bs";
import { PiResize } from "react-icons/pi";
import { FaUndo } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";

import { IoPlayCircleSharp } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { IoPlayBack } from "react-icons/io5";
import video from '../assets/video.mp4'
const Workspace = () => {
  return (
    <div className=" flex flex-col items-center w-[50vw]">
      <ul className="flex gap-8 p-4">
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
      </ul>
      <div className="m-8 ">
        <video controls
          src={video}
          className="h-full rounded-md bg-slate-500"
        ></video>
      </div>
      {/* <div className="h-16 bg-slate-200">
        <ul className="flex gap-2 p-2 text-md">
          <li>
            <IoPlayBack />
          </li>
          <li>
            <IoPlayCircleSharp />
          </li>{" "}
          <li>
            <IoPlayForward />
          </li>{" "}
        </ul>
        <span className="p-2">00:00</span>
        <div></div>
      </div> */}
    </div>
  );
};

export default Workspace;
