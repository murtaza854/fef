import React from 'react';
import "./ThreeImages.scss"
import assembly from '../../../../assets/client/Assembly.jpg';
import eating from '../../../../assets/client/Eating.jpg';
import st_class from '../../../../assets/client/Class.jpg';
import {ImageTextCenter} from '../../../../components'
import { Col, Container, Row } from 'react-bootstrap';
function ThreeImages(props) {
    return (
        <div className="threeimages">
            <Container fluid>
                <Row>
                    <Col>
                    <ImageTextCenter img = {assembly} msg = "Donate in Support Fund" color = "orange"/>
                    </Col>
                    <Col>
                    <ImageTextCenter img = {st_class} msg = "Support a Classroom" color = "darkorange"/>
                    </Col>
                    <Col>
                    <ImageTextCenter img = {eating} msg = "Support a Child's Meal" color = "green"/>
                    </Col>
                    
                </Row>
            </Container>
            
        </div>
    );
}

export default ThreeImages;