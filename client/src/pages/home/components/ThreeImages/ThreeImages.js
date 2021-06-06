import React from 'react';
import "./ThreeImages.scss"
import assembly from '../../../../assets/background1.jpg';
import eating from '../../../../assets/client/Eating.jpg';
import st_class from '../../../../assets/admin/background2.jpg';
import {ImageTextCenter} from '../../../../components'
import { Col, Container, Row } from 'react-bootstrap';
function ThreeImages(props) {
    return (
        <div className="threeimages">
            <Container fluid>
                <Row>
                    <Col>
                    <ImageTextCenter img={assembly} first="Donate in" second="Support Fund" color="#e3aa58"/>
                    </Col>
                    <Col>
                    <ImageTextCenter img={st_class} first="Support a" second="Classroom" color="#e38454"/>
                    </Col>
                    <Col>
                    <ImageTextCenter img={eating} first="Support a Child's" second="Meal" color="#a8ce4c"/>
                    </Col>
                    
                </Row>
            </Container>
            
        </div>
    );
}

export default ThreeImages;