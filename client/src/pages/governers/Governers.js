import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Heading1, Heading2 } from '../../components'
import './Governers.scss';
import boardMember from '../../assets/client/NaveedGilani.jpg';
import boardMember1 from '../../assets/client/Syed Iftikhar.jpeg';
import boardMember2 from '../../assets/client/Asif Yasin Malik.jpeg';
import boardMember3 from '../../assets/client/Rashidullah Shaikh.jpeg';
import boardMember4 from '../../assets/client/Shehryar Saeed.jpeg';
import boardMember5 from '../../assets/client/Afshan Jafri.jpeg';
import boardMember6 from '../../assets/client/Tauseef Gilani.jpeg';

function Governers(props) {
    return (
        <div>
            <div className="padding-global-top-page-start"></div>
            <Container fluid className="governers">
                <Row className="justify-content-end">
                    <Col md={6} className="global-margin-bottom">
                        <Heading1 first="Founding Members" color="#4c483f"></Heading1>
                    </Col>
                    <Col md={5}></Col>
                </Row>
                <Row className="justify-content-center spacing-board">
                    <Col md={2} className="governers-image">
                        <img src={boardMember} alt='board member' />
                    </Col>
                    <Col md={7} className="governer-person">
                        <Heading2 first="Mr. Naveed Gilani" classes="governer-heading-768" textTransform="uppercase" color="#e3aa58"></Heading2>
                        <p className="content-read">
                            An engineer by education and training, he is presently the CEO of Enshaanlc Developments. Having acquired degrees in mechanical and industrial engineering from USA, he has served in leadership positions in Pakistan, China, and the United States. Has been actively involved in the social sector over the past 12 years including Karigar Training Institute, and ACELP Institute of Child Development.
                        </p>
                    </Col>
                    <Col md={1} className="hide-1100" ></Col>
                </Row>
                <Row className="justify-content-center spacing-board">
                    <Col className="hide-1100" md={1}></Col>
                    <Col md={7} className="governer-person">
                        <Heading2 first="Mr. Syed Iftikhar H. Gilani" classes="governer-heading-768" textTransform="uppercase" color="#e3aa58"></Heading2>
                        <p className="content-read">
                        A Senior Advocate of Supreme Court of Pakistan who served as one of the most respected federal Minister for Law, Justice and Provincial Coordination. During his long and illustrious career in politics he served as advisor to the Chief Minister in then NWFP, now KPK, and advisor and special assistant to Prime Minister of Pakistan. He also has an accomplished record of serving the National Assembly and Senate of Pakistan. He has represented Pakistan at the United Nations.
                        </p>
                    </Col>
                    <Col md={2} className="governers-image">
                        <img src={boardMember1} alt='board member' />
                    </Col>
                </Row>
                <Row className="justify-content-center spacing-board">
                    <Col md={2} className="governers-image">
                        <img src={boardMember2} alt='board member' />
                    </Col>
                    <Col md={7} className="governer-person">
                        <Heading2 first="Lt. Gen. (Rtd.) Asif Yasin Malik" classes="governer-heading-768" textTransform="uppercase" color="#e3aa58"></Heading2>
                        <p className="content-read">
                        A celebrated 3-star general of the Pakistan Army who commanded one of the largest corps, spearheading security & stabilizing operations in the border areas, including border management covering smuggling, terrorist activity, militancy, and insurgency.  Post retirement from active army he served as Secretary of Defense during 2012-2014. Presently, the general is a regular speaker at senior-level strategy & policy seminars and intellectual gatherings both at home and international forums.
                        </p>
                    </Col>
                    <Col md={1} className="hide-1100" ></Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="hide-1100" md={1}></Col>
                    <Col md={7} className="governer-person">
                        <Heading2 first="Commodore (Rtd.) Rashidullah Shaikh" classes="governer-heading-768" textTransform="uppercase" color="#e3aa58"></Heading2>
                        <p className="content-read">
                        Served in the Pakistan Navy for 38 years, retiring at the rank of Commodore. Thereafter, spent 15 years in Merchant shipping as Executive Director of a Shipping company and a maritime consultant to a middle eastern Steel industry. Have been associated with the Orangi school now for over 20 years. Spent one year with INFAQ Foundation as the project director for their welfare project at Korangi. Remained a member of the Management Committee for Karigar Training Institute, a not-for-profit Vocational Skill Training center for the underprivileged boys for over 10 years.
                        </p>
                    </Col>
                    <Col md={2} className="governers-image">
                        <img src={boardMember3} alt='board member' />
                    </Col>
                </Row>
                <Row className="justify-content-center spacing-board">
                    <Col md={2} className="governers-image">
                        <img src={boardMember4} alt='board member' />
                    </Col>
                    <Col md={7} className="governer-person">
                        <Heading2 first="Mr. Shehryar Saeed" classes="governer-heading-768" textTransform="uppercase" color="#e3aa58"></Heading2>
                        <p className="content-read">
                        An engineer by education and training, has expertise in the Electric and Power industry of Pakistan. He is the managing director and CEO of Johson & Phillips Pakistan Ltd. As one of the leaders in industry he has made significant contributions for the development and improvement of the electrical industry in the country.
                        </p>
                    </Col>
                    <Col md={1} className="hide-1100" ></Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="hide-1100" md={1}></Col>
                    <Col md={7} className="governer-person">
                        <Heading2 first="Dr. Afshan Jafri" classes="governer-heading-768" textTransform="uppercase" color="#e3aa58"></Heading2>
                        <p className="content-read">
                        A dedicated and compassionate physician specializing in pediatrics with a special interest in working for the welfare of indigent patients. She has served as Chief Medical Officer and Medical Superintendent at Civil Hospital Karachi (CHK). Alongside her work at the CHK she has also served the social sector by actively working for the Behbood Association, Flame, and SADA foundations.
                        </p>
                    </Col>
                    <Col md={2} className="governers-image">
                        <img src={boardMember5} alt='board member' />
                    </Col>
                </Row>
                <Row className="justify-content-center spacing-board">
                    <Col md={2} className="governers-image">
                        <img src={boardMember6} alt='board member' />
                    </Col>
                    <Col md={7} className="governer-person">
                        <Heading2 first="Mr. Tauseef Gilani" classes="governer-heading-768" textTransform="uppercase" color="#e3aa58"></Heading2>
                        <p className="content-read">
                        An engineer by education and training, has expertise in the petroleum and energy sector of Pakistan. Having served with multinational organizations in the petroleum sector he is presently the Chief Executive of Sarhad Gas, a liquified petroleum gas company set up by himself.
                        </p>
                    </Col>
                    <Col md={1} className="hide-1100" ></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Governers;