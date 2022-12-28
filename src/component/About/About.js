import React from 'react';

const About = () => {
    return (
        <div class="w-full font-poppins max-w-sm p-6 m-auto mx-auto mt-20 mb-20 bg-blue-400 rounded-lg shadow-md dark:bg-gray-800">
        {/* <h1 class="text-3xl font-semibold text-center text-black">Register Here</h1> */}
 
        <form  class="mt-6">
            <div>
                <label for="username" class="flex items-center justify-between text-sm text-black dark:text-gray-200">Username</label>
                <input name='username' type="text" class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
            </div>
            <div>
                <label for="username" class="flex mt-2 items-center justify-between text-sm text-black dark:text-gray-200">Email</label>
                <input name='email' type="email" class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
            </div>
            <div>
                <label for="username" class="mt-2 flex items-center justify-between text-sm text-black dark:text-gray-200">University</label>
                <input name='username' type="text" class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
            </div>
            <div>
                <label for="username" class="mt-2 flex items-center justify-between text-sm text-black dark:text-gray-200">Address</label>
                <input name='username' type="text" class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
            </div>
        </form>
       
    </div>
    );
};

export default About;