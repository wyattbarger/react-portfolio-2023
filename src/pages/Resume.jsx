import React, { useState, useEffect } from "react";
import Drive from "../assets/google-drive.svg";
import ResumeSc from "../assets/resume-screenshot.png";

export default function Resume() {
  const [mouseHover, setMouseHover] = useState(false);
  useEffect(() => {
    document.title = "Wyatt Barger | Resume";
  }, []);

  return (
    <section
      style={{ background: "linear-gradient(to top, black, #2a4365, black)" }}
      className="bg-black flex h-screen justify-center items-center font-league-spartan"
    >
        <div className="w-6/12 p-4 text-center bg-black border border-cyan-700 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
         onMouseEnter={() => setMouseHover(true)}
         onMouseLeave={() => setMouseHover(false)}
         style={{ boxShadow: mouseHover ? '0 0 300px #2B6CB0' : 'none',
         transition: 'box-shadow 0.5s ease-in-out'
       }}>
          <h5 className="mb-2 text-3xl font-bold text-cyan-700 dark:text-white">
            Resume Download
          </h5>
          <img
            className="pb-5 mx-auto w-1/2 filter grayscale blur-sm"
            src={ResumeSc}
            alt="Resume"
          />
          <p className="mb-5 text-base text-gray-300 sm:text-l">
            Click the link below to view and download my resume from Google
            Drive.
          </p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 animate-bounce">
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1S6JcXNYjBCFNBSY_2te3c3k72J7Z9Lmu0X5pYp3HCc8/edit?usp=sharing"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 hover:text-cyan-700 hover:border-cyan-700"
            >
              <img className="pr-3 h-8 w-8" src={Drive} alt="Google Drive" />
              <div className="text-left">
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Download
                </div>
              </div>
            </a>
          </div>
        </div>
    </section>
  );
}
