import React from 'react';
import "./MainNavBar.scss";
import logo from '../../logo.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function MainNavBar(props) {
    return (
        <div className="mainnavbar">
        <Navbar bg="transparent" expand="lg" className = "navbar">
  <Navbar.Brand href="/" 
        className = "navbarlogo"><img
        alt=""
        src={logo}
        width="100"
        height="100"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/" className="navbartext">Home</Nav.Link>
      <Nav.Link href="/about" className="navbartext">About Us</Nav.Link>
      <Nav.Link href="/work" className="navbartext">Our Work</Nav.Link>
      <Nav.Link href="/network" className="navbartext">Our Network</Nav.Link>
      <Nav.Link href="/gallery" className="navbartext">Gallery</Nav.Link>
      <Nav.Link href="/news-events" className="navbartext">News and Events</Nav.Link>
      <Nav.Link href="/contact-us" className="navbartext">Contact Us</Nav.Link>
      <Nav.Link href="#link" className="navbardonate">Donate Now</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
    );
}

export default MainNavBar;