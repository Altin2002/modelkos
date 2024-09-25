import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './aboutSection.scss'
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';  
import Card from './Card';
import { models } from './aboutData';


const AboutSection = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='about-section'>
            <div className='left'>
                <h1>ABOUT US</h1>
                <p>ModelKos is the leading interactive fashion database connecting the world to models,
                    creative talent, magazines, and luxury and commercial brands. With 1.1 million
                    unique visits per month, the site stands as an essential tool to attribute credit
                    and source new talent.</p>
            </div>

            <div className='right'>
                <div className='carousel'>
                    <Swiper className='swiper'
                        spaceBetween={5}  
                        slidesPerView={1}
                        modules={[Pagination]}
                        pagination={{ clickable: true }} 
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        breakpoints={{
                            // 768: {
                            //     slidesPerView: 2,
                            //     spaceBetween: 20
                            // },
                            1055: {
                                slidesPerView: 2, 
                                spaceBetween: 20
                            },
                        }}
                    >
                        {models.map((model, index) => (
                            <SwiperSlide key={index}>
                                <Card
                                    image={model.image}
                                    name={model.name}
                                    professions={model.professions}
                                    date={model.date}
                                    isActive={index === activeIndex}
                                    isDark={model.isDark}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default AboutSection