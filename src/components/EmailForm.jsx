import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const EmailForm = ({ onClose }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8wydy76",
        "template_yei6unq",
        form.current,
        "0Do3l4CleIcGIZG4D"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('EmailJS Result:', result.text);
          onClose();
        },
        (error) => {
          console.log(error.text);
          console.log('EmailJS Error:', error.text);
        }
      );
  };

  return (
    <form 
    ref={form} 
    onSubmit={sendEmail}
    className="p-4 bg-black m-2"
    autoComplete="off"
    >
      <label className="text-cyan-700 font-montserrat font-semibold">Your Name</label>
      <input type="text" name="user_name" className="focus:ring-cyan-600 bg-gray-800 font-league-spartan font-bold text-base text-cyan-500"/>
      <label className="text-cyan-700 font-montserrat font-semibold ">Your Email</label>
      <input type="email" name="user_email" className="focus:ring-cyan-600 bg-gray-800 font-league-spartan font-bold text-base text-cyan-500" />
      <label className="text-cyan-700 font-montserrat font-semibold">Email Message</label>
      <textarea name="message" className="focus:ring-cyan-600 bg-gray-800 font-league-spartan font-bold text-base text-cyan-500 h-64"/>
      <input
        className="bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 hover:text-cyan-700 hover:border-cyan-700 font-semibold"
        type="submit"
        value="Send"
      />
    </form>
  );
};

export default EmailForm;
