import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {ReactComponent as Calendar} from '../../../../assets/client/calendar.svg'
import {ReactComponent as Gallery} from '../../../../assets/client/gallery.svg';
import {ReactComponent as Help} from '../../../../assets/client/help.svg';

function FuturePortion(props) {
    return (
        <div className="test">
                <Container>
                    <Row>
                        <Col md={6}>
                        <div className="head">
                            THEY ARE 
                            <br/>
                            THE FUTURE
                        </div>
                        <div className="info">
                        In Pakistan 40.2% of children under five are currently stunted according to the National Nutrition Survey (a prevalence considered 'critical' by WHO's thresholds)
                        <div className="donate">
                        <div>Donate Now</div>
                        </div>
                            
                        </div>
                        
                        </Col>
                        <Col>
                        <Row>
                            <Col md = {3}>
                            
                        <Help  fill = "#e38454" width ="100" height = "100"
                            />
                            </Col>
                            <Col>
                            <div className="basichead">
                            GET INVOLVED
                        </div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Col>
                        </Row>
                        <Row className="rowicons">
                        <Col md = {3}>
                        <Gallery  fill = "#a8ce4c" width ="100" height = "100"
                            />
                            </Col>
                            <Col>
                            <div className="basichead">
                            GALLERY
                        </div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Col>
                        </Row>
                        <Row>
                        <Col md = {3}>
                        <Calendar  fill = "#e3aa58" width ="100" height = "100"
                            />
                            </Col>
                            <Col>
                            <div className="basichead">
                            NEWS & EVENTS
                        </div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
    );
}

export default FuturePortion;