import React from 'react'
import './aboutMega.scss'
import { aboutData } from './aboutData'
import { FormattedMessage } from 'react-intl'
import image1 from '../../../../assets/aboutMega/imageedit_1_9765973094.png'
import image2 from '../../../../assets/aboutMega/286633495_410235077666184_1286832771602271855_n.png'

const AboutMega = () => {
    return (
        <div className='about-mega'>
            <div className='left'>
                <div className='agency'>
                    <h4>AGENCY</h4>
                    <ul>
                        {aboutData.agency.map((item) => (
                            <li key={item.id}>
                                <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='models'>
                    <h4>MODELS</h4>
                    <ul>
                        {aboutData.models.map((item) => (
                            <li key={item.id}>
                                <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='right'>
                <div className='images'>
                    <div className="image-wrapper">
                        <img src={image1} alt="First" className="image1" />
                        <img src={image2} alt="Second" className="image2" />
                    </div>
                </div>
                <div className='btn'>
                    <button>About us</button>
                </div>
            </div>

        </div>
    )
}

export default AboutMega