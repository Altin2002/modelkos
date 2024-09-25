import React, {useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './modelsCarousel.scss'
import Card from './Card';
import { modelsCard } from './data';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 

const ModelsCarousel = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className='models-carousel'>
            <div className='title'>
                <h1>MODELS</h1>
            </div>
            <div className='content'>
                <Tabs className='tabs' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='tab-list'>
                        <Tab>All</Tab>
                        <Tab>Prishtina</Tab>
                        <Tab>Peja</Tab>
                        <Tab>Ferizaji</Tab>
                        <Tab>Mitrovica</Tab>
                        <Tab>Gjakova</Tab>
                        <Tab>Gjilani</Tab>
                        <Tab>Prizreni</Tab>

                    </TabList>
                    <TabPanel className='tab-panel'>
                        <Swiper className='swiper'
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation={{ clickable: true }}
                            modules={[Pagination, Navigation]}
                            pagination={{ clickable: true }}
                            breakpointsBase={'container'}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                1055: {
                                    slidesPerView: 4,
                                    spaceBetween: 20
                                },

                            }}
                        >
                            {modelsCard.map((model, index) => (
                                <SwiperSlide key={index}>
                                    <Card
                                        image={model.image}
                                        title={model.title}
                                        name={model.name}
                                        location={model.location}
                                        payment={model.payment}
                                        views={model.views}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </TabPanel>
                    <TabPanel className='tab-panel'>
                        image4
                        image5
                        image6
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default ModelsCarousel