import React, { useContext } from 'react';
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
const RightSideNav = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="card ml-5 w-96 mt-10 h-[480px] bg-blue-500 text-neutral-content">
            <div className="card-body font-poppins items-center text-center">
                <button className="btn btn-ghost btn-wide">{user?.displayName}</button>
                <br />
                <button className="btn btn-ghost btn-wide">Friends</button>
                <br />
                <button className="btn btn-ghost btn-wide">Memories</button>
                <br />
                <button className="btn btn-ghost btn-wide">Groups</button>
                <br />
                <button className="btn btn-ghost btn-wide">Saved</button>
            </div>
        </div>
    );
};

export default RightSideNav;