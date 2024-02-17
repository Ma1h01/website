import React from 'react'
import './component-css/Intro.css';
import { Container } from 'react-bootstrap';
const Intro = () => {
  return (
    <Container className='my-3' id='aboutme'>
        <h1><b>About Me</b></h1>
        <hr/>
        <p className='intro-text'>My name is Yihao Mai. I am a third-year CS student at <i>Georgia Institue of Technology</i>,
        currently looking for a 2024 summer internship in software development, preferably in full-stack web dev. I'm passionate about
        learning data management and analysis using cutting-edge AI technology such as Machine Learning and Deep Learning.
        I'm also planning to pursue a master's degree in CS, specializing in Interactive Intelligence.
        </p>
        <p className='intro-text'>
            Outside of school, I have actively been working with an e-commerce retialer to help automate his package processing
            by developing a Python script. We are currently close to finishing all the logic and will soon start testing and
            designing the UI. During this collaboration, I learned a lot about the e-commerce field, and it gave me an idea
            for my next major project: a full-stack web app that can help small e-commerce retailers manage their inventory and orders.
        </p>
        <p className='intro-text'>
            Other than school and work, I also enjoy traveling, especially with my friends. I have been to 4 countries and have a goal to visit at least
            one unexplored place every year. However, my major goals are sky diving and deep sea diving at least once in my life. Without 
            doing these two things, I don't think I can say I have lived my life to the fullest.
        </p>

        <p className='intro-text'>
            I'm a dog person and have a 7-year-old Golden Retriever named Coco. I also take care of two Great Pyrenees for my cousin.
        </p>
    </Container>
  )
}

export default Intro
