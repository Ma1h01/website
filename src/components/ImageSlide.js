import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import IntroAndContact from './IntroAndContact';
import './component-css/ImageSlide.css';

export const images = [
  {
    src: "./images/views-and-people/bromo.jpg",
    caption: "Bromo Tengger Semeru National Park, East Java, Indonesia(2024)",
  },
  {
    src: "./images/views-and-people/sidomulyo.jpg",
    caption: "Sidomulyo, East Java, Indonesia(2024)",
  },
  {
    src: "./images/views-and-people/bali_0.jpeg",
    caption: "Klungkung, Bali, Indonesia(2024)",
  },
  {
    src: "./images/views-and-people/bali_1.jpeg",
    caption: "Klungkung, Bali, Indonesia(2024)",
  },
  {
    src: "./images/views-and-people/6.jpeg",
    caption: "Yunan, China(2023)",
  },
  {
    src: "./images/views-and-people/grand_turk.jpeg",
    caption: "Grand Turk, Turks and Caicos Islands(2019)",
  },
  {
    src: "./images/views-and-people/philipsburg.jpeg",
    caption: "Philipsburg, Sint Maarten(2019)",
  },
  {
    src: "./images/views-and-people/guangzhou.jpeg",
    caption: "Guangzhou, China(2023)",
  },
  {
    src: "./images/views-and-people/chongqing.jpeg",
    caption: "Chongqing, China(2023)",
  },
];

function ImageSlide() {
  return (
    <Carousel touch id='home' interval={5000} pause='false' fade>
      {
        images.map((image, index) => {
          return (
            <Carousel.Item key={index} className='carousel-item'>
              <Image src={image.src} alt='Not Found' className='img' rel='preload'/>
              <Carousel.Caption className='caption'>
                  <IntroAndContact/>
              </Carousel.Caption>
              <Carousel.Caption> 
                  <p>{image.caption}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }    
    </Carousel>
  )
}

export default ImageSlide