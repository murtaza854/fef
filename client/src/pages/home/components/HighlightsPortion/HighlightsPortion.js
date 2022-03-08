import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./HighlightsPortion.scss";
import { Heading1, CustomButton1, ImageTextCenter } from '../../../../components';
import api from '../../../../api';

function HighlightsPortion(props) {
    const [highlights, setHighlights] = React.useState([]);
    const [bullets, setBullets] = React.useState([]);

    React.useEffect(() => {
        async function getHighlights() {
            try {
                const response = await fetch(`${api}/admin/get-highlights`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-store'
                    },
                });
                const data = await response.json();
                const high = data.highlights.split('\n');
                const bullet = data.bullets.split('\n');
                setHighlights(high);
                setBullets(bullet);
            } catch (error) {
            }
        }
        getHighlights();
    }, []);

    return (
        <div className="HighlightsPortion">
            <Container fluid>
                <Row>
                    <Col className="lefthighlights" md={6}>
                        <Heading1 first="Highlights" color="#4c483f" />
                        <p className="content-read sixtywidth">
                            {/* The School Meal Program (SMP) is the raison d'être for FEF. Everything that we are presently doing or will do in the future under our banner will be built upon the foundation of our SMP. Through this program we provide freshly cooked nutritious meals to children in schools on every school day. Our overarching aim is to improve the cognitive and physical health of the children. Some of the benefits of the SMP are: */}
                        {
                            highlights.map((text, index) => {
                                return <span key={index}>{text}<br /></span>
                            }
                            )
                        }
                            <ul style={{ marginTop: '1rem', textAlign: 'left' }}>
                                {
                                    bullets.map((text, index) => {
                                        return <li key={index}>{text}</li>
                                    })
                                }
                                {/* <li>Prevention of classroom hunger</li>
                                <li>Increase in enrolment in schools</li>
                                <li>Increase in attendance in schools</li>
                                <li>Reducing malnutrition among children in schools</li> */}
                            </ul>
                        </p>
                        {/* <Row className="justify-content-between">
                        <Col classname="big-info">
                            <p className="big-info-text">40% </p>
                            <p className="big-info-text2">Lorem Ipsum </p>
                        </Col>
                        <Col classname="big-info">
                            <p className="big-info-text">400K </p>
                            <p className="big-info-text2">Lorem Ipsum</p>
                        </Col>
                        <Col classname="big-info">
                            <p className="big-info-text">5M</p>
                            <p className="big-info-text2">Lorem Ipsum</p>
                        </Col>
                    </Row> */}

                        <CustomButton1 to="school-meal-program" text="Read More" classes="btn colored-btn center" />
                    </Col>
                    <Col md={6} className="righthighlights"><iframe className="youtube-video" src="https://www.youtube.com/embed/9fx8XAN2tzQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Col>
                </Row>
            </Container>
            <Container fluid className="fourimages">
                <Row>
                    <Col md={3} sm={6}>
                        <ImageTextCenter flag={true} img={'/images/DSC_1623-min.JPG'} />
                    </Col>
                    <Col md={3} sm={6}>
                        <ImageTextCenter flag={true} img={'/images/DSC_1609-min.JPG'} />
                    </Col>
                    <Col md={3} sm={6}>
                        <ImageTextCenter flag={true} img={'/images/DSC_1625-min.JPG'} />
                    </Col>
                    <Col md={3} sm={6}>
                        <ImageTextCenter flag={true} img={'/images/DSC_1631-min.JPG'} />
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default HighlightsPortion;