import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-sm md:text-xl" href='#'>Arko Roy Badhon</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal">
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact-form'>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;