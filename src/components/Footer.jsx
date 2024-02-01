import { Footer } from 'flowbite-react';
import BugReportIcon from './BugReportFooterIcon';
import GithubFooterIcon from './GithubFooterIcon';
import LinkedinFooterIcon from './LinkedinFooterIcon';

function MyFooter() {
    return (
        <Footer container className='flex mx-auto bg-black rounded-none border-t border-gray-800'>
            <div className="flex justify-center items-center w-full">
                <BugReportIcon />
                <GithubFooterIcon />
                <LinkedinFooterIcon />
            </div>
        </Footer>
    );
}

export default MyFooter;
