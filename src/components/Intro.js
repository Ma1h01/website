import React from 'react'
import './component-css/Intro.css';
import { Container, Row, Col } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';

const Intro = () => {
  const Link = ({ src, text, width }) => {
    return (
      <OverlayTrigger
        placement="top"
        overlay={
          <div style={{ zIndex: 9999 }}>
            <Figure>
              <Figure.Image
                width={width}
                height="auto"
                src={src}
              />
            </Figure>
          </div>
        }
      >
        <Button variant="link" style={{ padding: '0' }}>{text}</Button>
      </OverlayTrigger>
    )
  }

  return (
    <Container className="my-3" id="aboutme">
      <h1 className="intro-text">About Me</h1>
      <hr />
      <Row>
        <Col xs={12} md={3}>
          <div className="intro-section education">
            <h2>Education</h2>
            <ul>
              <li>BSCS from Georgia Tech in May 2025</li>
              <li>MSCS from Georgia Tech (Expected graduation: May 2026)</li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div className="intro-section passion">
            <h2>Passion</h2>
            <ul>
              <li>Full-stack web dev, data/database management, and AI</li>
              <li>Aspire to increase the accessibility of and simplify data analysis with AI</li>
              <li>Committed to continuous learning with emerging technologies and industry trends</li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div className="intro-section resume">
            <h2>Current Exp</h2>
            <ul>
              <li>SDE Intern at Tyler Technologies: Using Angular and C# to enhance products for ADA compliance and migrate from AngularJS to Angular</li>
              <li>Undergraduate Research Assistant at Georgia Tech’s D2I lab: Collaborating with researchers across five universities and building an automated pipeline for managing OpenAlex data in PostgresDB, which powers the CollabNext project</li>
              <li>
                <a href="./docs/resume.pdf" target="_blank" rel="noopener noreferrer">
                  View more in my resume
                </a>
              </li>            
            </ul>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div className="intro-section fact">
            <h2>Facts</h2>
            <ul>
              <li>Visited 4 countries and have a goal to visit at least one unexplored place every year</li>
              <li>Pet enthusiast: 7-year-old Golden Retriever (<Link src="./images/Coco.jpeg" text="Coco" width="250" />), two Great Pyrenees 
              (<Link src="./images/Lucky-Cherry.jpeg" text="Cherry and Lucky" width="500" />) 
              and two cats (<Link src="./images/Maomao-Xiaoju.jpeg" text="Maomao and Xiaoju" width="300" />)</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
