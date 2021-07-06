import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Heading1, Heading2 } from '../../../../components'
import './Governers.scss';
import boardMember from '../../../../assets/client/NaveedGilani.jpg';

function Governers(props) {
    return (
        <Container fluid className="governers">
            <Row className="justify-content-end">
                <Col md={6}  className="global-margin-bottom">
                    <Heading1 first="Board of Governers" color="#4c483f"></Heading1>
                </Col>
                <Col md={5}></Col>
            </Row>
            <Row className="justify-content-center spacing-board">
                <Col md={2} className="governers-image">
                    <img src={boardMember} alt='board member'/>
                </Col>
                <Col md={7} className="governer-person">
                    <Heading2 first="Naveed Gilani" classes="governer-heading-768" textTransform="uppercase" color="#e3aa58"></Heading2>
                    <p className="content-read">
                    An engineer by education and training, he is presently the CEO of Enshaanlc Developments.
Having acquired degrees in mechanical and industrial engineering from USA, he has served
in leadership positions in Pakistan, China, and the United States. Has been actively involved
in the social sector over the past 12 years including Karigar Training Institute, and ACELP
Institute of Child Development.
                    </p>
                </Col>
                <Col md={1} className="hide-1100" ></Col>
            </Row>
            <Row className="justify-content-center spacing-board">
                <Col className="hide-1100" md={1}></Col>
                <Col md={7} className="governer-person">
                    <Heading2 first="Naveed Gilani" classes="governer-heading-768" textTransform="uppercase" color="#e3aa58"></Heading2>
                    <p className="content-read">
                    An engineer by education and training, he is presently the CEO of Enshaanlc Developments.
Having acquired degrees in mechanical and industrial engineering from USA, he has served
in leadership positions in Pakistan, China, and the United States. Has been actively involved
in the social sector over the past 12 years including Karigar Training Institute, and ACELP
Institute of Child Development.
                    </p>
                </Col>
                <Col md={2} className="governers-image">
                    <img src={boardMember} alt='board member'/>
                </Col>
            </Row>
            <Row className="justify-content-center spacing-board">
            <Col md={2} className="governers-image">
                    <img src={boardMember} alt='board member'/>
                </Col>
                <Col md={7} className="governer-person">
                    <Heading2 first="Naveed Gilani" classes="governer-heading-768" textTransform="uppercase" color="#e3aa58"></Heading2>
                    <p className="content-read">
                    An engineer by education and training, he is presently the CEO of Enshaanlc Developments.
Having acquired degrees in mechanical and industrial engineering from USA, he has served
in leadership positions in Pakistan, China, and the United States. Has been actively involved
in the social sector over the past 12 years including Karigar Training Institute, and ACELP
Institute of Child Development.
                    </p>
                </Col>
                <Col md={1} className="hide-1100" ></Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="hide-1100" md={1}></Col>
                <Col md={7} className="governer-person">
                    <Heading2 first="Naveed Gilani" classes="governer-heading-768" textTransform="uppercase" color="#e3aa58"></Heading2>
                    <p className="content-read">
                    An engineer by education and training, he is presently the CEO of Enshaanlc Developments.
Having acquired degrees in mechanical and industrial engineering from USA, he has served
in leadership positions in Pakistan, China, and the United States. Has been actively involved
in the social sector over the past 12 years including Karigar Training Institute, and ACELP
Institute of Child Development.
                    </p>
                </Col>
                <Col md={2} className="governers-image">
                    <img src={boardMember} alt='board member'/>
                </Col>
            </Row>
        </Container>
//         <Container fluid className="governers">
//             <Row>
                // <Col className="global-padding-left global-margin-bottom">
                //     <Heading1 first="Board of Governers" color="#4c483f"></Heading1>
                // </Col>
//             </Row>
//             <Row className="global-padding-left">
//                 <Col md={2}>
//                     <img src={boardMember} alt='board member'/>
//                 </Col>
//                 <Col md={7} className="spacing-board">
//                     <Heading2 first="Naveed Gilani" textTransform="uppercase" color="#e3aa58"></Heading2>
//                     <p className="content-read">
//                     An engineer by education and training, he is presently the CEO of Enshaanlc Developments.
// Having acquired degrees in mechanical and industrial engineering from USA, he has served
// in leadership positions in Pakistan, China, and the United States. Has been actively involved
// in the social sector over the past 12 years including Karigar Training Institute, and ACELP
// Institute of Child Development.
//                     </p>
//                 </Col>
//             </Row>
//             <Row className="global-padding-left global-padding-right">
//                 <Col className="text-left spacing-board">
//                     <Heading2 first="Naveed Gilani" textTransform="uppercase" color="#e3aa58"></Heading2>
//                     <p className="content-read">
//                     An engineer by education and training, he is presently the CEO of Enshaanlc Developments.
// Having acquired degrees in mechanical and industrial engineering from USA, he has served
// in leadership positions in Pakistan, China, and the United States. Has been actively involved
// in the social sector over the past 12 years including Karigar Training Institute, and ACELP
// Institute of Child Development.
//                     </p>
//                 </Col>
//                 <Col md={2}>
//                     <img src={boardMember} alt='board member'/>
//                 </Col>
//             </Row>
//             <Row className="global-padding-left">
//                 <Col md={2}>
//                     <img src={boardMember} alt='board member'/>
//                 </Col>
//                 <Col md={7} className="spacing-board">
//                     <Heading2 first="Naveed Gilani" textTransform="uppercase" color="#e3aa58"></Heading2>
//                     <p className="content-read">
//                     An engineer by education and training, he is presently the CEO of Enshaanlc Developments.
// Having acquired degrees in mechanical and industrial engineering from USA, he has served
// in leadership positions in Pakistan, China, and the United States. Has been actively involved
// in the social sector over the past 12 years including Karigar Training Institute, and ACELP
// Institute of Child Development.
//                     </p>
//                 </Col>
//             </Row>
//             <Row className="global-padding-left global-padding-right">
//                 <Col className="text-left spacing-board">
//                     <Heading2 first="Naveed Gilani" textTransform="uppercase" color="#e3aa58"></Heading2>
//                     <p className="content-read">
//                     An engineer by education and training, he is presently the CEO of Enshaanlc Developments.
// Having acquired degrees in mechanical and industrial engineering from USA, he has served
// in leadership positions in Pakistan, China, and the United States. Has been actively involved
// in the social sector over the past 12 years including Karigar Training Institute, and ACELP
// Institute of Child Development.
//                     </p>
//                 </Col>
//                 <Col md={2}>
//                     <img src={boardMember} alt='board member'/>
//                 </Col>
//             </Row>
//         </Container>
    );
}

export default Governers;