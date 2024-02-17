import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './component-css/NavBar.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" className='transparent-nav-bar' sticky='top'>
      <Container fluid>
        <Navbar.Brand href="#home" >Yihao Mai</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#aboutme">About Me</Nav.Link>
                <Nav.Link href="#project">Project</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar