import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import IntroAndContact from './IntroAndContact';
import './component-css/ImageSlide.css';

function ImageSlide() {
  return (
    <Carousel touch fade id='home'>

      <Carousel.Item className='carousel-item'>
        <Image src='./images/6.jpeg' alt='Not Found' className='img'/>
        <Carousel.Caption className='caption'>
            <IntroAndContact/>
        </Carousel.Caption>
        <Carousel.Caption> 
            <p>Yunan, China(2023)</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel-item'>
      <Image src='./images/2.jpeg' alt='Not Found'  className='img'/>
        <Carousel.Caption className='caption'>
            <IntroAndContact/>
        </Carousel.Caption>
        <Carousel.Caption> 
            <p>Grand Turk, Turks and Caicos Islands(2019)</p>
        </Carousel.Caption>
      </Carousel.Item >

      <Carousel.Item className='carousel-item'>
        <Image src='./images/8.jpeg' alt='Myself' className='img'/>
        <Carousel.Caption className='caption'>
            <IntroAndContact/>
        </Carousel.Caption>
        <Carousel.Caption> 
            <p>Philipsburg, Sint Maarten(2019)</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel-item'>
        <Image src='./images/3.jpeg' alt='Myself' className='img'/>
        <Carousel.Caption className='caption'>
            <IntroAndContact/>
        </Carousel.Caption>
        <Carousel.Caption> 
            <p>Guangzhou, China(2023)</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel-item'>
        <Image src='./images/7.jpeg' alt='Myself' className='img'/>
        <Carousel.Caption className='caption'>
            <IntroAndContact/>
        </Carousel.Caption>
        <Carousel.Caption> 
            <p>Chongqing, China(2023)</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default ImageSlide