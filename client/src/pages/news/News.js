import React, { useEffect } from 'react';
import { InfoCard2 } from '../home/components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './News.scss'
import { Heading1 } from '../../components';
function News(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="news">
            <div className="padding-global-top-page-start"></div>
            <Row className="justify-content-end">
                <Col md={6} className="global-text-col">
                    <Heading1 first="News and Events" color="#4C483F" />
                </Col>
                <Col md={5} className="global-space-col">
                </Col>
            </Row>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col md={12}>
                    </Col>
                </Row>
                <Row className="justify-content-left">
                    <Col md={3}>
                        <InfoCard2 cat="Children" url="/news-events/impact-update" previewText="A few nights ago (9th March) I watched Dawn TV’s show Newseye. The discussion subject was off the beaten political track but spot-on FEF’s heart – child malnutrition in Pakistan. The stats shared by participants were quite damning for a country which has 80 million children. It further drove..." title="We are Doing the Best we Can" img={'https://mcusercontent.com/e71596f41719a271af28590c3/images/dd7aaa35-2d5a-4b96-af6f-446dcd2497bf.jpg'} />
                    </Col>
                    <Col md={3}>
                        <InfoCard2 cat="Children" url="/news-events/new-school-kitchen" previewText="Hope all of you are doing well and staying safe from the calamity of this novel virus, Covid-19. Since March 2020 it has had a major impact on education by interrupting the normal functioning of the schools. While we read and heard about the education being imparted online..." title="New School Kitchen" img={'/images/DSC_1561-min.JPG'} />
                    </Col>
                    <Col md={3}>
                        <InfoCard2 cat="Assembly" url="/news-events/defeat-classroom-hunger" previewText="From the wisdom of the sages of the world, to the collective sense of the world body, the United Nations, we know that if we want to build the future of the world we must invest in the youth. The best time to invest in them was 20 years ago. The second-best time is now...." title="Defeat Classroom Hunger" img={'/images/DSC_1567-1-min-3.jpg'} />
                    </Col>
                    <Col md={3}>
                        <InfoCard2 cat="Case" url="/news-events/school-meal-programme" previewText="According to the National Human Development Report for Pakistan published in 2017 by the UNDP (United Nations Development Programme), Pakistan has the largest population of young people ever recorded in its history. A whopping 64% are under the age of 29, with some 30% between the ages of 15 and 29. For at least the next three decades, Pakistan will continue...." title="School Meal Programme" img={'/images/Covernewpic-1.jpg'} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default News;