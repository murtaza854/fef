import React, { useEffect, useState } from 'react';
import DOMPurify from "dompurify";
import { Col, Container, Row } from 'react-bootstrap';
import { CustomButton1 } from '../../components';
import api from '../../api';
import { useParams } from 'react-router-dom';

function NewsletterPage(props) {
    const { newsletter } = useParams();
    // const __html;
    const [__html, setHtml] = useState('<div></div>')
    useEffect(() => {(
        async () => {
            // if (token !== true) {
                const response = await fetch(`${api}/newsletter/get-page?page=${newsletter}`, {
                  headers: {'Content-Type': 'application/json'},
                  credentials: 'include',
                  withCredentials: true,
                });
                const content = await response.json();
                setHtml(content.data);
        })();
      });
    const mySafeHTML = DOMPurify.sanitize(__html);
    const template = { __html: mySafeHTML };
    let pdf = false;
    if (newsletter === 'school-meal-programme') pdf = true;
    // useEffect(() => {
    //     // code to run after render goes here
    //     document.getElementById('newsletter').innerHTML = __html;
    //   }, []); // <-- empty array means 'run once'
    return (
        <Container>
            <div className="padding-global-top-page-start"></div>
            <Row>
                <Col>
                    <div dangerouslySetInnerHTML={template} />
                </Col>
            </Row>
            {pdf ? <CustomButton1 text="Read More" to="/news-events/school-meal-programme/our-Case-for-Action.pdf" classes="btn center transparent-btn"></CustomButton1>: null}
            {/* <iframe frameBorder="0" title="s" width="100%" style={{ width: '100%', height: '100vh' }} src="/newsletter/IMPACT UPDATE.html"></iframe> */}
        </Container>
    );
}

export default NewsletterPage;