import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import logo from '../../../assets/logo.png'
import { TiArrowSortedDown } from "react-icons/ti";
import { MdMenu } from 'react-icons/md'
import { FormattedMessage } from 'react-intl'


const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className='nav'>

            <Link to='/' className='title'>
                <img src={logo} alt='logo' className='svg' /> MODELKOS </Link>

            <div className='links'>
                <div className='nav-link'>
                    <Link to='/' className='inner-link'>
                    <FormattedMessage id='home' defaultMessage='Home' />
                    </Link>
                </div>

                <div className='nav-link'>
                    <Link to='/' className='inner-link'>
                    <FormattedMessage id='our-work' defaultMessage='Our Work' />
                    <TiArrowSortedDown className='svg' />
                    </Link>
                </div>

                <div className='nav-link'>
                    <Link to='/' className='inner-link'>
                    <FormattedMessage id='about' defaultMessage='About' />
                    <TiArrowSortedDown className='svg' /></Link>
                </div>


                <div className='nav-link'>
                    <Link to='/' className='inner-link'>
                    <FormattedMessage id='models' defaultMessage='Models' />
                    <TiArrowSortedDown className='svg' /></Link>
                </div>

                <div className='nav-link'>
                    <Link to='/' className='inner-link'>
                    <FormattedMessage id='academy' defaultMessage='Academy' />
                    <TiArrowSortedDown className='svg' /></Link>
                </div>

                <div className='nav-link'>
                    <Link to='/' className='inner-link'>
                    <FormattedMessage id='blog' defaultMessage='Blog' />
                    </Link>
                </div>
            </div>

            <div className='nav-contact'>
                <div className='contact-info'>
                    <button className='applyBtn'>Apply now</button>
                </div>
                <Link to='/' className='signup'>Contact Us</Link>
            </div>

            <button className='mobile-menu-icon' onClick={toggleMobileMenu}>
                    <MdMenu />
            </button>

            {/* <NavbarMobile open={isMobileMenuOpen} close={closeMobileMenu} /> */}

        </div>
    )
}

export default NavBar