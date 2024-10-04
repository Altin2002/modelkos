import React from 'react'
import './testimonials.scss'
import Card from './Card'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className='title'>
                <h1>WHAT PEOPLE SAY</h1>
            </div>
            <div className='containerr'>

                <div className='content'>
                    <div className='left'>
                        <h1> WHAT </h1>
                        <h1> PEOPLE </h1>
                        <h1> SAY </h1>
                    </div>
                    <div className='right'>
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials