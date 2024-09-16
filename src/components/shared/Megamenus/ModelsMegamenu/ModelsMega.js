import React from 'react'
import './modelsMega.scss'
import { modelsData } from './modelsData'
import { FormattedMessage } from 'react-intl'
import image1 from '../../../../assets/aboutMega/imageedit_1_9765973094.png'
import image2 from '../../../../assets/aboutMega/286633495_410235077666184_1286832771602271855_n.png'

const ModelsMega = () => {
    return (
        <div className='models-mega'>
            <div className='left'>
                <div className='city'>
                    <h4>CITY</h4>
                    <ul>
                        {modelsData.city.map((item) => (
                            <li key={item.id}>
                                <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='female'>
                    <h4>FEMALE</h4>
                    <ul>
                        {modelsData.female.map((item) => (
                            <li key={item.id}>
                                <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='male'>
                    <h4>MALE</h4>
                    <ul>
                        {modelsData.male.map((item) => (
                            <li key={item.id}>
                                <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='kids'>
                    <h4>Kids</h4>
                    <ul>
                        {modelsData.kids.map((item) => (
                            <li key={item.id}>
                                <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='elderly'>
                    <h4>ELDERLY</h4>
                    <ul>
                        {modelsData.elderly.map((item) => (
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

export default ModelsMega