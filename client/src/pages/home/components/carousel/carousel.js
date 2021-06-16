import React from 'react';
// import Slider from "react-slick";
// import Carousel from 'react-bootstrap/Carousel'
import "./carousel.scss"
import { Container } from 'react-bootstrap';
import { CustomButton1 } from '../../../../components';

function carousel(props) {
return (
  <Container className="home-main" fluid>
    
      <div className="main-btn">
      <CustomButton1 text="Learn More" classes="btn transparent-btn center"></CustomButton1>
      </div>
    
  </Container>
//   <Carousel fade>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={img}
//       alt="First slide"
//       style={{zIndex:"-2"}}
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Second slide&bg=282c34"
//       alt="Second slide"
//     />

//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Third slide&bg=20232a"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
);
}

export default carousel;