import React from 'react';
import Family from '../assets/family-about-pic1.png'; 
import { Link } from 'react-router-dom';

export default function About () {
    return (
        <section className="bg-black text-gray-200 flex">
            <div className='pl-9 pt-9 pb-5 flex flex-col max-w-md ml-auto'>
                <h1 className="text-7xl font-league-spartan">
                    Hello
                </h1>
                <article className='pb-12'>
                    <p className='text-5xl'>I am a web developer with a desire and passion for designing and developing useful, and functional technology.</p> 
                    <p className='text-3xl'> My journey began with my certification via a bootcamp provided by Washinton University in St. Louis, MO.</p>  
                    <p className=' text-xl'>I currently reside in the St. Louis area and am available to begin work as a part of your team today.</p>
                </article>
                <Link className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 font-league-spartan" to="/contact">Contact Wyatt</Link>
            </div>
            <div className='pr-5 pt-5 w-4/12 ml-auto relative'>
                <div className='absolute inset-0 z-0 bg-gradient-to-r from-black to-gray-900'></div>
                <img src={Family} alt="Family Photo" className='filter grayscale'/>
            </div>
        </section>
    );
}
