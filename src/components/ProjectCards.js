import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './component-css/ProjectCards.css';
import { Container } from 'react-bootstrap';
const ProjectCards = () => {
  return (
    <Container id='project'>
    <h1>Projects & Experiences</h1>
    <hr/>
    <Row className="justify-content-md-center my-4">
        <Col>
            <Card>
                <Card.Img variant="top" src="./images/Swift-Label-Matcher-1.jpeg" />
                <Card.Img variant="top" src="./images/Swift-Label-Matcher-2.jpeg" />
                <Card.Body>
                    <Card.Title>Swift Label Matcher</Card.Title>
                    <Card.Text>
                        A Python desktop app that uses PyMuPDF and CUPS libraries to allow e-commerce retailers to automatically match and print shipping labels using only the product IDs.
                    </Card.Text>
                    <a href="https://github.com/Ma1h01/Swift-Label-Matcher" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" color='black'/>
                    </a>
                 </Card.Body>   
            </Card>
        </Col>

        <Col>
            <Card>
                <Card.Img variant="top" src="./images/Dungeon-Game-Home.jpeg" />
                <Card.Img variant="top" src="./images/Dungeon-Game-Play.jpeg" />
                <Card.Body>
                    <Card.Title>2D Dungeon Game</Card.Title>
                    <Card.Text>
                        A 2D Android dungen game eagages players to explore and fight in a procedurally generated map, featuring AI enemies, 
                        collision detection, and combat system. Built with Java in Android Studio. 
                    </Card.Text>
                    <a href="https://github.com/Ma1h01/CS2340C_Team29" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" color='black'/>
                    </a>
                 </Card.Body>   
            </Card>
        </Col>

        <Col>
            <Card>
                <Card.Img variant="top" src="./images/CS-Quiz-Home.jpeg" />
                <Card.Img variant="top" src="./images/CS-Quiz.jpeg" />
                <Card.Body>
                    <Card.Title>CS Quiz Generator</Card.Title>
                    <Card.Text>
                        A full-stack web app that allows users to practice multiple-choice questions and receive instant feedback as well as
                        modfiy the question bank. Built with React, Spring Boot, and MySQL.
                    </Card.Text>
                    <a href="https://github.com/Ma1h01/quiz-app-back" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" color='black'/>
                    </a>
                 </Card.Body>   
            </Card>
        </Col>
    </Row>

    <Row>
        <Col>
            <Card>
                <Card.Img variant="top" src="./images/LC-2200.jpeg" />
                <Card.Body>
                    <Card.Title>LC-2200 Datapath</Card.Title>
                    <Card.Text>
                        A 32-bit RISC processor with a 5-stage pipeline, featuring a complete datapath and control unit, and is able to perform basic computation
                        and data storage, and loop execution. Built in CircuitSim and tested with assembly code.
                    </Card.Text>
                    <a href="https://github.com/Ma1h01/LC-2200-With-Interrupt" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" color='black'/>
                    </a>
                 </Card.Body>   
            </Card>
        </Col>
    </Row>
    </Container>
  )
}

export default ProjectCards