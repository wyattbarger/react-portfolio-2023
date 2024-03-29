import React, { useState, useEffect } from "react";
import Email from "../assets/emailcyan700.png";
import LinkedIn from "../assets/linkedincyan700.png";
import EmailModal from "../components/EmailModal";

export default function Contact() {
  const [mouseHover, setMouseHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    document.title = "Wyatt Barger | Get In Touch";
  }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
    <section
      style={{ background: "linear-gradient(to top, black, #2a4365, black)" }}
      className="bg-black flex justify-center items-center h-screen font-league-spartan"
    >
      <div
        id="parent-contact"
        className="w-6/12 p-4 text-center bg-black border border-cyan-700 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        onMouseEnter={() => setMouseHover(true)}
        onMouseLeave={() => setMouseHover(false)}
        style={{
          boxShadow: mouseHover ? "0 0 300px #2B6CB0" : "none",
          transition: "box-shadow 0.5s ease-in-out",
        }}
      >
        <h5 className="mb-2 text-3xl font-bold text-cyan-700">Contact Links</h5>
        <p className="mb-5 text-base text-gray-300 sm:text-l">
          Please use the links below to reach out to me through my personal
          email, or my LinkedIn account.
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <button
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 hover:text-cyan-700 hover:border-cyan-700 border-gray-800 border"
            onClick={openModal}
          >
            <img className="pr-3" src={Email} alt="Envelope" />
            <div className="text-left">
              <div className="mb-1 text-xs text-center">Contact Directly </div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                Email Wyatt
              </div>
            </div>
          </button>
          {isModalOpen && <EmailModal onClose={closeModal} />}
          <a
            href="https://www.linkedin.com/in/wyatt-barger/"
            target="_blank"
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 hover:text-cyan-700 hover:border-cyan-700 border-gray-800 border"
          >
            <img className="pr-3" src={LinkedIn} alt="LinkedIn Logo" />
            <div className="text-center">
              <div className="mb-1 text-xs">View my Profile</div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                LinkedIn
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
