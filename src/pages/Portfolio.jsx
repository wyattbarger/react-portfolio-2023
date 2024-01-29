import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
export default function Portfolio() {
  const [mouseHover, setMouseHover] = useState(false);
  const projects = [
    {
      projectName: "Game Pop!",
      projectThumbnail: "",
      projectLink: "https://github.com/wyattbarger/gamepop-over-under",
      deploymentLink: "https://game-pop-0133abbe0985.herokuapp.com",
    },
    {
      projectName: "shiny-spider",
      projectThumbnail: "",
      projectLink: "https://github.com/wyattbarger/shiny-spider",
      deploymentLink: "https://www.npmjs.com/package/shiny-spider",
    },
  ];

  return (
    <div
      style={{ background: "linear-gradient(to top, black, #2a4365, black)" }}
      className=""
    >
      <section className="">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          projectName={project.projectName}
          projectLink={project.projectLink}
          deploymentLink={project.deploymentLink}
        />
      ))}
      </section>      
    </div>
  );
}
