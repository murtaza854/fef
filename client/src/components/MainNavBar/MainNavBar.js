import React from 'react';
import "./MainNavBar.scss";
import logo from '../../logo.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link
} from "react-router-dom";

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
      <Link to="/" className="navbartext">Home</Link>
      <Link to="/about" className="navbartext">About Us</Link>
      <Link to="/work" className="navbartext">Our Work</Link>
      <Link to="/network" className="navbartext">Our Network</Link>
      <Link to="/gallery" className="navbartext">Gallery</Link>
      <Link to="/news-events" className="navbartext">News and Events</Link>
      <Link to="/contact-us" className="navbartext">Contact Us</Link>
      <Link to="/donate" className="navbardonate">Donate Now</Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
    );
}

export default MainNavBar;