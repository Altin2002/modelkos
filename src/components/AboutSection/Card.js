import React from 'react';
import './card.scss'


const Card = ({ image, name, professions, date, isActive, isDark }) => {
    return (
        <div className={`card ${isActive ? 'active' : ''} ${isDark ? 'dark' : ''}`}>
            <img src={image} alt={name} />
            <div className="card-content">
                <h3>{name}</h3>
                <p className='professions'>{professions.join(" • ")}</p>
                <p className='date'>{date}</p>
            </div>
        </div>
    );
};

export default Card;