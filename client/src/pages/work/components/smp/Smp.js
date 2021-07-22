import React from 'react';
import './Smp.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import { Heading1, Heading2 } from '../../../../components';

function Smp(props) {
    return (
        <Container fluid className="smp">
        <Row className="justify-content-end">
            <Col md={6} className="global-text-col">
                <Heading1 first="School Meal Program (SMP)" color="#4C483F"></Heading1>
                <Heading2 first="What is SMP ?" color="#A8CE4C"> </Heading2>
                <p className="content-read">
                The School Meal Program (SMP) is the raison d'être for FEF. Everything that we are presently doing or will do in the future under our banner will be built upon the foundation of our SMP. Through this program we provide freshly cooked nutritious meals to children in schools on every school day. Our overarching aim is to improve the cognitive and physical health of the children. Some of the benefits of the SMP are:
                <ul style={{marginTop: '1rem'}}>
                    <li>Prevention of classroom hunger</li>
                    <li>Increase in enrolment in schools</li>
                    <li>Increase in attendance in schools</li>
                    <li>Reducing malnutrition among children in schools</li>
                </ul>
                Our program started in February 2020 at Pasban-e-millat school located in Orangi Town, Karachi. At the time there were 260 children attending the school.
                </p>
                <p className="content-read">
                In developing our School Meal Program, we studied Pakistan’s Dietary Guidelines for Better Nutrition which were developed by WHO (World Health Organization) and the Government of Pakistan in May 2018. At the same time, we also looked at similar programs in other parts of the world. In determining the meal menu, we had to consider the local dietary habits of the children in our target ages and of course cost of the meal had a significant impact in deciding what to deliver. As we move forward, we will continue to tweak the meal menus to improve its nutritional value and the cost of the meal. 
                </p>
            </Col>
            <Col md={5} className="global-space-col"></Col>
        </Row>
    </Container>
    );
}

export default Smp;