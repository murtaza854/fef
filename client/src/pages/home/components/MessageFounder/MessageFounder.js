import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./MessageFounder.scss";
import founder from '../../../../assets/client/NaveedGilani.jpg';
import { Heading2, CustomButton1 } from '../../../../components'

function MessageFounder(props) {
    return (
        <div className="MessageFounder">
            <Container>
                <Row>
                    <Col lg={4} className="img-container">
                        <img src={founder} alt='founder' />
                    </Col>
                    <Col>
                        <h2 className="small-heading">Message from the Founder</h2>
                        <Heading2 first="Naveed Gilani" textTransform="uppercase" color="#e3aa58"></Heading2>
                        <p className="content-read">
                            Pakistan is considered to be the fifth largest young country in the world. Around 34% of Pakistanis are under the age of 15. It is they who have the power to transform the future of Pakistan. Correspondingly, it is us, the older ones, who have the responsibility to ensure that the youth can secure theirs, their families’, and their country’s future.
                        </p>
                        <p className="content-read">
                            <i>What ought to be done?</i> Invest in the <strong> health</strong> and <strong>education</strong> of our youth. It is not an either-or choice, has to be both, emphatically and in tandem. </p>
                        <CustomButton1 text="Read More" to="founder" classes="btn center-992 transparent-btn"></CustomButton1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MessageFounder;