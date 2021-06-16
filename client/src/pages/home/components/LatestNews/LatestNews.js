import React from 'react';
import "./LatestNews.scss";
import { Heading1} from '../../../../components';
// import CardDeck from 'react-bootstrap/CardDeck';
import {InfoCard2} from '../../components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function LatestNews(props) {
    return (
        <div className="LatestNews">
            <div className="indented">
            <p className="content-read bigger-text"> What's New </p>
            <Heading1 first = "READ OUR LATEST NEWS" color = "#4C483F"/>
            </div>
            <div>
                <Container fluid>
                    <Row>
                        <Col><InfoCard2/></Col>
                        <Col><InfoCard2/></Col>
                        <Col><InfoCard2/></Col>
                    </Row>
                </Container>
            {/* <CardDeck>
                <InfoCard2/>
                
                <InfoCard2/>
                <InfoCard2/>
            </CardDeck> */}
            </div>
            
        </div>
    );
}

export default LatestNews;