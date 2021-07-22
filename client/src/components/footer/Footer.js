import React from 'react';
import './Footer.scss'

function Footer(props) {
    return (
        <footer className="footer-distributed">
        <div className="footer-left">
          <h3>FEF <span>PAKISTAN</span></h3>
          <p className="footer-links">
            <a href="/" className="link-1">Home</a>
            {/* <a href="/about">About Us</a> */}
            {/* <a href="/work">Our Work</a> */}
            <a href="/network">Our Network</a>
            <a href="/news-events">News and Events</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact-us">Contact Us</a>
          </p>
          <p className="footer-company-name">Copyright © 2021 FEF</p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker" />
            <p><span>Office No 109-A, Office Wing Park Towers, Clifton</span>Karachi, Pakistan</p>
          </div>
          <div>
            <i className="fa fa-phone" />
            <p><span>+92 308 9602202</span></p>
          </div>
          <div>
            <i className="fa fa-envelope" />
            <p><a href="mailto:connect@fefpakistan.org">connect@fefpakistan.org</a></p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About FEF</span>
            The Fortify Education Foundation (FEF)* is a not-for-profit organization based in Karachi. We, at FEF, have set out to work for the economically disadvantaged Children in Pakistan. It is our goal to contribute towards ensuring mental and physical growth of our children in schools to enable them to protect their own and their family’s future. Through our School Meal Program (SMP), we have set out to provide nutrition sensitive meals for the children who are in school to learn and achieve.
          </p>
          <div className="footer-icons">
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/fefsmp"><i className="fab fa-facebook" /></a>
            <a rel="noreferrer" target="_blank" href="https://wa.me/+923089602202"><i className="fab fa-whatsapp" /></a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/fefsmp/"><i className="fab fa-instagram" /></a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;