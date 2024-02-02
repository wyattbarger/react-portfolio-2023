import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import GamePopThumbnail from "../assets/LinkedIn-gamepop-sc.png";
import ShinySpiderThumbnail from "../assets/readme-thumbnail-image.png";

export default function Portfolio() {
  const [mouseHover, setMouseHover] = useState(false);
  useEffect(() => {
    document.title = "Wyatt Barger | Projects";
  }, []);

  const projects = [
    {
      projectName: "Game Pop!",
      projectThumbnail: GamePopThumbnail,
      projectDescription: "A project designed and developed in collaboration with Andrew Mell and Alex Blaylock. This full stack application uses the MERN stack, as well as the IGDB API to create a game where users guess the which video game of two presented choices is the most popular. ",
      projectLink: "https://github.com/wyattbarger/gamepop-over-under",
      deploymentLink: "https://game-pop-0133abbe0985.herokuapp.com",
    },
    {
      projectName: "shiny-spider",
      projectThumbnail: ShinySpiderThumbnail,
      projectDescription: "A Node project created using puppeteer to develop a plug and play web scraper that will scrape the names and stock prices of the S&P 500 Index and store them in an array of objects. Uses chalk and progress from npm for a clean visual representation of the scraping process.",
      projectLink: "https://github.com/wyattbarger/shiny-spider",
      deploymentLink: "https://www.npmjs.com/package/shiny-spider",
    },
  ];

  return (
    <div
      style={{ background: "linear-gradient(to top, black, #2a4365, black)",
      minHeight: "100vh"
     }}
      className="pt-10 pb-10"
    >
      <section className="p-10">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          projectName={project.projectName}
          projectThumbnail={project.projectThumbnail}
          projectDescription={project.projectDescription}
          projectLink={project.projectLink}
          deploymentLink={project.deploymentLink}
        />
      ))}
      </section>      
    </div>
  );
}
