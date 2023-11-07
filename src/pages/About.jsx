import React from 'react';
import myImage from '../assets/family-about-pic1.png'; 

export default function About () {
    return (
        <section className="bg-black text color text-gray-200 flex">
            <div className='pl-5 pt-5 pb-5'>
                <h1 className="text-7xl">
                    Hello
                </h1>
                <p>
                    <span className='text-5xl'>I am a web developer with a desire and passion for designing and developing useful technology.</span> <span className='text-3xl'> My journey began with my certification via a bootcamp provided by Washinton University in St. Louis, MO.</span>  <span className=' text-xl'>I currently reside in the St. Louis area and am available to begin work as a part of your team today.</span>
                </p>
            </div>
            <div className='pr-5 pt-5 w-4/12'>
                <img src={myImage} alt="Family Photo" className='filter grayscale'/>
            </div>
        </section>
    );
}
