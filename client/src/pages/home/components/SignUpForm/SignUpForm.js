import React from 'react';
import { Heading1, CustomButton1, SmallHeading } from '../../../../components';
import "./SignUpForm.scss"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
// import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function SignUpForm(props) {
    const [firstName, setFirstname] = React.useState('');
    const [lastName, setLastname] = React.useState('');
    const [email, setEmail] = React.useState('');
    return (
        <Container fluid className="signupform">
            <div className="some-padding global-padding-left">
                <SmallHeading text="Want to stay Updated?"></SmallHeading>
                <Heading1 first="SIGN UP!" />
                <Form>
                    <Row>
                        <Col md={3}>
                            <Form.Group controlId="formGroupFirstName">
                                <Form.Label><p className="content-bold">First Name*</p></Form.Label>
                                <Form.Control onChange={e => setFirstname(e.target.value)} value={firstName} type="text" placeholder="First Name" required />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="formGroupLastName">
                                <Form.Label><p className="content-bold">Last Name*</p></Form.Label>
                                <Form.Control onChange={e => setLastname(e.target.value)} value={lastName} type="text" placeholder="Last Name" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label><p className="content-bold">Email address*</p></Form.Label>
                                <Form.Control onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" required />
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
                        <CustomButton1 to="/" apiLink="submit-form" firstName={firstName} lastName={lastName} email={email} text="SUBMIT" classes="btn colored-btn center" />
                    </div>
                    </Row>
                </Form>
            </div>
        </Container>
    );
}

export default SignUpForm;