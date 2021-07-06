import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import { Heading1, CustomButton1 } from '../../../../components';
import './DonateMeal.scss'

function DonateMeal(props) {
    return (
        <Container fluid className="donateMeal">
            <Row className="Donate-a-meal-work justify-content-center">
                <Col md={5} className="donate-heading-work">
                    <Heading1 textTransform="uppercase" first="Donate A Meal," second="Brighten a Future" color="#4C483F"></Heading1>
                </Col>
                <Col md={2} className="donate-button-work">
                    <CustomButton1 to="donate" classes="btn colored-btn" text="Donate Now"></CustomButton1>
                </Col>
            </Row>
        </Container>
    );
}

export default DonateMeal;