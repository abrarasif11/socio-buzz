import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/Image-Logo-SociaBuzz.png'
const Footer = () => {
    return (
        <footer class="bg-black  font-poppins ">
              <Link to="/" class="text-2xl font-bold text-gray-800 transition-colors duration-300 text-white hover:text-blue-500 dark:hover:text-blue-400">
                <img className='w-[150px] mx-7' src={footer} alt="" />
              </Link>
            <div class="container text-center p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                <p class="text-sm text-primary">© Copyright 2021. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;