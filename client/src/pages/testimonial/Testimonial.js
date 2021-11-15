import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import { Heading1, Heading3 } from '../../components';
import assembly from '../../assets/client/testimonial.jpg';

function Testimonial(props) {
    return (
        <div>
            <div className="padding-global-top-page-start"></div>
            <Container fluid className="our-story">
                <Row className="justify-content-end">
                    <Col lg={4}>
                        <div>
                            <Heading1 first="Testimonial" color="#4c483f" ></Heading1>
                            <Heading3 first="Translation" color="#a8ce4c"></Heading3>
                            <p className="text-justify content-read">
                                Our school is located in an economically underprivileged area of Orangi. We have been in operation for the last 20 years. In February of 2020, FEF (Fortify Education Foundation) started their School Meal Program at our school. This program endeavors to provide nutrition to the children in schools through freshly prepared meals every single school day.
                                <br /><br />
                                We are grateful to FEF for initiating their program from our school as this is the only school in the area where lunch is being provided. We feel that because of this program the enrollment in our school has increased from 250 students when the program was started to 290 students today.
                                <br /><br />
                                FEF has also constructed a kitchen for this purpose at our school where the space was provided by us. We are proud to be part of this program. FEF plans to expand the program to other schools in the area by providing meals cooked at the kitchen in our school.
                                <br /><br />
                                We hope that the school meal program is continued and we will continue to be part of it in its expansion to other schools.
                                <br /><br />
                                - Yahya
                            </p>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <img src={assembly} alt='assembly' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Testimonial;