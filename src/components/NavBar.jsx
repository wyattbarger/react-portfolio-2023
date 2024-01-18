import { Link, useLocation } from 'react-router-dom'; // Add an import for react-router-dom to use Link and useLocation to conditionally render the tabs present based on the users current page. //
import { Navbar } from 'flowbite-react'; // Add an import to bring in the Navbar component from flowbite-react. // 
import HeadShot from '../assets/AvatarHeadshot.png'; // Add an import to bring in the headshot image. //

function NavBar() { // Add a function to create the NavBar component and conditionally render the links based on the users current location. // 
    // const clientView = useLocation().pathname; // Add a variable to track the URL of the clients current accessed view. // 
    
    return (
      <nav className='border-b border-gray-800 font-montserrat'>
        <Navbar className='text-gray-300 bg-black' fluid> 
          <Navbar.Brand as={Link} to="/contact">
            <img
              src={HeadShot}
              className="mr-3 h-6 sm:h-9"
              alt="WB Headshot"
            />
            <span className="self-center whitespace-nowrap text-5xl font-light">
              Wyatt Barger
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link as={Link} to="/" className='text-gray-300'>
              Who I Am
            </Navbar.Link>
            <Navbar.Link as={Link} to="/portfolio" className='text-gray-300'>
              Projects
            </Navbar.Link>
            <Navbar.Link as={Link} to="/contact" className='text-gray-300'>
                Get In Touch
            </Navbar.Link>
            <Navbar.Link as={Link} to="/resume" className='text-gray-300'>
                View my Resume
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    );
}

export default NavBar; // Add a export default to send the Navbar comonent when imported by other files. 

// Component Docs: 
// Uses the Navbar component from flowbite-react to helo achieve fucntionality.
// react-router-dom link elements are accessed as props by the Flowbite library.
// This is evident in lines featuring as={Link}.
// 


