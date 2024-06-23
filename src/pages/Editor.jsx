import React, { useRef, useState, useEffect } from "react";
import Assets from "../components/Assets";
import Workspace from "../components/Workspace";
import Properties from "../components/Properties";
import { HiOutlineZoomIn, HiOutlineZoomOut } from "react-icons/hi";
import { HiOutlineScissors } from "react-icons/hi2";
import { FaCopy } from "react-icons/fa";
import { FaMousePointer } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { BsUnlockFill } from "react-icons/bs";
import { IoPlayCircleSharp, IoPauseCircleSharp } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { IoPlayBack } from "react-icons/io5";
import wave from "../assets/waveform.png";

const Editor = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [dd, setDd] = useState(0);
  const [tt, setTt] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const handleTimeUpdate = () => {
      const newTime = (video.currentTime / video.duration) * 100;
      setCurrentVideoTime(newTime);
      setDd(videoRef.current.currentTime);
      setTt(videoRef.current.duration);
    };

    if (video) {
      video.addEventListener("timeupdate", handleTimeUpdate);
      setDuration(video.duration);

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [videoRef.current]);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const seek = (time) => {
    videoRef.current.currentTime += time;
  };

  const handleChange = (event) => {
    const { value } = event.target;
    if (videoRef.current) {
      const newTime = (value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setCurrentVideoTime(value);
    }
  };

  return (
    <div className="flex flex-col bg-[#EBF4F6] w-[100vw] h-[100vh]">
      <div className="top h-[65vh] flex">
        <Assets />
        <Workspace
          videoRef={videoRef}
          currentVideoTime={currentVideoTime}
          setCurrentVideoTime={setCurrentVideoTime}
        />
        <Properties />
      </div>
      <div className="bottom flex flex-col justify-between bg-white h-[35vh]">
        <div className="flex justify-center gap-8">
          <div className="flex gap-3 justify-center">
            <button onClick={() => seek(-10)}>
              <IoPlayBack className="w-12 h-12" />
            </button>
            <button onClick={togglePlayPause}>
              {isPlaying ? (
                <IoPauseCircleSharp className="w-20 h-20" />
              ) : (
                <IoPlayCircleSharp className="w-20 h-20" />
              )}
            </button>
            <button onClick={() => seek(10)}>
              <IoPlayForward className="w-12 h-12" />
            </button>
          </div>

          <input
            type="range"
            value={currentVideoTime}
            onChange={handleChange}
            className="appearance-none bg-transparent w-80 [&::-webkit-slider-runnable-track]:rounded-md [&::-webkit-slider-runnable-track]:bg-[#37B7C3] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[10px] [&::-webkit-slider-thumb]: [&::-webkit-slider-thumb]:bg-[#000000]"
          />

          <div className="flex gap-3 justify-center items-center text-[1.2rem] text-[#000000d4]">
            <span className="text-[1.2rem] text-[#000000d4]">
              {formatTime(dd)}
            </span>{" "}
            /{" "}
            <span className="text-[1.2rem] text-[#000000d4]">
              {formatTime(tt)}
            </span>
          </div>
        </div>
        <div>
          {" "}
          <div className="flex w-full border border-[#0000005c] shadow-lg">
            <div className="h-[8rem] flex w-60">
              <div className="flex justify-center w-full h-full items-center">
                <span className="text-[1.5rem] font-bold">Track 1</span>
              </div>
              <span className="h-full flex flex-col justify-between p-3">
                <FaEye className="w-8 h-8" />
                <BsUnlockFill className="w-8 h-8" />
              </span>
            </div>
            <div className="flex w-full relative justify-center items-center">
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={currentVideoTime}
                onChange={handleChange}
                className="w-3/4 slider2 z-50"
              />
              {/* <img className="absolute h-[10rem]" src={wave} alt="" /> */}
            </div>
          </div>
          <div className="flex w-full border border-[#0000005c] shadow-lg">
            <div className="h-[8rem] flex w-60">
              <div className="flex justify-center w-full h-full items-center">
                <span className="text-[1.5rem] font-bold">Track 2</span>
              </div>
              <span className="h-full flex flex-col justify-between p-3">
                <FaEye className="w-8 h-8" />
                <BsUnlockFill className="w-8 h-8" />
              </span>
            </div>
            <div className="flex w-full relative justify-center items-center">
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                // value={currentVideoTime}
                // onChange={handleChange}
                className="w-3/4 slider3 z-50"
              />
              {/* <img className="absolute h-[10rem]" src={wave} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
