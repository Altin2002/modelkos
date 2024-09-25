import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './ourBlog.scss'
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 
import Card from './Card/Card';
import { ourBlogData } from './data';



const OurBlog = () => {

    return (

        <div className='blog-section'>
            <div className='title'>
                <h1>OUR BLOG</h1>
            </div>

            <div className='carousel'>
                <Swiper className='swiper'
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={{clickable: true}}
                    modules={[Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    breakpointsBase={'container'}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1055: {
                            slidesPerView: 3, 
                            spaceBetween: 20
                        },
        
                    }}
                >
                    {ourBlogData.map((model, index) => (
                        <SwiperSlide key={index}>
                            <Card
                                image={model.image}
                                date={model.date}
                                title={model.title}
                                text={model.text}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='button'>
                <button>Read all blog</button>
            </div>
        </div>
    )
}

export default OurBlog