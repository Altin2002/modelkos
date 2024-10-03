import React from 'react'
import AboutSection from '../components/AboutSection/AboutSection'
import OurBlog from '../components/OurBlog/OurBlog'
import MediaKos from '../components/Partenrships/MediaKos/MediaKos'
import LogoSlider from '../components/LogoSlider/LogoSlider'
import Subscribe from '../components/Subscribe/Subscribe'

export const AboutPage = () => {
  return (
    <div className='about-page'>
        <AboutSection />
        <MediaKos />
        <OurBlog />
        <LogoSlider />
        <Subscribe />
    </div>
  )
}
