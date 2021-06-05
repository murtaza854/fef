import React from 'react';
import "./ThreeImages.scss"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import assembly from '../../../../assets/client/Assembly.jpg';
import eating from '../../../../assets/client/Eating.jpg';
import st_class from '../../../../assets/client/Class.jpg';

function ThreeImages(props) {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="zeropadding">
                    <img src={assembly} className="imagebw"/>
                    <div className='imgtext'>Donate in
Support Fund</div>
                    </Col>
                    
                    <Col className="zeropadding">
                    <img src={st_class} className="imagebw"/>
                    <div className='imgtext'>Support a
Classroom</div>
                    </Col>
                    
                    <Col className="zeropadding">
                    <img src={eating} className="imagebw"/>
                    <div className='imgtext'>Support a Child’s
Meal</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ThreeImages;