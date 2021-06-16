import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import assembly from '../../../../assets/background1.jpg';
import "./HighlightsPortion.scss";
import { Heading1, CustomButton1, ImageTextCenter } from '../../../../components';
function HighlightsPortion(props) {
    return (
        <div className="HighlightsPortion">
            <Container fluid>
                <Row>
                    <Col className="lefthighlights" md={6}>
                    <Heading1 first="Highlights" />
                    <p className="content-read sixtywidth">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor i
                        ncididunt ut labore et dolore magna aliqua
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
                    <div className="row justify-content-between">
                        <div className="col-4">
                            <p className="big-info-text">40% </p>
                            <p className="big-info-text2">Lorem Ipsum </p>
                        </div>
                        <div className="col-4">
                            <p className="big-info-text">400K </p>
                            <p className="big-info-text2">Lorem Ipsum</p>
                        </div>
                        <div className="col-4">
                            <p className="big-info-text">5M</p>
                            <p className="big-info-text2">Lorem Ipsum</p>
                        </div>
                    </div>
                    <CustomButton1 text="Donate Now" classes = "btn colored-btn center"/>
                    </Col>
                    <Col md={6} className="righthighlights"><iframe className="youtube-video" src="https://www.youtube.com/embed/tsJXoqvmgzM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Col>
                </Row>
            </Container>
            <Container fluid className="threeimages">
                <Row>
                    <Col>
                    <ImageTextCenter img={assembly} />
                    </Col>
                    <Col>
                    <ImageTextCenter img={assembly} />
                    </Col>
                    <Col>
                    <ImageTextCenter img={assembly} />
                    </Col>
                    <Col>
                    <ImageTextCenter img={assembly} />
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
}

export default HighlightsPortion;