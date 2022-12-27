import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
const Register = () => {
    const { user, createUser } = useContext(AuthContext);
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const username = form.username.value;
        const password = form.password.value;
        console.log({ email, password, username });
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                toast.success("User Created Successfully")
                // saveUser(username, email);
                form.reset();
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div class="w-full font-poppins max-w-sm p-6 m-auto mx-auto mt-20 mb-20 bg-blue-400 rounded-lg shadow-md dark:bg-gray-800">
            <h1 class="text-3xl font-semibold text-center text-black">Register Here</h1>

            <form onSubmit={handleSignUp} class="mt-6">
                <div>
                    <label for="username" class="flex items-center justify-between text-sm text-black dark:text-gray-200">Username</label>
                    <input name='username' type="text" class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
                </div>
                <div>
                    <label for="username" class="flex mt-2 items-center justify-between text-sm text-black dark:text-gray-200">Email</label>
                    <input name='email' type="email" class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
                </div>
                <div class="mt-4">
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm  text-black">Password</label>
                    </div>

                    <input name='password' type="password" class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
                </div>

                <div class="mt-6">
                    <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-primary capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Register
                    </button>
                </div>
            </form>
            <p class="mt-8 text-xs font-light text-center text-black"> Already have an account?
                <Link to="/login" class="font-medium text-xs hover:underline"> Login
                </Link>
            </p>
        </div>
    );
};

export default Register;