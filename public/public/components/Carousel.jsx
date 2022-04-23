import React from 'react'
import './styles/index.css'
import image1 from './img/people-meeting.jpg'
import image2 from './img/1dollar.jpg'
import image3 from './img/trashphoto.jpg'
import image4 from './img/Fire.png'
import image5 from './img/popular.png'
import './styles/splide-sea-green.min.css'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

const Carousel = () => {
  return (
    <>
        <div className="wrapper" style={{width: 'auto'}}>
    <input type="radio" name="image-slide" defaultChecked="checked" />
    <picture aria-label="Link image">
        <a href="/" target="_blank" />
        <img src={image1} alt="Random Picture 1" style={{width: '100%', filter: 'brightness(0.5)'}} />
    </picture>
    <input type="radio" name="image-slide" />
    <picture aria-label="Link image">
        <a target="_blank">
        <img src={image2} alt="" style={{width: '100%', filter: 'brightness(0.5)'}} />
        </a>
    </picture>
    <input type="radio" name="image-slide" />
    <picture aria-label="Link image">
        <a target="_blank">
        <img src={image3} alt="" style={{filter: 'brightness(0.5)'}}/>
        </a>
    </picture>
    <input type="radio" name="image-slide"/>
    <picture aria-label="Тушение пожаров. Требуются средства на борьбу с пожарами">
        <a href="/event/id4" target="_blank">
        <img src={image4} alt="" style={{filter: 'brightness(0.5)'}}/>
        </a>
    </picture>
    </div>
    <div id="mainmar">
  <h1 className="h1f">Популярные проекты</h1>
  <Splide aria-label="Beautiful Images" hasTrack={ false } >
    <SplideTrack >
        <SplideSlide>
          <img src={image5} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src={image5} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src={image5} alt="" />
        </SplideSlide>
    </SplideTrack>
  </Splide>
  <br/>
</div>
</>
  )
}

export default Carousel