import React, { useState } from 'react';
import './navMobile.scss';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaRegTimesCircle } from 'react-icons/fa';
import ModelsMega from './MegaMobile/ModelsMega';
import AboutMega from './MegaMobile/AboutMega';
import logo from '../../../assets/logo.png'
import Backdrop from './Backdrop';

const NavbarMobile = ({ open, close }) => {
    const [openModels, setOpenModels] = useState(false);
    const [openAbout, setOpenAbout] = useState(false);

    const toggleModels = () => setOpenModels(!openModels);
    const toggleAbout = () => setOpenAbout(!openAbout);

    const mobileMenu = open ? 'navbar-mobile open' : 'navbar-mobile';

    return (
        <>
            {open && <Backdrop closeMenu={close} />}
            <nav className={mobileMenu}>
                <div className="mobile-header">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <FaRegTimesCircle className="close-icon" onClick={close} />
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Our Work</Link>
                    </li>
                    <li>
                        <Link to="/about" className="about-nav" onClick={toggleAbout}>
                            About <MdKeyboardArrowDown id="arrow-icon" />
                        </Link>
                        {openAbout && <AboutMega />}
                    </li>
                    <li>
                        <Link to="/" className='models-nav' onClick={toggleModels}>
                        Models <MdKeyboardArrowDown id="arrow-icon" />
                        </Link>
                        {openModels && <ModelsMega />}

                    </li>
                    <li>
                        <Link to="/">Academy</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
                <div className="side-contact">
                    <button className='contact-btn'>Contact us</button>
                </div>
            </nav>
        </>
    );
};

export default NavbarMobile;