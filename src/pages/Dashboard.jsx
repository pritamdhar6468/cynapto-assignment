import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
const Dashboard = () => {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <div className=" w-full flex flex-col">
          <Navbar />
          <div className="flex  gap-4 ml-4 ">
            <NavLink to="/editor">
              <div className="border p-4 mt-4 bg-slate-300 rounded-md ">
                Create project
              </div>
            </NavLink>
            <div className="border p-4 mt-4 bg-slate-300 rounded-md">
              Record video
            </div>
          </div>
          <div>
            <h3 className=" w-50 p-4 text-lg border-b-2">Recent videos</h3>
            
          </div>
          <div className="flex  items-center justify-around gap-2 p-2 mt-4 ">
            <video src="" className=" w-1/2 bg-gray-800"></video>
            <video src="" className=" w-1/2 bg-gray-800"></video>
            <video src="" className=" w-1/2 bg-gray-800"></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
