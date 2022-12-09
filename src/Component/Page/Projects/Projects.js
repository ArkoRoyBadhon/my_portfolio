import React from 'react';
import { a } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='my-10'>
            <h3 className="text-3xl font-bold text-center my-10">My Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Purana Bazar
                            <div className="badge badge-secondary">Best Project</div>
                        </h2>
                        <p>This project is a shopping site where people can sell and buy their products</p>
                        <div className="btn">More About this project</div>
                        <div className="card-actions justify-evenly mt-4">
                            <a className="btn">Live Site</a>
                            <a className="btn">FrontEnd</a>
                            <a className="btn ">BackEnd</a>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <a href="https://cooking-corner-69041.web.app/" className="card-title">
                            Cooking Corner
                        </a>
                        <p>This project is a shopping site where people can sell and buy their products</p>
                        <div className="btn">More About this project</div>
                        <div className="card-actions justify-evenly mt-4">
                            <a href='https://cooking-corner-69041.web.app/' className="btn">Live Site</a>
                            <a href='https://github.com/ArkoRoyBadhon/Cooking-corner-client-public' className="btn">FrontEnd</a>
                            <a href='https://github.com/ArkoRoyBadhon/Cooking-corner-server-public' className="btn ">BackEnd</a>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Knowledge House
                        </h2>
                        <p>This project is a shopping site where people can sell and buy their products</p>
                        <div className="btn">More About this project</div>
                        <div className="card-actions justify-evenly mt-4">
                            <a href='https://knowledgehouse-6c03b.web.app/' className="btn">Live Site</a>
                            <a href='https://github.com/ArkoRoyBadhon/Knowledge-house-client-public' className="btn">FrontEnd</a>
                            <a href="https://github.com/ArkoRoyBadhon/Knowledge-house-server-public" className="btn ">BackEnd</a>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Quiz Mania
                        </h2>
                        <p>This project is a shopping site where people can sell and buy their products</p>
                        <div className="btn">More About this project</div>
                        <div className="card-actions justify-evenly mt-4">
                            <a href='https://quiz-mania-arko.netlify.app' className="btn">Live Site</a>
                            <a href='https://github.com/ArkoRoyBadhon/quiz-mania-public' className="btn">FrontEnd</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;