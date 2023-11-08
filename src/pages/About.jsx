import { useState } from "react";
import React from "react";
import Family from "../assets/family-about-pic1.png";
import { Link } from "react-router-dom";

export default function About() {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <section className="bg-black text-gray-200 flex bg-gradient-to-r from-gray-900 via-black to-black">
      <div className="pl-9 pt-9 pb-5 flex flex-col max-w-md ml-auto">
        <h1 className={`text-7xl text-cyan-700 font-league-spartan ${mouseHover ? `text-white` : `text-cyan-700`}`}>Hello</h1>
        <article className="pb-12">
          <p className="text-5xl">
            I am a <span>JavaScript</span> developer with a desire and passion
            for designing and developing useful, and functional technology.
          </p>
          <p className="text-3xl text-cyan-700">
            My journey began with my certification via a bootcamp provided by
            Washinton University in St. Louis, MO in 2023.
          </p>
          <p className=" text-xl ">
            I currently reside in the St. Louis area and am available to begin
            work as a part of your team today.
          </p>
        </article>
        <Link
          className="text-gray-400 hover:text-cyan-700 hover:border-cyan-700 border bg-gray-800 border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 font-league-spartan"
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
          className="filter grayscale absolute bottom-0"
        />
      </div>
    </section>
  );
}
