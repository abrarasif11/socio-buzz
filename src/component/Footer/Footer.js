import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/Image-Logo-SociaBuzz.png'
const Footer = () => {
    return (
        <footer class="bg-black  font-poppins ">
              {/* <Link to="/" class="text-2xl font-bold transition-colors duration-300 text-white hover:text-blue-500 dark:hover:text-blue-400">
                <img className='w-[150px] ml-7 mt-10' src={footer} alt="" />
              </Link> */}
            <div class="container text-center p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                <p class="text-sm text-primary">©Socia Buzz Copyright 2023. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;