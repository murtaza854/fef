import React, { useEffect } from 'react';
import { Heading1 } from '../../components'
import { Col, Container, Row } from 'react-bootstrap';
import founder from '../../assets/client/NaveedGilani.jpg';
import './Founder.scss'

function Founder(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="padding-global-top-page-start"></div>
            <Container fluid className="founder">
                <Row className="justify-content-end">
                    <Col lg={6}>
                        <div>
                            <Heading1 first="Message from Founder" color="#4c483f" ></Heading1>
                            <p className="text-justify content-read">
                                Pakistan is considered to be the fifth largest young country in the world. Around 34% of
                                Pakistanis are under the age of 15. It is they who have the power to transform the future of
                                Pakistan. Correspondingly, it is us, the older ones, who have the responsibility to ensure that
                                the youth can secure theirs, their families’, and their country’s future.
                            </p>
                            <p className="text-justify content-read">
                                <i>What ought to be done?</i> Invest in the <strong>health</strong> and <strong>education</strong> of our youth. It is not an either-or choice, has to be both, emphatically and in tandem.
                            </p>
                            <p className="text-justify content-read">
                                <i>What could we do to help?</i> Well, we decided to invest our time, resources, and energies to try and eradicate the much-neglected hunger and malnutrition among children in schools.
                            </p>
                            <p className="text-justify content-read">
                                <i>Why this?</i> Because Pakistan has been reported to have one of the highest levels of prevalence
                                of child malnutrition compared to other developing counties. And because malnutrition,
                                particularly during the formative years of the young ones, inhibits their potential to develop
                                physically and cognitively.
                            </p>
                            <p className="text-justify content-read">
                                Like they say, to go a thousand miles you have to take the first step. Our proverbial first step has been taken; we have started the <strong>School Meal Program (SMP)</strong> that sets out to provide nutrition sensitive meals in schools where disadvantaged children come to study. We are doing this at Pasban-e-millat school in Orangi town, Karachi from where we want to fan out to other schools in Orangi continuing to cover the city first and later spreading the program across all schools in the country.
                            </p>
                            <p className="text-justify content-read">
                                It is a modest yet determined beginning. We know that we can’t do it alone. Our friends and families and their friends and their families are all chipping in to help the SMP. It would be extremely heartening if you would too.
                            </p>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <img src={founder} alt='Founder' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Founder;