import React from "react";
import { BsCrop } from "react-icons/bs";
import { PiResize } from "react-icons/pi";
import { FaUndo } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";

import { IoPlayCircleSharp } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { IoPlayBack } from "react-icons/io5";
const Workspace = () => {
  return (
    <div className="">
      <ul className="flex gap-8 p-4">
        <li>
          <BsCrop />
        </li>
        <li>
          <PiResize />
        </li>
        <li>
          <FaUndo />
        </li>
        <li>
          <FaRedo />
        </li>
      </ul>
      <div>
        <video
          src="assets/video.mp4"
          className="h-[25rem] bg-slate-500"
        ></video>
      </div>
      <div className="h-16 bg-slate-200">
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
        <div>

        </div>
      </div>
    </div>
  );
};

export default Workspace;
