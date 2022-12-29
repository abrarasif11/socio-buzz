import React, { useContext } from 'react';
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
const About = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='font-poppins'>
            <h3 className='text-3xl text-primary font-poppins mt-10 mb-10 font-bold'>About Me </h3>
            <form className='bg-blue-500 w-[400px] h-[500px] mb-10 mx-auto'>
                <div>
                    <div className="dropdown mt-5">
                        <label tabIndex={0} className="btn m-1">Edit</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <input type="text" placeholder="Name" className="input input-bordered input-primary w-full max-w-xs" />
                        <br />
                        <input type="text" placeholder="University" className="input input-bordered input-primary w-full max-w-xs" />
                        <br />
                        <input type="text" placeholder="Address" className="input input-bordered input-primary w-full max-w-xs" />
                        <br />
                        <button className='bg-primary text-black rounded-lg'>Submit</button>
                        </ul>
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-24 mt-10 rounded-full">
                        <img src={user?.photoURL} alt='' />
                    </div>
                </div>
                <div>
                    <p className='text-2xl text-primary font-poppins mt-10 mb-10 font-bold'> User Name - {user?.displayName}</p>
                </div>
                <p className='text-2xl text-primary font-poppins mt-10 mb-10 font-bold'>University - UITS</p>
                <p className='text-2xl text-primary font-poppins mt-10 mb-10 font-bold'>Address - Dhaka,Bangladesh</p>
            </form>
        </div>
    );
};

export default About;