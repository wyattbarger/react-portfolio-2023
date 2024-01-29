import GithubButton from "./GithubButton";
import DeploymentButton from "./DeploymentButton";

function ProjectCard ({ projectName, projectThumbnail, projectLink, deploymentLink}) {
    return (
        <section className="w-fit h-fit bg-black border border-cyan-700 rounded-lg">
            <h3 className="mb-2 text-3xl font-bold text-cyan-700">{projectName}</h3>
            <img src={projectThumbnail} alt="Thumbnail" /> 
            <GithubButton projectLink={projectLink}/>
            <DeploymentButton deploymentLink={deploymentLink}/>
        </section>
    );
}

export default ProjectCard;
