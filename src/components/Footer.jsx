// Add an import to include the footer component I will be using to customize for my application.
import { Footer } from 'flowbite-react'; 
// Add imports for the necessary SVG images from the assets directory so that they can be used in the footer.
import Github from '../assets/github.svg'; 
import Email from '../assets/mail.svg'; 
import LinkedIn from '../assets/linkedin.svg'; 
import Bug from '../assets/bug.svg'; 
import Share from '../assets/sharing.svg';
// Add a function that will copy the url of the current page to the users clip board.
function controlC(e) {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href);
};

function MyFooter () {
    return (
        <Footer container className='flex justify-center bg-black rounded-none border-t border-gray-800'>
                <Footer.Brand id='bug-report-button' 
                href="https://github.com/wyattbarger/react-portfolio-2023/issues"
                target='_blank'
                src={Bug}
                alt="Bug" 
                />
            <div id='footer-center-items' className='flex justify-center'>
                <Footer.Brand 
                href="https://github.com/wyattbarger"
                target='_blank'
                src={Github}
                alt="Github Logo"
                />
                <Footer.Brand
                href="mailto:wyattbarger@icloud.com"
                target='_blank'
                src={Email}
                alt="Envelope"
                />
                <Footer.Brand
                href="https://www.linkedin.com/in/wyatt-barger/"
                target='_blank'
                src={LinkedIn}
                alt="LinkedIn Logo"
                />
            </div>
                <Footer.Brand id='share-button' 
                href="#"
                onClick={controlC}
                src={Share}
                alt="Share"
                />
        </Footer>
    );
};

export default MyFooter;

// Component Docs: 
// Footer should utilize the Footer and Footer.Brand component from Flowbite to style the svg images for the links present.
