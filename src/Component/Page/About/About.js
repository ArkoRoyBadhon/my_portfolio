import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import '../HomePage/Navbar.css'
import imgMe from '../../../assets/87617-gentleman-thinking-about-money.gif'

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
                    <img src={imgMe} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className=''>
                        <h1 className="text-5xl font-bold">Hi, I am Arko Roy Badhon</h1>

                        <p className="text-lg my-2">Email: arkoroyb@gmail.com</p>
                        <p className="text-lg my-2">Phone: +8801755434678</p>
                        <p className="text-lg my-2">WhatsApp: +8801755434678</p>
                        <p><a href="https://github.com/ArkoRoyBadhon" className="text-lg my-2">Github: https://github.com/ArkoRoyBadhon</a></p>
                        <p className="" className="text-lg my-2"><a href="https://www.linkedin.com/in/arko-roy-badhon-893567198/" className="https://www.linkedin.com/in/arko-roy-badhon-893567198/">LinkedIn: https://www.linkedin.com/in/arko-roy-badhon-893567198/</a></p>

                        <p className="py-6">I am a Full Stack Developer. I am very dedicated and quick leaner.</p>
                        <p>I have worked some project personally. These projects are displayed in the Home page. <br /> Please check these peojects</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;