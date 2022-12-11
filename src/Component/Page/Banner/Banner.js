import React from 'react';
import avatar from '../../../assets/87617-gentleman-thinking-about-money.gif'

import AutoTyping, { BlinkCursor } from 'react-auto-typing'


const Banner = () => {

    return (
        <div className="hero bg-base-200 h-[40rem] rounded-2xl -mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={avatar} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Hi, I'm Arko Roy Badhon</h1>
                    {/* <h4 className="text-3xl font-bold">MERN STACK Developer</h4> */}
                    <div className="">
                        {/* <AutoTyping
                            className="text-5xl font-bold"
                            active // <boolean>
                            textRef={`Hi, I'm Arko Roy Badhon`} // <string>
                            // textRef="Hi, I'm Arko Roy Badhon" // <string>
                            writeSpeed={100} // <number>
                            deleteSpeed={10} // <number>
                            delayToWrite={1000} // <number>
                            delayToDelete={2000} // <number>
                        />
                        <br /> */}
                        <AutoTyping
                            className="text-3xl font-bold"
                            active // <boolean>
                            textRef="Full Stack Developer" // <string>
                            writeSpeed={150} // <number>
                            deleteSpeed={1000} // <number>
                            delayToWrite={1500} // <number>
                            delayToDelete={2000} // <number>
                        />

                        <BlinkCursor
                            active // <boolean>
                            blinkSpeed={500} // <number>
                        />
                    </div>
                    <br />
                    {/* <button onClick={handleDownload} className="btn btn-primary mt-10">My Resume</button> */}
                    <a className='btn btn-info mt-5' href="https://drive.google.com/file/d/12NAsHpf-gTMV5b7Mc0gha5KBwFJopygJ/view?usp=share_link" download>
                        <button>Dowload Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;