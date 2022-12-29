import React, { useContext } from 'react';
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
const About = () => {
    const { user} = useContext(AuthContext);
    return (
        <div>
            <form >
                <div>
                    <h3 className='text-3xl text-primary font-poppins mt-10 mb-10 font-bold'>About Me </h3>
                </div>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={user?.photoURL}  alt=''/>
                    </div>
                </div>
                <div>
               <p className='text-3xl text-primary font-poppins mt-10 mb-10 font-bold'> User Name - {user?.displayName}</p>
                </div>
               <p className='text-3xl text-primary font-poppins mt-10 mb-10 font-bold'>University - UITS</p>
               <p  className='text-3xl text-primary font-poppins mt-10 mb-10 font-bold'>Address - Dhaka,Bangladesh</p>
            </form>
        </div>
    );
};

export default About;