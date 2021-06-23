import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import './Children.scss';

function Children(props) {
    return (
        <Container fluid className="children">
            <Row className="justify-content-end">
                <Col md={6} className="global-text-col">
                    <p className='Heading1 margin-top-work'>
                        For reference we are also giving below the recommendations of<br />
                        Pakistan’s Dietary Guidelines for Better Nutrition:
                    </p>
                    <p className='content-read-heading' > Children 3 - 10 Years</p>
                    <p className='content-read'>
                        Growth and development of children 3-10 years continue at a moderate pace but there is a continuous demand of
                        nutrients to meet the body needs. In general, children gain about 2-2.5 kg body weight/year and 5-6cm height/year.
                        Mean body weight and length of boys is generally greater than their corresponding age girls. Energy requirements
                        for boys and girls are estimated at 80 kcal/kg/day and 77 kcal/kg/day at age 3 but decreased to 67 kcal/kg/day
                        and 61 kcal/kg/day at age 10 for boys and girls, respectively. Recommended protein requirements for children
                        3-10 years are estimated at 1.2 g/kg/day.
                    </p>
                    <p className='content-read-heading'> Children 10 - 19 Years</p>
                    <p className='content-read'>
                        Adolescence period is accompanied by increased physiological and psychological changes with rapid physical growth
                        and development that require increased amounts of nutrients to fulfill the body requirements. At puberty and at peak
                        weight and height accretion, adolescents gain about 3-5 kg/year weight and 6-7 cm/year height, respectively.
                        After the age of 17 years, weight and height gain of adolescents reduces substantially to 1.5-2 kg/year and 0.5-1 cm/year,
                        respectively. Adolescents by and large attain 50% of adult weight and 25% of adult height for which optimal nutrition
                        is essential. Energy requirements for adolescent boys and girls are estimated at 55-65 kcal/kg/day and 45-60 kcal/kg/day,
                        respectively. Recommended protein requirements for adolescents are 1.1-1.2 g/kg/day.
                    </p>
                </Col>
                <Col md={5} className="global-space-col"></Col>
            </Row>
        </Container>
    );
}

export default Children;