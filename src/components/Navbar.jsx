import React from "react";
import profile from "../assets/profile2.png";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className=" flex flex-row items-center justify-between mt-4 ">
      <div className="relative w-[40rem]">
        <input
          type="search"
          placeholder="Search"
          className="h-16 p-2 w-full  px-8 pl-14 rounded-full text-[1.5rem] focus:outline-none"
        />
        <CiSearch className="fas fa-search absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-[1.8rem]" />
      </div>
      <div className="h-16 w-16 bg-white p-3 rounded-full">
        <img src={profile} alt="" className=" w-full bg-white rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
