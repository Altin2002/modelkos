import React from 'react'
import './card.scss'
import image from '../../assets/ivan-dodig-R21SyyJDFgc-unsplash.png'

const Card = () => {
    return (
        <div className='testimonials-card'>
            <h1>THE BEST AGENCY</h1>
            <p>Sarah Doukas founded the agency in her home in 1987. With Richard Branson as her business <br />
                partner, Sarah revolutionized the traditional modelling industry by launching the first UK<br />
                agency to represent, worldwide, new faces Sarah had discovered herself and this became the <br />
                hallmark of the agency. 1988 is remembered as the year Sarah changed the fashion industry<br />
                when she spotted Kate Moss at JFK Airport in New York City.
            </p>
            <div className='team'>
                <div className='left'>
                    <h2>XHENSILA HALIMI</h2>
                    <p>Social Media Manager</p>
                </div>
                <div className='right'>
                    <img src={image} alt='xhensila' />
                </div>
            </div>
        </div>
    )
}

export default Card