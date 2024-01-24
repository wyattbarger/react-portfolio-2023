import React, { useState } from "react";
import EmailForm from "./EmailForm";

function EmailModal({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);
  const [mouseHover, setMouseHover] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    onClose(); // Close the modal
  };
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <dialog
            className="flex-col w-64 bg-black border-cyan-700 border rounded-lg"
            open
            onMouseEnter={() => setMouseHover(true)}
            onMouseLeave={() => setMouseHover(false)}
            style={{
              boxShadow: mouseHover ? "0 0 300px #2B6CB0" : "none",
              transition: "box-shadow 0.5s ease-in-out",
            }}
          >
            <p className="mb-2 text-3xl font-bold text-cyan-700 pt-4">
              Contact Wyatt
            </p>
            <EmailForm onClose={closeModal} />
          </dialog>
        </div>
      )}
    </>
  );
}

export default EmailModal;
