import React from 'react'
import './logoSlider.scss'
import Slider from 'react-infinite-logo-slider'
import logo1 from '../../assets/logos/chanel.png'
import logo2 from '../../assets/logos/boohoo.png'
import logo3 from '../../assets/logos/mango.png'
import logo4 from '../../assets/logos/bershka.png'
import logo5 from '../../assets/logos/KosovaGirls.png'
import logo6 from '../../assets/logos/Bratly.png'
import logo7 from '../../assets/logos/giorgio-armani.png'
import logo8 from '../../assets/logos/hugo.png'
import logo9 from '../../assets/logos/calvinklein.png'


const LogoSlider = () => {
    return (
        <div className='logo-slider'>
            <div className='title'>
                <p>OUR PARTNERS</p>
            </div>
            <Slider
                width="250px"
                duration={20}
                pauseOnHover={true}
                blurBorders={false}
                blurBoderColor={'#fff'}
            >
                <Slider.Slide>
                    <img src={logo1} alt="any" className='w-10' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={logo2} alt="any2" className='w-30' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={logo3} alt="any3" className='w-30' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={logo4} alt="any3" className='w-30' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={logo5} alt="any3" className='w-30' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={logo6} alt="any3" className='w-30' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={logo7} alt="any3" className='w-30' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={logo8} alt="any3" className='w-30' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={logo9} alt="any3" className='w-10' />
                </Slider.Slide>
            </Slider>
            <div className='button'>
                <button>See all partners</button>
            </div>
        </div>
    )
}

export default LogoSlider