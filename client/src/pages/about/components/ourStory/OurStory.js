import React from 'react';
import { CustomButton1, Heading1, Heading2 } from '../../../../components'
import { Col, Container, Row } from 'react-bootstrap';
import './Ourstory.scss';
import assembly from '../../../../assets/background1.jpg';

function OurStory(props) {
    return (
        <Container fluid className="OurStory">
            <Row>
                <Col className="global-padding-left" md={6}>
                    <Heading1 first="Our Story" color="#4c483f"></Heading1>
                    <Heading2 first="The Beginning of Our Journey" color="#a8ce4c"></Heading2>
                    <p className="content-read text-justify">
                    It began with a casual reading of an old Harvard Business School’s case study
on combatting hunger in classrooms in India. The combater: Akshay Patra Foundation.
Their weapon: mid-day meals for children in schools. It triggered a thought chain
that flashed images of taat schools* in Pakistan, malnourished children, poverty,
squalid living, little promise, overall haplessness. Having been brought up as a relatively
privileged child over half a century ago I somehow felt guilty. Could we, the haves,
do something about it? And, that was the kernel which sprouted Fortify Education
Foundation (FEF). Commodore Rashidullah Sheikh and I discussed and agreed
that now was the best time to start. Pasban-e-millat school in Orangi town,
Karachi serves the truly disadvantaged children of this metropolis where
we lived; it had upwards of 260 children on their roll; Rashidullah already supported it;
that’s where we started our School Meal Program in February 2020.
We knew that we would not be able to sustain it without external funds,
so we reached out to family and friends. Lo and behold our faith in the goodness
of people was reaffirmed; we got funds and we have friends who have gladly joined us
on this journey that will, in time, take us to all the schools for disadvantaged children.
                    </p>
                    <p className="short-text">*Schools where no furniture exists and children sit on straw mats.</p>
                    <CustomButton1 text="JOIN OUR JOURNEY" classes="btn colored-btn center"></CustomButton1>
                </Col>
                <Col className="img-cont" md={6}>
                    <img src={assembly} alt='assembly'/>
                </Col>
            </Row>
        </Container>
    );
}

export default OurStory;