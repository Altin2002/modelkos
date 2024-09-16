import React from 'react';
import './backdrop.scss';

const Backdrop = ({ closeMenu }) => {
    return (
        <div className="backdrop" onClick={closeMenu}></div>
    );
};

export default Backdrop;