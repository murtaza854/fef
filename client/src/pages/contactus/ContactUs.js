import React, { useState } from 'react';
import { Heading1, CustomButton1 } from '../../components';
import { Col, Container, Row } from 'react-bootstrap';
import "./ContactUs.scss"
import Form from 'react-bootstrap/Form'
import api from '../../api';
function ContactUs(props) {
    const [name, setName] = useState({ text: '', error: false, errorText: '' });
    const [email, setEmail] = useState({ text: '', error: false, errorText: '' });
    const [phone, setPhone] = useState({ text: '', error: false, errorText: '' });
    const [company, setCompany] = useState({ text: '' });
    const [message, setMessage] = useState({ text: '' });

    const changeName = event => {
        const { value } = event.target;
        if (value === '') setName({ text: '', error: true, errorText: 'Name is required!' });
        else setName({ text: value, error: false, errorText: '' });
    }
    const changeEmail = event => {
        const { value } = event.target;
        if (value === '') setEmail({ text: '', error: true, errorText: 'Email is required!' });
        else if (!value.includes('@')) setEmail({ text: value, error: true, errorText: 'Please provide a valid email!' });
        else setEmail({ text: value, error: false, errorText: '' });
    }
    const changePhone = event => {
        const { value } = event.target;
        if (value === '') setPhone({ text: '', error: true, errorText: 'Phone number is required!' });
        else setPhone({ text: value, error: false, errorText: '' });
    }
    const changeCompany = event => {
        const { value } = event.target;
        setCompany({ text: value });
    }
    const changeMessage = event => {
        const { value } = event.target;
        setMessage({ text: value });
    }

    const onClick = async event => {
        event.preventDefault();
        try {
            const response = await fetch(`${api}/users/send-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name.text, email: email.text, phone: phone.text, company: company.text, message: message.text }),
            });
            const content = await response.json();
            console.log(content);
            if (content.data) {
                setName({ text: '', error: false, errorText: '' });
                setEmail({ text: '', error: false, errorText: '' });
                setPhone({ text: '', error: false, errorText: '' });
                setCompany({ text: '' });
                setMessage({ text: '' });
                alert('Form submitted!');
            } else alert('Error in submitting form. Please contact support if error persists!');
        } catch (error) {
            alert('Error in submitting form. Please contact support if error persists!');
        }
    }

    return (
        <div className="contactus">
            <div className="padding-global-top-page-start"></div>
            <Container fluid>
                <Row className="justify-content-end">
                    <Col md={6} className="global-text-col">
                        <Heading1 first="Contact" />
                        <Row>
                            <Col>
                                <p className="content-read">
                                    <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
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
                        <Heading1 first="Location" />
                        <p className="content-read">
                            Office No 109-A,<br /> Office Wing Park Towers,<br />
                            Clifton Karachi, Pakistan.
                        </p>
                        <Heading1 first="Get in touch" />

                    </Col>
                    <Col md={5} className="global-space-col"></Col>

                </Row>
                <Row className="justify-content-end" >
                    <Col md={6} className="global-text-col">
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="formGroupFirstName">
                                        <Form.Label>Name*</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            value={name.text}
                                            onBlur={changeName}
                                            onChange={changeName}
                                            required
                                        />
                                        <div className="error-text">{name.errorText}</div>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label>Email*</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            value={email.text}
                                            onBlur={changeEmail}
                                            onChange={changeEmail}
                                            required
                                        />
                                        <div className="error-text">{email.errorText}</div>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="formGroupPhone">
                                        <Form.Label>Phone*</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder=""
                                            value={phone.text}
                                            onBlur={changePhone}
                                            onChange={changePhone}
                                            required
                                        />
                                        <div className="error-text">{phone.errorText}</div>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formGroupCompany">
                                        <Form.Label>Company</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            value={company.text}
                                            onBlur={changeCompany}
                                            onChange={changeCompany}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12}>
                                    <Form.Group controlId="formMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            value={message.text}
                                            onBlur={changeMessage}
                                            onChange={changeMessage}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            {/* <Row>
                    
                    <Col   md = {6}>
                    <Form.Group controlId="formGroupPhone">
                                <Form.Label>Mobile Number (WhatsApp) [Optional]</Form.Label>
                                <PhoneInput
    country={'pk'}
    />                        </Form.Group>
                    
                        </Col>
                    
                    </Row> */}
                            <Row>
                                <div className="submitButton">
                                    <CustomButton1 onClick={onClick} to="/" text="SUBMIT" classes="btn colored-btn center" />
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