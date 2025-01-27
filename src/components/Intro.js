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
    <Container className="my-3" id="aboutme">
      <h1 className="intro-text">About Me</h1>
      <hr />
      <p className="intro-text">
        My name is Yihao Mai. I'm a fourth-year Computer Science undergrad at{" "}
        <i>Georgia Institute of Technology</i>, graduating in May 2025. I'm also
        an incoming Fall 2025 Master's student at Georgia Tech, majoring in
        Computer Science. I'm currently looking for a 2025 summer software
        engineer internship.
      </p>

      <p className="intro-text">
        My primary interests lie in <b>full-stack development</b>,{" "}
        <b>database management</b> and <b>AI</b>. I aspire to use my expertise
        to increase the accessibility of and simplify data analysis with AI, as
        well as to develop SasS applications.
      </p>

      <p className="intro-text">
        Through my internship and project experiences, I have honed my
        full-stack dev skills and have become proficient in Java, Python,
        JavaScript, MERN stack, Next.js, Spring, and SQL/No SQL databases. I
        also have DevOps experience with GitHub, Docker, Kubernetes, and CI/CD
        pipelines.
      </p>

      <p className="intro-text">
        I am an undergraduate research assistant at Georgia Tech’s{" "}
        <a
          href="https://kexinrong.github.io/lab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          D2I
        </a>
        <> </>collaborating with researchers across five universities to design
        a knowledge graph connecting researchers, topics, and organizations. I
        built an automated pipeline to manage millions of raw OpenAlex data in
        PostgresDB, serving the primary data source for our webapp. 
        Additionally, as a Full Stack intern at JobOclock, I
        streamlined job applications with AI by developing an automated email
        processing pipeline using AWS Lambda, S3, and DynamoDB and enhancing
        backend systems with Spring Boot and RESTful APIs. Let’s connect if
        you’d like to discuss projects or opportunities!
      </p>

      <p className="intro-text">
        Other than school and work, I also enjoy traveling. I have been to 4
        countries and have a goal to visit at least one unexplored place every
        year. However, my top two goals are sky diving and deep sea diving.
      </p>

      <p className="intro-text">
        I'm a dog person and have a 7-year-old Golden Retriever named (
        <Link src="./images/Coco.jpeg" text="Coco" width="250" />
        ). I also take care of two Great Pyrenees (
        <Link
          src="./images/Lucky-Cherry.jpeg"
          text="Cherry and Lucky"
          width="500"
        />
        ), and two cats (
        <Link
          src="./images/Maomao-Xiaoju.jpeg"
          text="Maomao and Xiaoju"
          width="300"
        />
        ) for my cousin.
      </p>
    </Container>
  );
}

export default Intro
