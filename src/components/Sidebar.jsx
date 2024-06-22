import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { HiOutlineTemplate } from "react-icons/hi";
import { FiAirplay } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Data from "../Data"

const Sidebar = () => {
  return (
    <>
      <div className=" bg-slate-200 h-screen w-80 flex flex-col p-4 ">
        <h1 className="text-3xl ">Logo</h1>
        
         
<ul className="flex mt-6">
     
         {Data.map((item)=>(
          <NavLink  className=""><button key={item.id}>{item.name}</button></NavLink>
         ))}
          </ul>
      </div>
    </>
  );
};

export default Sidebar;
