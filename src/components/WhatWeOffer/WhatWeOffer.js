import React from 'react'
import './whatWeOffer.scss'
import { whatWeOfferData } from './data'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination'; 
import Card from './Card';

const WhatWeOffer = () => {
    return (
        <div className='whatWeOffer'>
            <div className='title'>
                <h1>WHAT WE OFFER</h1>
            </div>
            <div className='carousel'>
                <Swiper className='swiper'
                    spaceBetween={10}
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    breakpointsBase={'container'}
                    breakpoints={{
                        568: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1055: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },

                    }}
                >
                    {whatWeOfferData.map((model, index) => (
                        <SwiperSlide key={index}>
                            <Card
                                logo={model.logo}
                                title={model.title}
                                text={model.text}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='button'>
                <button>See all</button>
            </div>
        </div>
    )
}

export default WhatWeOffer
