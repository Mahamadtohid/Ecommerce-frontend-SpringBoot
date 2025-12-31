import React from 'react'
import { mainCarouselData } from './mainCarouselData.js'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {

    const items = mainCarouselData.map((item) => (<img className='cursor-pointer' role='presentation' src={item.image} alt="" 
    style={{width:"100%", height:"400px", objectFit:"cover"}} />))
  return (

    
    <AliceCarousel
        // mouseTracking
        items={items}
        // responsive={responsive}
        // controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        infinite
        autoPlayInterval={1500}
    />
  )
}

export default MainCarousel
