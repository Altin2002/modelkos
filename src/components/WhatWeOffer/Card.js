import React from 'react'
import './card.scss'
import { BsArrowRight } from 'react-icons/bs';

const Card = ({ logo, title, text}) => {
    return (
        <div className='whatWeOffer-card'>
            <div className="card-content">
            <img src={logo} alt={title} />
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
            <div className='btn'>
                <button>Learn more <BsArrowRight/></button>
            </div>
        </div>
    );
};


export default Card