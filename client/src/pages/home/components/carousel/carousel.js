import React from 'react';
// import Slider from "react-slick";
// import Carousel from 'react-bootstrap/Carousel'
import "./carousel.scss"
import { Container } from 'react-bootstrap';
import { CustomButton1 } from '../../../../components';
import Row from 'react-bootstrap/Row';
import CountUp from 'react-countup';
function carousel(props) {
  return (
    <div>
      <Container className="home-main" fluid>
        <div className="meal-counter meal-counter-first">
          <div className="meal-count">
            <Row className="meals-number">
              <CountUp delay={0.75} separator="," end={51143} />
            </Row>
            <Row className="meals-message-1">
              Meals Served Since Inception
            </Row>
            <Row className="meals-message-2">
              As of 21 September 2021
            </Row>
          </div>
        </div>
        <div className="main-btn">
          {/* Counter incrementing to 1000 */}

          <CustomButton1 to="school-meal-program" text="Learn More" classes="btn colored-btn center"></CustomButton1>

        </div>

      </Container>
        <div className="meal-counter meal-counter-second">
          <div className="meal-count">
            <Row className="meals-number">
              <CountUp delay={0.75} separator="," end={51143} />
            </Row>
            <Row className="meals-message-1">
              Meals Served Since Inception
            </Row>
            <Row className="meals-message-2">
              As of 21 September 2021
            </Row>
          </div>
        </div>
    </div>
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