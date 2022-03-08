import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ReactComponent as Calendar } from '../../../../assets/client/calendar.svg'
import { ReactComponent as Gallery } from '../../../../assets/client/gallery.svg';
import { ReactComponent as Help } from '../../../../assets/client/help.svg';
import { CustomButton1, Heading1 } from '../../../../components'
import './FuturePortion.scss'
import { Link } from 'react-router-dom';
import api from '../../../../api';

function FuturePortion(props) {
    const [futureText, setFutureText] = React.useState('');
    const [getInvolvedText, setGetInvolvedText] = React.useState('');
    const [galleryText, setGalleryText] = React.useState('');
    const [newsEventsText, setNewsEventsText] = React.useState('');

    React.useEffect(() => {
        async function getFutureText() {
            try {
                const response = await fetch(`${api}/admin/get-future-text`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-store'
                    },
                });
                const data = await response.json();
                setFutureText(data.futureText);
                setGetInvolvedText(data.getInvolvedText);
                setGalleryText(data.galleryText);
                setNewsEventsText(data.newsEventsText);
            } catch (error) {
            }
        }
        getFutureText();
    }, []);

    return (
        <div className="futurePortion">
            <Container>
                <Row >
                    <Col md={6} className="Textcol">
                        <Heading1 first="They are" second="the future" textTransform="uppercase" color="#4c483f"></Heading1>
                        <div className="info">
                            <p className="content-read future-text">
                                {/* In Pakistan 40.2% of children under five are currently stunted according to the National Nutrition Survey (a prevalence considered 'critical' by WHO's thresholds) */}
                                {futureText}
                            </p>
                            <CustomButton1 to="donate" text="Donate Now" classes="btn colored-btn center"></CustomButton1>
                        </div>
                    </Col>
                    <Col className="section2">
                        <Row className="top-feature">
                            <Col md={3}>
                                <Link to="/school-meal-program">
                                    <Help fill="#e38454" width="100" height="100" />
                                </Link>
                            </Col>
                            <Col >
                                <div className="basichead">
                                    GET INVOLVED
                                </div>
                                <p className="content-read">
                                    {/* Find out about how we ensure a proper diet for these children and provide your input as well. */}
                                    {getInvolvedText}
                                </p>
                            </Col>
                        </Row>
                        <Row className="rowicons">
                            <Col md={3}>
                                <Link to="/gallery">
                                    <Gallery fill="#a8ce4c" width="100" height="100" />
                                </Link>
                            </Col>
                            <Col>
                                <div className="basichead">
                                    GALLERY
                                </div>
                                <p className="content-read">
                                    {/* Head to our gallery and look at some of the images we took of these amazing children. */}
                                    {galleryText}
                                </p>
                            </Col>
                        </Row>
                        <Row >
                            <Col md={3}>
                                <Link to="/news-events">
                                    <Calendar fill="#e3aa58" width="100" height="100" />
                                </Link>
                            </Col>
                            <Col>
                                <div className="basichead">
                                    NEWS & EVENTS
                                </div>
                                <p className="content-read">
                                    {/* Read our newsletters to understand how we help these children. */}
                                    {newsEventsText}
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FuturePortion;