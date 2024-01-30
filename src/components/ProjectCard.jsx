import React, { useState } from "react";
import GithubButton from "./GithubButton";
import DeploymentButton from "./DeploymentButton";

function ProjectCard ({ projectName, projectThumbnail, projectDescription, projectLink, deploymentLink}) {
    const [mouseHover, setMouseHover] = useState(false);

    return (
        <section className="sm:max-w-md mx-auto flex flex-col items-center justify-center w-fit h-fit bg-black border border-cyan-700 rounded-lg p-5 m-10"
        onMouseEnter={() => setMouseHover(true)}
        onMouseLeave={() => setMouseHover(false)}
        style={{
          boxShadow: mouseHover ? "0 0 100px #2B6CB0" : "none",
          transition: "box-shadow 0.5s ease-in-out",
        }}>
            <h3 className="mb-2 text-3xl font-bold text-cyan-700">{projectName}</h3>
            <img className="" src={projectThumbnail} alt="Thumbnail" />
            <p className="text-sm text-white font-montserrat mt-2">{projectDescription}</p>
            <GithubButton projectLink={projectLink}/>
            <DeploymentButton deploymentLink={deploymentLink}/>
        </section>
    );
}

export default ProjectCard;
