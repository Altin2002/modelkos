import React from 'react'
import './MediaKos.scss'
import image from '../../../assets/284904855_668356461070389_6809424271305971756_n (1).png'
import mediaLogo from '../../../assets/MediaKos.png'

const MediaKos = () => {
    return (
        <div className='media-kos'>
            <div className='title'>
                <h1>OUR PARTENRSHIPS</h1>
            </div>
            <div className='content'>
                <div className='left'>
                    <div className='logo'>
                        <img src={mediaLogo} alt='logo' />
                        <h1>MediaKos</h1>
                    </div>
                    <div className='social-media'>
                        <h1>Manage your social media</h1>
                        <p>
                        MediaKos assists all influencers, models, and artists in managing their social media accounts, as well
                        as creating content and much more.
                        </p>
                        <button>Learn more</button>
                    </div>
                </div>

                <div className='right'>
                    <img src={image} alt='right' />
                </div>
            </div>
        </div>
    )
}

export default MediaKos