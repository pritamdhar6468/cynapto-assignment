import React from "react";
import profile from "../assets/profile2.png"
const Navbar = () => {
  return (
    <div className=" flex flex-row items-center justify-between mt-4 ">
      <input type="search" placeholder="Search" className="h-16 p-2 w-[40rem]  px-8 rounded-full text-[1.5rem] focus:outline-none" />
      <div className="h-16 w-16 bg-white p-3 rounded-full"><img src={profile} alt="" className=" w-full bg-white rounded-full" /></div>
    </div>
  );
};

export default Navbar;
