import React from "react";
import { BsCrop } from "react-icons/bs";
import { PiResize } from "react-icons/pi";
import { FaUndo, FaRedo } from "react-icons/fa";
import video from "../assets/video.mp4";

const Workspace = ({ videoRef, currentVideoTime, setCurrentVideoTime }) => {
  return (
    <div className="flex flex-col items-center h-full w-[50vw]">
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
        <video
          ref={videoRef}
          src={video}
          controls
          className="h-[100%] rounded-md bg-slate-500"
        />
      </div>
    </div>
  );
};

export default Workspace;
