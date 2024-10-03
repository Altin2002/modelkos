import React from 'react';
import './card.scss'
import { IoEyeOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";


const Card = ({ image, title, name, location, payment, views, isActive, isDark }) => {
    return (
        <div className={`models-card ${isActive ? 'active' : ''} ${isDark ? 'dark' : ''}`}>
            <img src={image} alt={name} />
            <button className='btn'>View Details</button>
            <div className="card-content">
                <p className='position'>{title}</p>
                <div className='down-content'>
                    <div className='left'>
                        <h3>{name}</h3>
                        <p className='professions'><SlLocationPin /> {location}</p>
                    </div>
                    <div className='right'>
                        <p className='payment'>{payment}</p>
                        <p className='views'><IoEyeOutline />{views}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;