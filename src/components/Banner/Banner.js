import React from 'react'
import './banner.scss'
import logo from '../../assets/logoWhite.png'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='content'>
                    <h1 className='first'>BEING CLASSY IS BENEFICIAL</h1>
                    <h1 className='second'>BEING PROFFESIONAL IS INVALUABLE</h1>
                </div>
            </div>
        </div>
    )
}

export default Banner