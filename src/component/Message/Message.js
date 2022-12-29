import React from 'react';
import Loader from '../Loader/Loader';

const Message = () => {
    return (
        <div>
            <p  className='text-3xl text-primary font-poppins mt-20 mb-10 font-bold'>No Messages Found</p>
            <p className='mx-auto'><Loader></Loader></p>
        </div>
    );
};

export default Message;