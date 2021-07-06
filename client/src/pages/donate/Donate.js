import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Heading1, Heading2 } from '../../components';
import "./Donate.scss"
function Donate(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <div className="Projects">
            <div className="padding-global-top-page-start"></div>
            <Container fluid>

            <Row className="justify-content-end">
                <Col md={6} className="global-text-col">
                    <Heading1 first="Donation" color="#4C483F"></Heading1>
                    <Heading2 first="For Donation via Bank Transfer" color="#A8CE4C"> </Heading2>
                        <p className="content-read">
                            <b>Habib Metropolitan Bank</b>
                            <br />
                            Account Title: Fortify Education Foundation
                            <br />
                            Account no. 6-01-46-20301-714-128531
                            <br />
                            IBAN: PK19MPBL0146067140128531.
                        </p>

            <div className="leavespace"></div>

                        <Heading2 first="For Donation via Cross Cheque" color="#A8CE4C"> </Heading2>
                        <p className="content-read">
                            Kindly make a Cross Cheque in favor of <b> Fortify Education Foundation</b>
                            <br />
                            and send us via a courier to corporate office address <b> Office no.109-A,
                                <br />
                                Office Wing, Park Towers, Clifton, Karachi, Pakistan</b> or for pickup in
                            <br />
                            Karachi call our helpline at +923089602202.
                        </p>
                        <div className="leavespace"></div>
                        <Heading2 first="For Cash Donations" color="#A8CE4C"> </Heading2>

                        <p className="content-read">
                            Call our helpline at +923089602202 and our rider will
                            <br />
                            collect from your doorstep. Donation reciept will be
                            <br />
                            provided on the spot
                            <br />
                            Karachi call our helpline at +923089602202.
                        </p>
            <div className="leavespace"></div>

                        <Heading2 first="For Donations Outside Pakistan" color="#A8CE4C"> </Heading2>
                        <p className="content-read">
                            Call our WhatsApp helpline +923089602202 and our
                            <br />
                            representative will guide you accordingly. Donation
                            <br />
                            reciept will be provided via email.
                        </p>
                    </Col>
                    
            <Col md={5} className="global-space-col"></Col>
                </Row>
                
            </Container>
        </div>
    );
}

export default Donate;