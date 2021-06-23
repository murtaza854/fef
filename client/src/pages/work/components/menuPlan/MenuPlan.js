import React from 'react';
import './MenuPlan.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import { Heading2 } from '../../../../components';

function MenuPlan(props) {
    return (
        <Container fluid className="menuPlan">
            <Row className="justify-content-end">
                <Col md={6} className="global-text-col">
                    <Heading2 first="SMP Menu Plan" color="#A8CE4C"></Heading2>
                    <p className="content-read">
                        Following are the various menus that are served on a typical school day.
                    </p>
                    <div id="demobox">
                        <p className="content-read">
                            <span className="content-read-heading">Monday - Thursday</span>
                            <br />
                            Chickpeas and Rice/Biryani*
                            <br />
                            Seasonal Vegetable with Naan**
                            <br />
                            Daal^ and Rice
                            <br />
                            Chicken Biryani
                            <br />
                            Chicken Curry with Naan
                            <br />
                            Potatoes with Seasonal Vegetables and Rice <br />
                            Potato Biryani <br /> Daal and Vegetables with Rice <br /> Paratha^^ and Egg Omelette
                        </p>

                        <p className="content-read">
                            <span className="content-read-heading">Friday</span>
                            <br />
                            Seasonal Fruit and Boiled Egg
                        </p>
                    </div>
                    <p className="small-text margin-bottom-work margin-top-work">
                        *Biryani is a mixed rice dish with various spices and can be made with meat and or vegetables <br />
                        **Naan is a bread usually made up of wheat and cooked in clay oven<br />
                        ^Lentils/pulses of various types<br />
                        ^^paratha is flat bread made of wheat and cooked in vegetable oil or ghee (clarified butter)

                    </p>
                </Col>
                <Col md={5} className="global-space-col"></Col>
            </Row>
        </Container>
    );
}

export default MenuPlan;