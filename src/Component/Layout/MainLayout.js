// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa'
// import '../Page/HomePage/Navbar.css'
// import { Link, Outlet } from 'react-router-dom';

// const MainLayout = () => {
//     // setting mobile nav
//     const [click, setClick] = useState(false)
//     const handleClick = () => setClick(!click)

//     // change nav color when scrolling
//     const [color, setColor] = useState(false)
//     const changeColor = () => {
//         if (window.scrollY >= 90) {
//             setColor(true)
//         } else {
//             setColor(false)
//         }
//     }

//     window.addEventListener('scroll', changeColor)

//     // close nav color when scrollinh
//     const closeMenu = () => setClick(false)


//     return (
//         <>
//             <div className={color ? 'header header-bg' : 'header'}>
//                 {/* <div className={'header'}> */}
//                 <nav className='navbar'>
//                     <div className='logo'>
//                         <Link to='/' className="text-light text-2xl font-bold">Portfolio</Link>
//                     </div>
//                     <div className='hamburger' onClick={handleClick}>
//                         {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
//                             : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
//                     </div>
//                     <ul className={click ? "nav-menu active" : "nav-menu"}>
//                         <li className='nav-item'>
//                             <Link to='/' onClick={closeMenu}>Home</Link>
//                         </li>
//                         <li className='nav-item'>
//                             <a href='#about' onClick={closeMenu}>About</a>
//                         </li>
//                         <li className='nav-item'>
//                             <a href='#skills' onClick={closeMenu}>Skills</a>
//                         </li>
//                         <li className='nav-item'>
//                             <a href='#projects' onClick={closeMenu}>Projects</a>
//                         </li>
//                         <li className='nav-item'>
//                             <a href='#contact-form' onClick={closeMenu}>Contact</a>
//                         </li>
//                         <li className='nav-item'>
//                             <Link to='/blogs' onClick={closeMenu}>Blog</Link>
//                         </li>
//                     </ul>
//                 </nav>

//             </div>
//             <Outlet />
//         </>
//     );
// };

// export default MainLayout;