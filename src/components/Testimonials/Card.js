import React from 'react'
import './card.scss'
import image from '../../assets/ivan-dodig-R21SyyJDFgc-unsplash.png'

const Card = () => {
    return (
        <div className='testimonials-card'>
            <h1>THE BEST AGENCY</h1>
            <p>Sarah Doukas founded the agency in her home in 1987. With Richard Branson as her business
                partner, Sarah revolutionized the traditional modelling industry by launching the first UK
                agency to represent, worldwide, new faces Sarah had discovered herself and this became the 
                hallmark of the agency. 1988 is remembered as the year Sarah changed the fashion industry
                when she spotted Kate Moss at JFK Airport in New York City.
            </p>
            <div class="container">
                <div class="profile">
                    <div class="name">Xhensila Halimi</div>
                    <div class="position">Social Media Manager</div>
                    <div class="rating"> Rating 
                        <div class="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="inactive"></span>
                            <span class="inactive"></span>
                        </div>
                        <div class="rating-score">(4.0)</div>
                    </div>
                </div>

                <div class="image-container">
                    <img src={image} alt="Profile" />
                </div>

            
            </div>
        </div>
    )
}

export default Card