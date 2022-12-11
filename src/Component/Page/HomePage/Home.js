import React from 'react';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Projects from '../Projects/Projects';
import Skills from '../Skill/Skills';
import Navbar from './Navbar';

const Home = () => {
    return (
        // <div className='max-w-screen-lg mx-auto'>
        <div>
            <div className="">
                <Navbar />
            </div>
            <br />
            <Banner />
            <div className='max-w-screen-lg mx-auto pt-20'>
                <Skills />
                <Projects />
                <ContactForm />
            </div>
        </div>
    );
};

export default Home;