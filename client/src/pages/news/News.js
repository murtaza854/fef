import React, { useEffect } from 'react';
import { InfoCard2 } from '../home/components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './News.scss'

function News(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <div  className="news">
            <div className="padding-global-top-page-start"></div>
            <Container fluid>
                    <Row className="justify-content-left">
                        <Col md={4}>
                            <div className="card-center">
                                <InfoCard2/>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="card-center">
                                <InfoCard2/>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="card-center">
                                <InfoCard2/>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="card-center">
                                <InfoCard2/>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="card-center">
                                <InfoCard2/>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="card-center">
                                <InfoCard2/>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="card-center">
                                <InfoCard2/>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="card-center">
                                <InfoCard2/>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="card-center">
                                <InfoCard2/>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
}

export default News;