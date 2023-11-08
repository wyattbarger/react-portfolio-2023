import React, { useState } from "react";
import Github from "../assets/githubcyan700.png";
import Rocket from "../assets/rocketcyan700.png";
import ReadMe from "../assets/ez-rd-me.png";
import Stock from "../assets/stock-flocker-sc.png";
import Dash from "../assets/strato-dash-screenshot.png";
import Horse from "../assets/napoleons-horses-sc.png";

export default function Portfolio() {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <section
      style={{ background: "linear-gradient(to top, black, #2a4365, black)" }}
      className="bg-black flex justify-center items-center h-screen font-league-spartan pt-10 pb-10"
    >
      <div className="grid grid-cols-2 gap-y-10 gap-x-96 items-center justify-items-center">
        <div
          class="max-w-sm bg-black border border-cyan-700 rounded-lg shadow dark:border-gray-700"
          onMouseEnter={() => setMouseHover(true)}
          onMouseLeave={() => setMouseHover(false)}
          style={{
            boxShadow: mouseHover ? "0 0 50px #2B6CB0" : "none",
            transition: "box-shadow 0.5s ease-in-out",
          }}
        >
          <a href="#">
            <img
              className="rounded-t-lg"
              src={Stock}
              alt="Project Screenshot"
            />
          </a>
          <div class="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-700 dark:text-white">
              stock-flocker
            </h5>
            <p class="mb-3 font-normal text-gray-300 dark:text-gray-400">
              A social media website based around user input on stock pricing
              sentiment.
            </p>
            <div className="flex justify-between">
              <a
                href="https://github.com/wyattbarger/stock-flocker"
                className="mr-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 border hover:border-cyan-700 hover:text-cyan-700"
              >
                Github Repo
                <img className="pl-1 mr-2" src={Github} alt="" />
              </a>
              <a
                href="https://shrouded-coast-42223-a6c05e1c3810.herokuapp.com/"
                className="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border hover:border-cyan-700 hover:text-cyan-700"
              >
                Deployment
                <img className="pl-1" src={Rocket} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div
          class="max-w-sm bg-black border border-cyan-700 rounded-lg shadow dark:border-gray-700"
          onMouseEnter={() => setMouseHover(true)}
          onMouseLeave={() => setMouseHover(false)}
          style={{
            boxShadow: mouseHover ? "0 0 50px #2B6CB0" : "none",
            transition: "box-shadow 0.5s ease-in-out",
          }}
        >
          <a href="https://github.com/wyattbarger/ez-rd-me">
            <img
              className="rounded-t-lg"
              src={ReadMe}
              alt="Project Screenshot"
            />
          </a>
          <div class="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-700 dark:text-white">
              ez-rd-me
            </h5>
            <p class="mb-3 font-normal text-gray-300 dark:text-gray-400">
              A project created using node and JavaScript to streamline the
              process of creating readme files.
            </p>
            <div className="flex justify-between">
              <a
                href="https://github.com/wyattbarger/ez-rd-me"
                className="mr-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 border hover:border-cyan-700 hover:text-cyan-700"
              >
                Github Repo
                <img className="pl-1" src={Github} alt="" />
              </a>
              <a
                href="https://drive.google.com/file/d/1k-5ne-ELsnhDBMZprgS7wjf1jMO1o1Il/view"
                className="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border hover:border-cyan-700 hover:text-cyan-700"
              >
                Deployment
                <img className="pl-1" src={Rocket} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div
          class="max-w-sm bg-black border border-cyan-700 rounded-lg shadow dark:border-gray-700"
          onMouseEnter={() => setMouseHover(true)}
          onMouseLeave={() => setMouseHover(false)}
          style={{
            boxShadow: mouseHover ? "0 0 50px #2B6CB0" : "none",
            transition: "box-shadow 0.5s ease-in-out",
          }}
        >
          <a href="https://github.com/wyattbarger/napoleons-horses">
            <img
              className="rounded-t-lg"
              src={Horse}
              alt="Project Screenshot"
            />
          </a>
          <div class="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-700 dark:text-white">
              napoleons-horses
            </h5>
            <p class="mb-3 font-normal text-gray-300 dark:text-gray-400">
              A simple SQL employee tracker created to help learn the
              technology.
            </p>
            <div className="flex justify-between">
              <a
                href="https://github.com/wyattbarger/napoleons-horses"
                className="mr-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 border hover:border-cyan-700 hover:text-cyan-700"
              >
                Github Repo
                <img className="pl-1" src={Github} alt="" />
              </a>
              <a
                href="https://drive.google.com/file/d/1E0H9Pn58zo_zLOurf63uPgRjktQJpszw/view?pli=1"
                className="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border hover:border-cyan-700 hover:text-cyan-700"
              >
                Deployment
                <img className="pl-1" src={Rocket} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div
          class="max-w-sm bg-black border border-cyan-700 rounded-lg shadow dark:border-gray-700"
          onMouseEnter={() => setMouseHover(true)}
          onMouseLeave={() => setMouseHover(false)}
          style={{
            boxShadow: mouseHover ? "0 0 50px #2B6CB0" : "none",
            transition: "box-shadow 0.5s ease-in-out",
          }}
        >
          <a href="https://github.com/wyattbarger/drcla-thm-wthr-dash">
            <img className="rounded-t-lg" src={Dash} alt="Project Screenshot" />
          </a>
          <div class="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-700 dark:text-white">
              strato-dash
            </h5>
            <p class="mb-3 font-normal text-gray-300 dark:text-gray-400">
              A front end JavaScript project using the openWeather API to create
              a weather dashboard.
            </p>
            <div className="flex justify-between">
              <a
                href="https://github.com/wyattbarger/drcla-thm-wthr-dash"
                className="mr-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 border hover:border-cyan-700 hover:text-cyan-700"
              >
                Github Repo
                <img className="pl-1" src={Github} alt="" />
              </a>
              <a
                href="https://wyattbarger.github.io/drcla-thm-wthr-dash/"
                className="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border hover:border-cyan-700 hover:text-cyan-700"
              >
                Deployment
                <img className="pl-1" src={Rocket} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
