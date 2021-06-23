import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {ReactComponent as Calendar} from '../../../../assets/client/calendar.svg'
import {ReactComponent as Gallery} from '../../../../assets/client/gallery.svg';
import {ReactComponent as Help} from '../../../../assets/client/help.svg';
import { CustomButton1, Heading2 } from '../../../../components'
import './FuturePortion.scss'

function FuturePortion(props) {
    return (
        <div className="futurePortion">
            <Container>
                <Row>
                    <Col md={6}>
                        <Heading2 first="They are" second="the future" textTransform="uppercase" color="#4c483f"></Heading2>
                        <div className="info">
                            <p className="content-read">
                                In Pakistan 40.2% of children under five are currently stunted according to the National Nutrition Survey (a prevalence considered 'critical' by WHO's thresholds)
                            </p>
                            <CustomButton1 to="work" text="Donate Now" classes="btn colored-btn center"></CustomButton1>
                        </div>
                    </Col>
                    <Col className="section2">
                        <Row>
                            <Col md = {3}>
                                <Help  fill = "#e38454" width ="100" height = "100"/>
                            </Col>
                            <Col>
                                <div className="basichead">
                                    GET INVOLVED
                                </div>
                                <p className="content-read">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Col>
                        </Row>
                        <Row className="rowicons">
                            <Col md = {3}>
                                <Gallery  fill = "#a8ce4c" width ="100" height = "100"/>
                            </Col>
                            <Col>
                                <div className="basichead">
                                    GALLERY
                                </div>
                                <p className="content-read">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md = {3}>
                                <Calendar  fill = "#e3aa58" width ="100" height = "100"/>
                            </Col>
                            <Col>
                                <div className="basichead">
                                    NEWS & EVENTS
                                </div>
                                <p className="content-read">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FuturePortion;