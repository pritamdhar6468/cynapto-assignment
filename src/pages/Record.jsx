import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
const Record = () => {
  return (
    <div className="pl-[15rem] pr-[15rem]">
      <div className="h-[10rem] bg-slate-100 p-4 flex justify-between items-center">
        <NavLink to="/dashboard">
          <IoMdArrowRoundBack className="text-[3rem] bg-white rounded-full" />
        </NavLink>
        <button className="bg-white p-4 text-[1.5rem] rounded-lg">Record</button>
      </div>
      <div>
        <h1>what do you want to record</h1>
        <div>
          <div>camera</div>
          <div>camera</div>
          <div>camera</div>
          <div>camera</div>
          <div>camera</div>
          <div>camera</div>
        </div>
      </div>
    </div>
  );
};

export default Record;
