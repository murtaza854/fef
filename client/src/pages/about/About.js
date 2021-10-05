import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Heading1, Heading2, Heading3 } from '../../components';
import assembly from '../../assets/client/aboutPage.jpg';
import './About.scss';

function About(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <div className="padding-global-top-page-start"></div>
            <Container fluid className="our-story">
                <Row className="justify-content-end">
                    <Col lg={6}>
                        <div>
                            <Heading1 first="Profile" color="#4c483f" ></Heading1>
                            <Heading2 first="Fortify Education Foundation" color="#a8ce4c"></Heading2>
                            <p className="text-justify content-read">
                                The <strong>Fortify Education Foundation (FEF)*</strong> is a not-for-profit organization based in Karachi. We, at FEF, have set out to work for the economically disadvantaged Children in Pakistan. It is our goal to contribute towards ensuring mental and physical growth of our children in schools to enable them to protect their own and their family’s future. Through our <strong>School Meal Program (SMP)</strong>, we have set out to provide nutrition sensitive meals for the children who are in school to learn and achieve.
                            </p>
                            <Heading3 first="Our Vision" color="#4c483f"></Heading3>
                            <p className="text-justify content-read">To Improve child learning by eradicating malnutrition and hunger in schools.</p>
                            <Heading3 first="Our Mission" color="#4c483f"></Heading3>
                            <p className="text-justify content-read">Leave No Child Behind.</p>
                            <Heading3 first="Our Credentials" color="#4c483f"></Heading3>
                            <p className="text-justify content-read">FEF was registered under the Societies Registration Act, XXI of 1860, on 18th day of September 2020, with registration number: KAR N0. 004 of 2020-21.</p>
                            <p className="text-justify content-read"><strong>Income tax registration no.:</strong> A063121</p>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <img src={assembly} alt='assembly' />
                    </Col>
                </Row>
                <Row className="justify-content-end">
                    <Col lg={11}>
                        <div>
                            <Heading3 first="Bank Details" color="#4c483f"></Heading3>
                            <p className="text-justify content-read">
                            Habib Metropolitan Bank<br />
                            AC #: 6-01-46-20301-714-128531<br />
                            Khayaban-e-Tanzeem Branch<br />
                            C-2-C, Khayaban–e-Tanzeem, Phase 5, DHA
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;