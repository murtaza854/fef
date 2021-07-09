import React from 'react';
import { Heading1, Heading2,Heading3,CustomButton1 } from '../../components';
import { Col, Container, Row } from 'react-bootstrap';
import "./ContactUs.scss"
import Form from 'react-bootstrap/Form'
function ContactUs(props) {
    return (
        <div className="contactus">
        <div className="padding-global-top-page-start"></div>
        <Container fluid>
        <Row className="justify-content-end">
        <Col md={6} className="global-text-col">
        <Heading1 first = "Contact" />
        <Row>
            <Col>
            <p className="content-read">
            <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
            connect@fefpakistan.org
            </p>
            </Col>
        </Row>
        <Row>
            <Col>
            <p className="content-read">
            <i className="fab fa-whatsapp fa-lg" aria-hidden="true"></i>
            +92 308 9602202
            </p>
            </Col>
        </Row>
        <Heading1 first = "Location"/>
        <p className="content-read">
        Office No 109-A,<br/> Office Wing Park Towers,<br/>
Clifton Karachi, Pakistan.
        </p>
        <Heading1 first = "Get in touch" />

        </Col>
        <Col md={5} className="global-space-col"></Col>

        </Row>
        <Row className="justify-content-end" >
        <Col md = {6} className="global-text-col">
        <Form>
                    <Row>
                        <Col md = {6}>
                            <Form.Group controlId="formGroupFirstName">
                                <Form.Label><p className="content-bold"> Name*</p></Form.Label>
                                <Form.Control type="text" placeholder="" required />
                            </Form.Group>
                        </Col>
                        <Col md = {6}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label><p className="content-bold">Email*</p></Form.Label>
                                <Form.Control type="email" placeholder="" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md = {6}>
                            <Form.Group controlId="formGroupPhone">
                                <Form.Label><p className="content-bold"> Phone*</p></Form.Label>
                                <Form.Control type="text" placeholder="" required />
                            </Form.Group>
                        </Col>
                        <Col md = {6}>
                            <Form.Group controlId="formGroupCompany">
                                <Form.Label><p className="content-bold">Company</p></Form.Label>
                                <Form.Control type="email" placeholder="" required />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md = {12}>
                            <Form.Group controlId="formMessage">
                                <Form.Label><p className="content-bold">Message</p></Form.Label>
                                <Form.Control rows = {8} as="textarea" placeholder="" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* <Row>
                    
                    <Col   md = {6}>
                    <Form.Group controlId="formGroupPhone">
                                <Form.Label><p className="content-bold">Mobile Number (WhatsApp) [Optional]</p></Form.Label>
                                <PhoneInput
    country={'pk'}
    />                        </Form.Group>
                    
                        </Col>
                    
                    </Row> */}
                    <Row>
                    <div className="submitButton">
                        <CustomButton1 text="SUBMIT" classes="btn colored-btn center" />
                    </div>
                    </Row>
                </Form>
                </Col>
                <Col md={5} className="global-space-col"></Col>

                </Row>
        </Container>
        
        </div>
    );
}

export default ContactUs;