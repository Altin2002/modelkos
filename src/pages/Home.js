import React from 'react'
import AboutSection from '../components/AboutSection/AboutSection'
import MediaKos from '../components/Partenrships/MediaKos/MediaKos'
import OurBlog from '../components/OurBlog/OurBlog'
import LogoSlider from '../components/LogoSlider/LogoSlider'
import Models from '../components/ModelsSection/Models'
import Banner from '../components/Banner/Banner'
import ModelsCarousel from '../components/ModelsCarousel/ModelsCarousel'
// import Hero from '../components/Hero/Hero'

const Home = () => {
    return (
        <div className='home-page'>
            {/* <Hero /> */}
            <AboutSection />
            <Models />
            <Banner />
            <ModelsCarousel />
            <MediaKos />
            <OurBlog />
            <LogoSlider />
        </div>
    )
}

export default Home