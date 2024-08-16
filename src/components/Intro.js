import React from 'react'
import './component-css/Intro.css';
import { Container } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';

const Intro = () => {
  const Link = ({src, text, width}) => {
    return (
      <OverlayTrigger
      placement="top"
      overlay={
        <Figure >
        <Figure.Image
          width={width}
          height='auto'
          src={src}
        />
        </Figure>        
      }
      >
      <Button variant="link" style={{padding : '0'}}>{text}</Button>
      </OverlayTrigger>
    )
  }
  return (
    <Container className='my-3' id='aboutme'>
        <h1 className='intro-text'>About Me</h1>
        <hr/>
        <p className='intro-text'>My name is Yihao Mai. I am a fourth-year Computer Science undergrad at <i>Georgia Institute of Technology</i>,
        currently looking for a 2025 summer internship or entry-level software engineer position.
        </p>

        <p className='intro-text'>
          My primary interests lie in <b>full-stack development</b>, <b>database management</b> and <b>generative AI</b>. I aspire to use my expertise in these areas to
          tackle database challenges such as scalability and query optimization, and to make database more accessible to non-technical users, as well as to develop SasS applications.
        </p>

        <p className='intro-text'>
            Through my internship and project experiences, I have honed my full-stack dev skills and have become proficient in Java, Python, JavaScript, MERN stack, Next.js, Spring, and SQL/No SQL databases.
            I also have DevOps experience with GitHub, Docker, Kubernetes, and CI/CD pipelines.
        </p>

        <p className='intro-text'>
            I'm a active backend developer at uniBuzzy, a student startup at Georgia Tech, where I am responsible for developing and maintaining the backend of the app, as well as the database.
            I'm always excited to develop software in collaboration. Feel free to reach out to me if you have any project ideas or opportunities.
        </p>

        <p className='intro-text'>
            Other than school and work, I also enjoy traveling. I have been to 4 countries and have a goal to visit at least
            one unexplored place every year. However, my top two goals are sky diving and deep sea diving.
        </p>

        <p className='intro-text'>
            I'm a dog person and have a 7-year-old Golden Retriever named (<Link src='./images/Coco.jpeg' text='Coco' width='250'/>). 
            I also take care of two Great Pyrenees (<Link src='./images/Lucky-Cherry.jpeg' text='Cherry and Lucky' width='500'/>),
            and two cats (<Link src='./images/Maomao-Xiaoju.jpeg' text='Maomao and Xiaoju' width='300'/>)
            for my cousin.
        </p>


    </Container>
  )
}

export default Intro
