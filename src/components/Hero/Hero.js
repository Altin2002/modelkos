import React from 'react'
import "./hero.scss"
import Form from './Form'
import image1 from '../../assets/hero1.png'
import image2 from '../../assets/hero2.png'


const Hero = () => {
    return (
        <div className='hero-section'>
            <div className='left'>
                <div className='title'>
                    <h1 className=' h1-up'>HIRE A MODEL OR</h1>
                    <h1 className='h1-down'>BECOME ONE</h1>
                </div>
 
                <div className='form'>
                    <Form />
                </div>
            </div>
            <div className='right'>
                <div className='images'>
                    <div className="image-wrapper">
                        <img src={image1} alt="First" className="image1" />
                        <img src={image2} alt="Second" className="image2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero