import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { HiOutlineTemplate } from "react-icons/hi";
import { FiAirplay } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Data from "../Data";
import { TbLogout } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className=" bg-[#ffffff]   h-screen  w-[35rem] justify-between flex flex-col  p-8 ">
      <div className="">
        <h1 className="text-[3.5rem] font-extrabold  ">Cynapto</h1>

        <div className="flex mt-16 flex-col gap-5">
          <NavLink
            to="/editor"
            className="text-[1.5rem] text-white font-medium flex items-center justify-between px-8 rounded-full bg-[#37B7C3] h-20 w-full"
          >
            <button> New Video </button>{" "}
            <span className="text-[1.8rem]">+</span>
          </NavLink>
          <NavLink
            to="/dashboard"
            className="text-[1.5rem] font-medium flex items-center hover:bg-[#EBF4F6] justify-between px-8 rounded-full h-20 w-full"
          >
            <button> Home </button>
          </NavLink>
          <NavLink className="text-[1.5rem] font-medium flex items-center justify-between  hover:bg-[#EBF4F6] px-8 rounded-full h-20 w-full">
            <button> Template </button>
          </NavLink>
          <NavLink
            to="/allvideo"
            className="text-[1.5rem] font-medium flex items-center justify-between px-8  hover:bg-[#EBF4F6] rounded-full  h-20 w-full"
          >
            <button> All Videos </button>
          </NavLink>
        </div>
      </div>
      <div className="flex item-center  justify-center p-4 rounded-full cursor-pointer hover:bg-slate-200  gap-2 text-[1.8rem] bg-slate-300 font-semibold ">
        Logout
        <span className="text-[3rem]  mt-2">
          <TbLogout />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
