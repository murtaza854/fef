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
      <Nav.Link href="#link" className="navbartext">Our Network</Nav.Link>
      <Nav.Link href="#link" className="navbartext">Our Sponsors</Nav.Link>
      <Nav.Link href="#link" className="navbardonate">Donate Now</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
    );
}

export default MainNavBar;