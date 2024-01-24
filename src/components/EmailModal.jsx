import React, { useState } from "react";
import EmailForm from "./EmailForm";

function EmailModal({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);

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
          >
            <p className="mb-2 text-3xl font-bold text-cyan-700 pt-4">
              Send an Email to Wyatt
            </p>
            <EmailForm onClose={closeModal} />
          </dialog>
        </div>
      )}
    </>
  );
}

export default EmailModal;
