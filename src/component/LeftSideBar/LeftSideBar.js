import React from 'react';

const LeftSideBar = () => {
    return (
        <div className='mb-10'>
            <div className="card flex w-[200px] mt-10 ml-3  bg-blue-500 text-neutral-content">
                <div className="avatar">
                    <div className="w-[80px] mx-auto  mt-5 rounded-full">
                        <img src="https://i.pinimg.com/originals/81/c1/6b/81c16b36af747531034d37572940da2c.jpg" alt='' />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="text-white card-title">Jennie</h2>
                    <p className='text-white'>4 mutual friend</p>
                    <div className="card-actions justify-end">
                        <button className="bg-primary px-2 py-2 rounded-lg text-black">Accept</button>
                        <button className="bg-red-700 px-2 py-2 rounded-lg text-black">Reject</button>
                    </div>
                </div>
            </div>
            <div>
            <div className="card w-[200px] mt-10 ml-3 bg-blue-500 text-neutral-content">
                <div className="avatar">
                    <div className="w-[80px] mx-auto  mt-5 rounded-full">
                        <img src="https://channel-korea.com/wp-content/uploads/2021/03/ebcf6ac7a6d4be443ab336d2476e701f.jpg" alt='' />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white">Rose</h2>
                    <p className='text-white'>5 mutual friend</p>
                    <div className="card-actions justify-end">
                        <button className="bg-primary px-2 py-2 rounded-lg text-black">Accept</button>
                        <button className="bg-red-700 px-2 py-2 rounded-lg text-black">Reject</button>
                    </div>
                </div>
            </div>
            <div>
            <div className="card w-[200px] mt-10 ml-3 bg-blue-500 text-neutral-content">
                <div className="avatar">
                    <div className="w-[80px] mx-auto  mt-5 rounded-full">
                        <img src="https://cdn1.i-scmp.com/sites/default/files/styles/768x768/public/images/methode/2018/07/26/bf01d32e-8fcd-11e8-ad1d-4615aa6bc452_1280x720_204951.jpg?itok=lSmaQVob" alt='' />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white">Lisa</h2>
                    <p className='text-white'>3 mutual friend</p>
                    <div className="card-actions justify-end">
                        <button className="bg-primary px-2 py-2 rounded-lg text-black">Accept</button>
                        <button className="bg-red-700 px-2 py-2 rounded-lg text-black">Reject</button>
                    </div>
                </div>
            </div>
            <div>
            <div className="card w-[200px] mt-10 ml-3 bg-blue-500 text-neutral-content">
                <div className="avatar">
                    <div className="w-[80px] mx-auto  mt-5 rounded-full">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.rQXw5AQNidcN6HHYx1hJBwHaJO&pid=Api&P=0" alt='' />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white">Jiso</h2>
                    <p className='text-white'>1 mutual friend</p>
                    <div className="card-actions justify-end">
                        <button className="bg-primary px-2 py-2 rounded-lg text-black">Accept</button>
                        <button className="bg-red-700 px-2 py-2 rounded-lg text-black">Reject</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>

    );
};

export default LeftSideBar;