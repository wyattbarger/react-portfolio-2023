import Rocket from "../assets/rocketcyan700.png";

function DeploymentButton({href}) {
    return (
      <a
        href={href}
        className="mr-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-cyan-600 border border-cyan-900 hover:border-cyan-700 hover:text-cyan-700"
      >
          <img className="pl-1 mr-2" src={Rocket} alt="" />
        Deployment
      </a>
    );
  }
  
export default DeploymentButton;
