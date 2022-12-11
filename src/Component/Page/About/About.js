import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import '../HomePage/Navbar.css'

const About = () => {

    // setting mobile nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    // change nav color when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    // close nav color when scrollinh
    const closeMenu = () => setClick(false)

    return (
        <div>
            <div className={color ? 'header header-bg' : 'header'}>
                {/* <div className={'header'}> */}
                <nav className='navbar'>
                    <Link to='/' className='logo'>
                        <div className="text-light text-2xl font-bold">Portfolio</div>
                    </Link>
                    <div className='hamburger' onClick={handleClick}>
                        {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                            : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'>
                            <Link to='/' onClick={closeMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' onClick={closeMenu}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/blogs' onClick={closeMenu}>Blog</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="hero h-[40rem] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className=''>
                        <h1 className="text-5xl font-bold">Hi, I am Arko Roy Badhon</h1>
                        <p className="py-6">I am a Full Stack Developer. I am very dedicated and quick leaner.</p>
                        <p>I have worked some project personally. These projects are displayed in the Home page. <br /> Please check these peojects</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;