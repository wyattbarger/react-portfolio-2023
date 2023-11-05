import { Footer } from 'flowbite-react'; // Add an import to include the footer component I will be using to customize for my application.
// Add imports for the necessary SVG images from the assets directory so that they can be used in the footer.
import Github from '../assets/github.svg'; 
import Email from '../assets/mail.svg'; 
import LinkedIn from '../assets/linkedin.svg'; 
import Bug from '../assets/bug.svg'; 
import Share from '../assets/sharing.svg'; 

function MyFooter () {
    return (
        <Footer container className='flex'>
                <Footer.Brand
                href="https://github.com/wyattbarger/react-portfolio-2023/issues"
                src={Bug}
                alt="Bug" 
                />
            <div id='footer-center-items' className='flex justify-center'>
                <Footer.Brand
                href=""
                src={Github}
                alt=""
                />
                <Footer.Brand
                href=""
                src={Email}
                alt=""
                />
                <Footer.Brand
                href=""
                src={LinkedIn}
                alt=""
                />
            </div>
                <Footer.Brand
                href=""
                src={Share}
                alt=""
                />
        </Footer>
    );
}

export default MyFooter;

// Component Docs: 
// Footer should utilize the Footer and Footer.Brand component from Flowbite to style the svg images for the links present.
