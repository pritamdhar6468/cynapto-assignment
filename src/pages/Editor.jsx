import React from "react";
import Assets from "../components/Assets"
import Workspace from "../components/Workspace";
const Editor = () => {
  return (
    <div className="flex gap-2">
      <div>
        <Assets/>
      </div>
      <div className="w-full "><Workspace/></div>
    </div>
  );
};

export default Editor;
