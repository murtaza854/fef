import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import { Heading1 } from '../../components';
import assembly from '../../assets/client/covid.jpg';
import './Covid.scss';

function Covid(props) {
    return (
        <div>
            <div className="padding-global-top-page-start"></div>
            <Container fluid className="our-story">
                <Row className="justify-content-end">
                    <Col lg={6}>
                        <div>
                            <Heading1 first="COVID-19 Relief Work" color="#4c483f" ></Heading1>
                            {/* <Heading2 first="The Beginning of Our Journey" color="#a8ce4c"></Heading2> */}
                            <p className="text-justify content-read">
                                Soon after our School Meal Program (SMP) was started on 4th of February 2020 we were hit by the novel Coronavirus. Though it had raised its ugly head sometime in late 2019 in China we, in Pakistan, got the first wave sometime in early part of 2020. As a result, the schools were shut down on 27th of February. The businesses were also shut down and the entire city of Karachi was locked down. The daily wage earners were most adversely affected as there was no work for them and without work they were down on their knees. The school, Pasban-e-millat, where we started our SMP is located in Orangi, which is located in the metropolitan of Karachi is the largest slum in the world where the population is severely disadvantaged in terms of their income levels and their living conditions.
                                <br /><br />
                                The impact of this sudden calamity on the families living around the adjoining school areas was unprecedented. A number of organizations and individuals sprung into action to help the affected. We, at FEF, decided to respond in whatever way we could. We put together 15-day ration packs for a family of 5 that included the basic food necessary for survival, viz, rice, flour, cooking oil, tea, and sugar. These packages were delivered to 600 families.
                            </p>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <img src={assembly} alt='assembly' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Covid;