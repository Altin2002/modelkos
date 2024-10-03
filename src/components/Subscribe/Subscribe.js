import React from 'react'
import './subscribe.scss'

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='title'>
                <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
            </div>
            <div className='text'>
                <p>Subscribe to pour newsletter t receive the latest news and updates about ModelKos</p>
            </div>
            <div className='input-text'>
                <input
                    className='input'
                    type="text"
                    placeholder="Type mail here"
                />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe