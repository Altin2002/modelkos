import React from 'react'
import './card.scss'

const Card = ({ image, date, title, text}) => {
    return (
        <div className='blog-card' >
            <img src={image} alt={date} />
            <div className="blog-card-content">
                <p className='date'>{date}</p>
                <h3>{title}</h3>
                <p className='text'>{text}</p>
            </div>
        </div>
    );
};

export default Card