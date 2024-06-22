import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { RiScissorsFill, RiVideoOnLine } from "react-icons/ri";
import projects from '.././projects.json'

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-row ">
        <Sidebar />
        <div className=" w-full flex flex-col p-8  bg-[#EBF4F6]">
          <Navbar />
          <div className="flex  gap-4 mt-16">
            <NavLink to="/editor" className=" w-[25rem]">
              <div className="border flex gap-3 items-center justify-start p-4 w-full bg-[white]  rounded-full ">
                <span className="w-16 h-16 p-3 rounded-full bg-[#37B7C3] font-semibold text-[1.5rem]">
                  <RiScissorsFill className="w-full text-white h-full" />
                </span>
                <span className="font-semibold text-[1.8rem]">
                  Create Project
                </span>
              </div>
            </NavLink>
            <div className="w-[25rem] cursor-pointer">
            <div className="border flex gap-3 items-center justify-start p-4 w-full bg-[white]  rounded-full ">
                <span className="w-16 h-16 p-3 rounded-full bg-[#37B7C3] font-semibold text-[1.5rem]">
                  <RiVideoOnLine className="w-full text-white h-full" />
                </span>
                <span className="font-semibold text-[1.8rem]">
                  Record Video
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className=" w-50 p-4 text-[1.8rem] font-medium border-b-2">Recent videos</h3>
          </div>
          <div className="flex  items-center justify-around gap-2 p-2 mt-4 ">
            {projects.projects.map((project, index) => (
               <div key={project.id}><img className="bg-black w-20 h-20" src={project.thumbnailUrl} alt="" /></div>
            ))}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
