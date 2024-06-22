import React from "react";
const Navbar = () => {
  return (
    <div className=" flex flex-row items-center justify-between p-4 h-20 bg-slate-500">
      <input type="search" placeholder="search..." className="h-10 p-2 w-1/2 rounded-full focus:outline-none" />
      <div className="h-10 w-10 bg-white rounded-full"><img src="profile.jpg" alt="" className="h-10 w-10 bg-white rounded-full" /></div>
    </div>
  );
};

export default Navbar;
