import React, { useRef, useState, useEffect } from "react";
import { BsCrop } from "react-icons/bs";
import { PiResize } from "react-icons/pi";
import { FaUndo } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";

import { IoPlayCircleSharp, IoPauseCircleSharp } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { IoPlayBack } from "react-icons/io5";
import video from "../assets/video.mp4";
const Workspace = ({ videoRef }) => {
  return (
    <div className=" flex flex-col items-center h-full w-[50vw]">
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
      <div className="m-8">
          {" "}
          <video
            ref={videoRef}
            src={video}
            controls
            className=" h-[100%] rounded-md bg-slate-500"
          ></video>

        {/* <div className="text-center mt-2">
        <p>Current Time: {currentTime.toFixed(2)}s</p>
        <p>Total Duration: {duration.toFixed(2)}s</p>
      </div> */}
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
