import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
const ShowMedia = ({ media }) => {
    const { user } = useContext(AuthContext);
    const { write, photo } = media;
    console.log(media);
    return (
        <div className="max-w-lg p-4 font-poppins mx-auto mb-10 mt-20 shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                    <a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-black">{user?.displayName}</a>
                </div>
              
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                </div>
                <button type="button" title="Like post" className="flex hover:text-red-700 items-center  justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                    </svg>
                </button>
                <input type="text" placeholder="Add a comment..." className="w-full py-0.5 dark:bg-transparent border-none rounded text-sm pl-0 text-black" />
                <div className="space-y-2">
                    
                    <p className="leading-snug text-black">{write}</p>
                </div>
                <Link to='/login' rel="noopener noreferrer" className="block">
                        <h3 className="text-xl font-semibold text-black">See Details</h3>
                    </Link>
            </div>
        </div>
    );
};

export default ShowMedia;
