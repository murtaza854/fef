import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./MessageFounder.scss";
import founder from '../../../../assets/client/NaveedGilani.jpeg';
function MessageFounder(props) {
    return (
        <div className="contmessage">
            <Container>
                <Row>
            <Col>
            <img src= {founder} width= "500px"/>
            </Col>    
            <Col>
            <h2>Message from the Founder</h2>
            <h1>Naveed Gillani</h1>
            Pakistan is one of the countries where we have a significant population of youth – 34% of Pakistanis are under the age of 15. When we look at the various statistics relating to our youth, we find that there is a lot that needs to be done for them that isn’t being done. They are the future of Pakistan, and we believe that it is incumbent upon us to secure this future, howsoever we can. Investing in their health and education is on top of the list of initiatives that we ought to take. In this domain, if we dig deeper, and we don’t need to dig too deep, we find that our children are plagued with hunger and malnutrition that unfortunately begins immediately after childbirth and continues through their youth. This twin menace cuts across both health and education – health because they are never able to reach their full physical potential and education because their mental capacities are never able to fully blossom and reach their full potential.  
            <div className="readmore">
                Read More
            </div>
            </Col>    
            </Row>
            </Container>   
        </div>
    );
}

export default MessageFounder;