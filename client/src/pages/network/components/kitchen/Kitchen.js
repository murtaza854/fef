import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Heading1, Heading2 } from '../../../../components';
// import kitchen from 'D:/fef/client/src/assets/client/kitchen.png';
import KitchenPic from '../../../../assets/client/kitchen.png';
import './Kitchen.scss';

function Kitchen(props) {


    return (
        <div className="kitchen-component">
            <Container fluid className="kitchen">
                <Row className="justify-content-end">
                    <Col md={6} className="global-text-col">
                        <Heading1 first="Our Network" color="#4C483F"></Heading1>
                        <Heading2 first="Our First Kitchen" color="#A8CE4C"> </Heading2>
                        <p className="content-read">
                            When we first thought of starting our meal program, we had contemplated making a formal kitchen first before we started our program. Our second thought was to outsource the preparation of meals. This would mean that our limited allocated funds would start feeding the children directly from day one. Unfortunately, the cost per meal for outsourced meals was much higher than we had anticipated. So, we decided to go with a minimum investment model by cooking the meals in the house of the administrator living next to the school. All we needed was a couple of burners and cooking utensils. That’s how we started.
                        </p>

                        {/* <br />
                            <br /> */}
                        <div className="leave-a-line"></div>
                        <p className="content-read">

                            Our first meal was served on 4th February 2020 cooked in this makeshift kitchen.
                        </p>
                        <p className="content-read">
                            <div className="leave-a-line"></div>
                            Seeing the food on the plate of a child actualized the thought of providing nutritious meals to the disadvantaged school children. It was indeed a happy moment for all of us involved.
                        </p>
                        <p className="content-read">
                            <div className="leave-a-line"></div>
                            We still had to construct a kitchen which we did in the next few months. The plan was drawn, and construction started.
                        </p>
                        <img src={KitchenPic} alt="Our kitchen map" />

                        <p className="content-read">
                        <div className="leave-a-line"></div>
                        The construction was completed in August 2020 and from there on all meals served were cooked in the new kitchen. This kitchen has the capacity to make food for many more schools and will be the hub of our program in Orangi. This is the first of many kitchens that will be made in the coming years as our operations expand. Surely, we will improve our processes for preparing the meals and the logistics needed to provide meals to the many schools in the area.
                        </p>


                    </Col>
                    <Col md={5} className="global-space-col">
                    </Col>
                </Row>
                <Row className="justify-content-end">
                    <Col md={7} className="global-text-col">
                        <p className="content-read">

                        </p>

                    </Col>
                    <Col md={5} className="global-space-col"
                    ></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Kitchen;