import Email from "../assets/emailcyan700.png"; 
import LinkedIn from '../assets/linkedincyan700.png'; 

export default function Contact() {
  return (
    <section style={{background: 'linear-gradient(to top, black, #2a4365, black)'}} className="bg-black flex justify-center items-center h-screen font-league-spartan">
      <div id="parent-contact" className="w-6/12 p-4 text-center bg-black border border-cyan-700 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-3xl font-bold text-cyan-700 dark:text-white">
          Contact Links
        </h5>
        <p className="mb-5 text-base text-gray-300 sm:text-l">
          Please use the links below to reach out to me through my personal email, or my LinkedIn account.
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a
            href="mailto:wyattbarger@icloud.com"
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 hover:text-cyan-700 hover:border-cyan-700"
          >
            <img className='pr-3' src={Email} alt="Envelope" />
            <div className="text-left">
              <div className="mb-1 text-xs text-center">Contact Directly </div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                Email Wyatt
              </div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/wyatt-barger/"
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 hover:text-cyan-700 hover:border-cyan-700"
          >
            <img className='pr-3' src={LinkedIn} alt="LinkedIn Logo" />
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
