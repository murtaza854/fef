import React from 'react';
import { Heading1 } from '../../../../components'
import { Col, Container, Row } from 'react-bootstrap';
import './NewKitchen.scss';
import assembly from '../../../../assets/client/kitchenNew.jpeg';

function NewKitchen(props) {
    return (
        <div>
            <div className="padding-global-top-page-start"></div>
            <Container fluid className="new-kitchen">
                <Row className="justify-content-end">
                    <Col lg={6}>
                        <div>
                            <Heading1 first="Our Kitchen" color="#4c483f" ></Heading1>
                            {/* <Heading2 first="The Beginning of Our Journeys" color="#a8ce4c"></Heading2> */}
                            <p className="text-justify content-read">
                                The mission for FEF is to provide school meals for children to fortify education, which means they should be nutritious to ensure
                                physical health and mental growth. The only way to have a control over the meals, was to make them in our own kitchen. Using the
                                minimum investment model, we started preparing meals in a makeshift kitchen in the house of the school administrator in Pasban-e-
                                Millat School, Orangi Town, so that we could start feeding the children
                                while our formal kitchen was being constructed.
                            </p>
                            <p className="text-justify content-read">
                                Our first meal was served on 4 th February 2020 cooked in this
                                makeshift kitchen.
                            </p>
                            <p className="text-justify content-read">
                                Seeing the food on the plate of a child actualized the thought of
                                providing nutritious meals to the disadvantaged school children. It was
                                indeed a happy moment for all of us involved.
                            </p>
                            <p className="text-justify content-read">
                                The construction of our formal kitchen was completed in August 2020
                                and from there on all meals served were cooked. This kitchen has the
                                capacity to make food for eight more schools and will be the hub of
                                our program in Orangi. This is the first of many kitchens that will be
                                made in the coming years as our operations expand.
                            </p>
                            {/* <p className="text-justify content-read">
                                It was an old Harvard Business School’s case study, from 2007 that brought to fore the menace of hunger in classroom. It was an illustration of the remarkable work that was being done by Akshay Patra Foundation in India to combat this threatening issue. The reason I even read the article was because I was aware in the back of my mind that this issue of hunger and malnutrition is also pervasive among children in Pakistan; and how it affected their health and consequently their ability to learn when or if they are in school. Since the article was an old one, I looked up Akshay Patra’s performance, it was 2018 then, and was super impressed – they were providing school lunches to 1.7 million children in the country.
                            </p>
                            <p className="text-justify content-read">
                                The case study got me thinking that we, in Pakistan, ought to initiate something similar for the disadvantaged children in schools. At the time I was living in Dubai and during one of my visits to Karachi I discussed it with Commodore Rashidullah Sheikh, a friend who had been, and still is, actively involved in education related social initiatives. I had also worked with him on providing vocational training to youth in Karachi. At the time we agreed to take this thought forward but nothing much came of it since I was living out of Pakistan and he had his plate full with his work on vocational training and simultaneously supporting a school called Pasban-e-millat in Orangi town in Karachi. We had also agreed that we would start our program with this school as, for those of you living outside of Karachi, Orangi is the largest slum in the world where the population is severely disadvantaged in terms of their income levels and their living conditions.
                            </p>
                            <p className="text-justify content-read">
                                When I relocated back to Karachi from Dubai in 2019, we rekindled the idea, discussed it with other likeminded individuals – they also joined in, and we set out to bring it to reality. A nutritionally balanced meal menu had to be first designed. Luckily, we got hold of ‘Pakistan Dietary Guidelines for Better Nutrition’ prepared in 2018 by the joint effort of Planning Commission of Pakistan and Food and Agriculture Organization of the United Nations. With its help we prepared a menu for the target ages of the school going children, classes 1 - 10. Cost of the ‘school meal program’ as per the menu developed presented a challenge knowing that the funds we had budgeted would not last a long time. We nevertheless decided to go ahead. We downscaled the menu a bit, made a temporary kitchen at the school, and began our ‘school meal program’ on February 1, 2020. Unfortunately, the Covid 19 Pandemic hit us in end February, so the schools were closed in early March when we had to temporarily stop till the re-opening of the school. Soon after launching our program we started a soft effort to raise funds – only to friends and family. We were emboldened by a very good response to our effort. During the Covid 19 closure we diverted some of our funds to providing rations to the families of those affected by the virus. We were able to supply rations to over 800 families. A formal kitchen is being constructed on site which will have the capacity to provide meals to other schools in the area, the same model that Akshay Patra follows which is to supply meals from a central kitchen to various schools in the city. Presently, there are 260 students and we hope that one day, Inshah’Allah, we will be able to cover over 1.8 million children. By the way, Akshay Patra is feeding 1.8 million children today.
                            </p>
                            <p className="text-justify content-read">
                                <i>Karachi, June 25, 2020</i>
                            </p> */}
                            {/* <p className="short-text">*Schools where no furniture exists and children sit on straw mats.</p> */}
                            {/* <CustomButton1 to="contact-us" text="JOIN OUR JOURNEY" classes="btn colored-btn center btn-margin"></CustomButton1> */}
                        </div>
                    </Col>
                    <Col lg={5}>
                        <img src={assembly} alt='assembly' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NewKitchen;