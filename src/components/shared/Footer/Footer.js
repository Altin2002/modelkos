import React from 'react';
import './footer.scss';
import { footerData } from './footerData';
import { FormattedMessage } from 'react-intl';
import footerLogo from '../../../assets/footerLogo.png'
import logoWhite from '../../../assets/logoWhite.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SelectLanguage from '../SelectLanguage/selectLanguage'

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <h1>MODELING</h1>
                    <img src={footerLogo} alt='logo' />
                    <h1>MODELING</h1>
                </div>
            </div>

            <div className="footer-links">
                <div className='left'>
                    <div className="footer-column">
                        <h4><FormattedMessage id="footer.models.title" defaultMessage="MODELS" /></h4>
                        <ul>
                            {footerData.models.map((item) => (
                                <li key={item.id}>
                                    <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4><FormattedMessage id="footer.about.title" defaultMessage="ABOUT" /></h4>
                        <ul>
                            {footerData.about.map((item) => (
                                <li key={item.id}>
                                    <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4><FormattedMessage id="footer.work.title" defaultMessage="WORK" /></h4>
                        <ul>
                            {footerData.work.map((item) => (
                                <li key={item.id}>
                                    <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4><FormattedMessage id="footer.support.title" defaultMessage="SUPPORT" /></h4>
                        <ul>
                            {footerData.support.map((item) => (
                                <li key={item.id}>
                                    <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='right'>
                    <div className='right-top'>
                        <div className="footer-column">
                            <h4><FormattedMessage id="footer.modelsContact.title" defaultMessage="Models" /></h4>
                            <ul>
                                {footerData.modelsContact.map((item) => (
                                    <li key={item.id}>
                                        <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4><FormattedMessage id="footer.management.title" defaultMessage="Management" /></h4>
                            <ul>
                                {footerData.managment.map((item) => (
                                    <li key={item.id}>
                                        <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='right-bottom'>
                        <div className='footer-column'>
                            <h4><FormattedMessage id='jobs' defaultMessage='Jobs' /></h4>
                            <ul>
                                <li><FormattedMessage id='jobsEmail' defaultMessage='jobs@modelkos.com' /></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className="footer-bottom">
                <div className='bottom-left'>
                    <div className='logo'>
                        <img src={logoWhite} alt='logo' />
                        <h4>MODELKOS</h4>
                    </div>

                    <p>
                        <FormattedMessage id="footer.copyright" defaultMessage="© 2024 - MODELKOS" />
                    </p>

                </div>
                <div className='bottom-mid'>
                    <p>
                        <FormattedMessage id='footer.privacy' defaultMessage='Privacy Statement' />
                    </p>
                    <p>
                        <FormattedMessage id='footer.terms' defaultMessage='Terms of Service' />
                    </p>
                    <p>
                        <FormattedMessage id='footer.faq' defaultMessage='Help FAQ' />
                    </p>
                </div>
                <div className='bottom-right'>
                    <div className='icons'>
                        <Link to='/'><FaFacebookF /></Link>
                        <Link to='/'><FaInstagram /></Link>
                        <Link to='/'><FaTiktok /></Link>
                        <Link to='/'><FaTwitter /></Link>
                    </div>
                    <p>+383 (44) 100 200</p>
                    <div>
                        <SelectLanguage
                            setLanguage={props.setLanguage}
                            language={props.language}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;