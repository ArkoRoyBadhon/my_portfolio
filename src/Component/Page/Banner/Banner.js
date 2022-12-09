import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Hi, I'm Arko Roy Badhon</h1>
                    <h4 className="text-3xl font-bold">MERN STACK Developer</h4>
                    <button className="btn btn-primary mt-10">My Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;