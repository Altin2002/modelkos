import React from 'react';
import './card.scss'
import { FaEye, FaLocationPin } from 'react-icons/fa6';


const Card = ({ image, title, name, location, payment, views, isActive, isDark }) => {
    return (
        <div className={`card ${isActive ? 'active' : ''} ${isDark ? 'dark' : ''}`}>
            <img src={image} alt={name} />
            <div className="card-content">
                <p>{title}</p>
                <div className='down-content'>
                    <div className='left'>
                        <h3>{name}</h3>
                        <p className='professions'><FaLocationPin /> {location}</p>
                    </div>
                    <div className='right'>
                        <p className='date'>{payment}</p>
                        <p><FaEye />{views}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;