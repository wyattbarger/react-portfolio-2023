import { Footer } from 'flowbite-react';
import BugReportIcon from './BugReportFooterIcon'; 

// Add a function that will copy the url of the current page to the users clip board.
function controlC(e) {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href);
};

function MyFooter () {
    return (
        <Footer container className='flex justify-center bg-black rounded-none border-t border-gray-800'>
            <BugReportIcon/>
        </Footer>
    );
};

export default MyFooter;
