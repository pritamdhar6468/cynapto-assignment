import React from "react";
import img from "../assets/profile.jpg";

const Dummy = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex items-center justify-center w-[100vw] h-[100vh]">
        {" "}
        <div className="left h-full bg-gray-400 w-1/2"></div>
        <div className="right  h-full w-1/2">
          <div className="one  bg-red-500 h-1/2 flex items-center justify-center">
            {" "}
            <img
              className="object-cover w-[20rem] h-[20rem]"
              src={img}
              alt=""
            />
          </div>
          <div className="two h-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Dummy;
