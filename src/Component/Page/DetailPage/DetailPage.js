import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import '../HomePage/Navbar.css'
import { featureProvider } from '../../Context/FeatureContext';

const DetailPage = () => {
    const { singleProject } = useContext(featureProvider)

    const {name, img, img2, img3, live_site, client_site, server_side, short_description, features, technology } = singleProject

    const [allData, setAllData] = useState([])

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


    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setAllData(data))
            .catch(err => console.log(err.message))
    }, [])

    console.log(singleProject);

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
            <div className="mt-10 max-w-screen-lg mx-auto">
                <h3 className="text-3xl font-bold text-center">{name}</h3>
                <div className="flex justify-center mt-8">
                    <a href={live_site} className="btn">Live Site</a>
                    <a href={client_site} className="btn">FrontEnd</a>
                    <a href={server_side} className="btn">BackEnd</a>
                </div>
                <div className="my-8">
                    <img className='rounded-lg my-3' src={img} alt="" />
                    <img className='rounded-lg my-3' src={img2} alt="" />
                    <img className='rounded-lg my-3' src={img3} alt="" />
                </div>
                <div className="">
                    <p className="text-xl">{short_description}</p>
                </div>
                <div className="my-2">
                    <h4 className="text-xl font-bold">Features</h4>
                    {
                        features?.map(feature => <p>= {feature?.list}</p>)
                    }
                </div>
                <div className="my-2">
                    <h4 className="text-xl font-bold">Technology</h4>
                    {
                        technology?.map(feature => <p>= {feature?.list}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DetailPage;