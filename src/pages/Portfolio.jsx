import Github from '../assets/githubcyan700.png';
import Rocket from '../assets/rocketcyan700.png';
import ReadMe from '../assets/ez-rd-me.png';
import Stock from '../assets/stock-flocker-sc.png';
import Dash from '../assets/strato-dash-screenshot.png';
import Horse from '../assets/napoleons-horses-sc.png';

export default function Portfolio() {
  return (
    <section
      style={{ background: "linear-gradient(to top, black, #2a4365, black)" }}
      className="bg-black flex justify-center items-center h-screen font-league-spartan"
    >
      <div className="grid grid-cols-2 gap-y-10 gap-x-96 items-center justify-items-center">
        <div class="max-w-sm bg-black border border-cyan-700 rounded-lg shadow dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={Stock}
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-700 dark:text-white">
                Project Title
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-300 dark:text-gray-400">
              Short description of the project.
            </p>
            <div className="flex justify-between">
            <a
              href="#"
              className="mr-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 border hover:border-cyan-700 hover:text-cyan-700"
            >
              Github Repo
              <img className='pl-1 mr-2' src={Github} alt="" />
            </a>
            <a
              href="#"
              className="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border hover:border-cyan-700 hover:text-cyan-700"
            >
              Deployment
              <img className='pl-1' src={Rocket} alt="" />
            </a>
            </div>
          </div>
        </div>
      
    
        <div class="max-w-sm bg-black border border-cyan-700 rounded-lg shadow dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={ReadMe}
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-700 dark:text-white">
                Project Title
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-300 dark:text-gray-400">
              Short description of the project.
            </p>
            <div className="flex justify-between">
            <a
              href="#"
              className="mr-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 border hover:border-cyan-700 hover:text-cyan-700"
            >
              Github Repo
              <img className='pl-1' src={Github} alt="" />
            </a>
            <a
              href="#"
              className="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border hover:border-cyan-700 hover:text-cyan-700"
            >
              Deployment
              <img className='pl-1' src={Rocket} alt="" />
            </a>
            </div>
          </div>
        </div>

        <div class="max-w-sm bg-black border border-cyan-700 rounded-lg shadow dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={Horse}
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-700 dark:text-white">
                Project Title
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-300 dark:text-gray-400">
              Short description of the project.
            </p>
            <div className="flex justify-between">
            <a
              href="#"
              className="mr-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 border hover:border-cyan-700 hover:text-cyan-700"
            >
              Github Repo
              <img className='pl-1' src={Github} alt="" />
            </a>
            <a
              href="#"
              className="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border hover:border-cyan-700 hover:text-cyan-700"
            >
              Deployment
              <img className='pl-1' src={Rocket} alt="" />
            </a>
            </div>
          </div>
        </div>

        <div class="max-w-sm bg-black border border-cyan-700 rounded-lg shadow dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={Dash}
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-700 dark:text-white">
                Project Title
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-300 dark:text-gray-400">
              Short description of the project.
            </p>
            <div className="flex justify-between">
            <a
              href="#"
              className="mr-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 border hover:border-cyan-700 hover:text-cyan-700"
            >
              Github Repo
              <img className='pl-1' src={Github} alt="" />
            </a>
            <a
              href="#"
              className="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border hover:border-cyan-700 hover:text-cyan-700"
            >
              Deployment
              <img className='pl-1' src={Rocket} alt="" />
            </a>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}
