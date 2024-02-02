import { useState, useEffect } from "react";
import React from "react";
import Family from "../assets/family-about-pic1.png";
import { Link } from "react-router-dom";

export default function About() {
  const [mouseHover, setMouseHover] = useState(false);
  useEffect(() => {
    document.title = "Wyatt Barger | Who I Am";
  }, []);

  return (
    <section
      className={`bg-black text-gray-200 flex bg-gradient-to-r from-gray-900 via-black to-black ${
        mouseHover
          ? `bg-gradient-to-r from-cyan-950 via-black to-black`
          : `bg-gradient-to-r from-gray-900 via-black to-black`
      } transition duration-500`}
    >
      <div className="pl-9 pt-9 pb-5 flex flex-col max-w-md ml-auto">
        <h1
          className={`text-7xl text-cyan-700 font-league-spartan ${
            mouseHover ? `text-white animate-pulse` : `text-cyan-700`
          } transition duration-500`}
        >
          Hello
        </h1>
        <article className="pb-12">
          <p
            className={`text-5xl ${
              mouseHover ? `text-cyan-700` : `text-white`
            } transition duration-500`}
          >
            I am a{" "}
            <span
              className={`${
                mouseHover ? `text-yellow-300` : `text-white`
              } transition duration-500`}
            >
              JavaScript
            </span>{" "}
            developer with a desire and passion for designing and developing
            useful, and functional technology.
          </p>
          <p
            className={`text-3xl text-cyan-700 ${
              mouseHover ? `text-white` : `text-cyan-700`
            } transition duration-500`}
          >
            My journey began with my certification in full stack development
            from Washington University in St. Louis, MO in November of 2023.
          </p>
          <p
            className={`text-xl ${
              mouseHover ? `text-cyan-700` : `text-white`
            } transition duration-500`}
          >
            I currently reside in the St. Louis area and am available to begin
            work as a part of your team today.
          </p>
        </article>
        <Link
          className="text-gray-400 hover:text-cyan-700 hover:border-cyan-700 border bg-gray-800 border-gray-800 hover:bg-gray-900 hover:animate-bounce focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 font-league-spartan transition-all ease-in-out duration-400"
          to="/contact"
          onMouseEnter={() => setMouseHover(true)}
          onMouseLeave={() => setMouseHover(false)}
        >
          Contact Wyatt
        </Link>
      </div>
      <div className="pr-5 pt-5 w-4/12 ml-auto relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black to-cyan-900"></div>
        <img
          src={Family}
          alt="Family Photo"
          className="filter grayscale absolute bottom-0 hover:grayscale-0 transition duration-500"
        />
      </div>
    </section>
  );
}
