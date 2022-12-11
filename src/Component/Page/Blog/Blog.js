import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import '../HomePage/Navbar.css'

const Blog = () => {

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
            <h2 className="text-2xl text-center mt-20">Comming Soon....</h2>
        </div>
    );
};

export default Blog;