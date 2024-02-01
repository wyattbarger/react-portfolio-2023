// Add an import to include the footer component I will be using to customize for my application.
import { Footer } from 'flowbite-react'; 

// Add a function that will copy the url of the current page to the users clip board.
function controlC(e) {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href);
};

function MyFooter () {
    return (
        <Footer container className='flex justify-center bg-black rounded-none border-t border-gray-800'>
            
        </Footer>
    );
};

export default MyFooter;
