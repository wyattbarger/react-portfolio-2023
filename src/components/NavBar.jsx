import { Link, useLocation } from 'react-router-dom'; // Add an import for react-router-dom to use Link and useLocation to conditionally render the tabs present based on the users current page. //
import { Navbar } from 'flowbite-react'; // Add an import to bring in the Navbar component from flowbite-react. // 

function NavBar() { // Add a function to create the NavBar component and conditionally render the links based on the users current location. // 
    // const clientView = useLocation().pathname; // Add a variable to track the URL of the clients current accessed view. // 
    
    return (
      <nav>
        <Navbar fluid rounded> 
          <Navbar.Brand as={Link} to="/contact">
            <img
              src=""
              className="mr-3 h-6 sm:h-9"
              alt="WB Headshot"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              Wyatt Barger
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link as={Link} to="/about">
              Who I Am
            </Navbar.Link>
            <Navbar.Link as={Link} to="/portfolio">
                Portfolio
            </Navbar.Link>
            <Navbar.Link as={Link} to="/contact">
                Get In Touch
            </Navbar.Link>
            <Navbar.Link as={Link} to="/resume">
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


