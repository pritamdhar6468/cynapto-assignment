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
  const timelineRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [pointerPosition, setPointerPosition] = useState(0);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Function to handle video time update
  const updateTime = () => {
    setCurrentTime(videoRef.current.currentTime);
    updatePointerPosition();
  };

  // Function to handle video end
  const handleVideoEnd = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setPointerPosition(0);
  };

  // Function to handle seeking forward/backward
  const seek = (time) => {
    videoRef.current.currentTime += time;
    updatePointerPosition();
  };

  const updatePointerPosition = () => {
    const currentTimePercentage =
      (videoRef.current.currentTime / duration) * 100;
    setPointerPosition(currentTimePercentage);
  };

  const handlePointerDrag = (e) => {
    const timelineRect = timelineRef.current.getBoundingClientRect();
    const clickX = e.clientX - timelineRect.left;
    const newPosition = (clickX / timelineRect.width) * 100;

    const newTime = (newPosition / 100) * duration;
    videoRef.current.currentTime = newTime;
    setPointerPosition(newPosition);
  };

  const handleInputChange = (e) => {
    const timeInSeconds = parseFloat(e.target.value);
    if (
      !isNaN(timeInSeconds) &&
      timeInSeconds >= 0 &&
      timeInSeconds <= duration
    ) {
      videoRef.current.currentTime = timeInSeconds;
      updatePointerPosition();
    }
  };

  const handleSliderChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    videoRef.current.currentTime = newTime;
    setPointerPosition(e.target.value);
  };

  // Effect to set video duration and listen to time update
  useEffect(() => {
    const videoElement = videoRef.current;
    setDuration(videoElement.duration);

    // Event listeners
    videoElement.addEventListener("timeupdate", updateTime);
    videoElement.addEventListener("ended", handleVideoEnd);

    // Cleanup
    return () => {
      videoElement.removeEventListener("timeupdate", updateTime);
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <div className="flex flex-col bg-[#EBF4F6] w-[100vw] h-[100vh]">
      <div className="top h-[65vh] flex">
        <Assets />
        <Workspace videoRef={videoRef} />
        <Properties />
      </div>
      <div className="bottom bg-white h-[35vh] ">
        <div className="flex justify-center">
          <button onClick={() => seek(-10)}>
            <IoPlayBack className="w-16 h-16" />
          </button>

          <button onClick={() => togglePlayPause()}>
            {isPlaying ? (
              <IoPauseCircleSharp className="w-20 h-20" />
            ) : (
              <IoPlayCircleSharp className="w-20 h-20" />
            )}
          </button>
          <button onClick={() => seek(10)}>
            <IoPlayForward className="w-16 h-16" />
          </button>
        </div>

        <div className="flex w-full border border-[#0000005c] shadow-lg">
          <div className="h-[8rem] flex w-60">
            <div className="flex justify-center w-full h-full items-center">
              <span className="text-[1.5rem] font-bold">Track 1</span>
            </div>{" "}
            <span className="h-full flex flex-col justify-between p-3"><FaEye className="w-8 h-8"/><BsUnlockFill className="w-8 h-8"/></span>
          </div>
          <div className="flex w-full relative justify-center items-center">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={pointerPosition}
              onChange={handleSliderChange}
              className="w-3/4 slider2 z-50"
            />
            {/* <img className="absolute h-[10rem]" src={wave} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
