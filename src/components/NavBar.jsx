import { Link, useLocation } from 'react-router-dom'; // Add an import for react-router-dom to use Link and useLocation to conditionally render the tabs present based on the users current page. //

function NavBar() { // Add a function to create the NavBar component and conditionally render the links based on the users current location. // 
    const clientView = useLocation().pathname; // Add a variable to track the URL of the clients current accessed view.
    
    return (
        <nav>
            
        </nav>
    );
}
