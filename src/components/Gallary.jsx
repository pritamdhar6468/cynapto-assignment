import React from "react";
import projects from "../projects.json"

const Gallary = () => {
  return (
    <div className="flex flex-wrap w-full  " >
    {projects.projects3.map((project, index) => (
            <div key={project.id} className="mt-4  p-6">
              <img
                className="bg-black w-[35rem] "
                src={project.videosrc}
                alt=""
              />
              <span className="text-[1.2rem] font-medium">
                {project.videoname}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Gallary;