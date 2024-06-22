import React from "react";
import Assets from "../components/Assets";
import Workspace from "../components/Workspace";
import Properties from "../components/Properties";
const Editor = () => {
  return (
    <div className="flex flex-col bg-[#EBF4F6] w-[100vw] h-[100vh]">
      <div className="top h-[65vh] flex">
          <Assets />
          <Workspace />
          <Properties/>
      </div>
      <div className="bottom h-[35vh]"></div>
    </div>
  );
};

export default Editor;
