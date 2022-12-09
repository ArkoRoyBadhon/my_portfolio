import React from 'react';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Projects from '../Projects/Projects';
import Skills from '../Skill/Skills';

const Home = () => {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <h2>this is home</h2>
            <Banner />
            <Skills />
            <Projects />
            <ContactForm />
        </div>
    );
};

export default Home;