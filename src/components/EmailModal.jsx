import React, { useState } from "react";
import EmailForm from "./EmailForm";

function EmailModal({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose(); // Close the modal
  };
  return (
    <dialog open>
      <p className="mb-2 text-3xl font-bold text-cyan-700">
        Send an Email to Wyatt
      </p>
      <EmailForm onClose={closeModal} />
    </dialog>
  );
}

export default EmailModal;
