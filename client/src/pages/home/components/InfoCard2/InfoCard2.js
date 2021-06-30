import React from 'react';
import Card from 'react-bootstrap/Card'
import "./InfoCard2.scss"
import st_class from  "../../../../assets/client/Class.jpg"
import { CardImg, CustomButton1 } from '../../../../components';
function InfoCard2(props) {
    return (
        <div className="infocard2">
            <Card >
  <Card.Body>
    <CardImg image = {st_class}/>
    <Card.Title className="cardTitle"><p className="title-card">Support a Classroom</p></Card.Title>
    <Card.Text>
      <p className="content-read">Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor i
ncididunt ut labore et dolore magna aliqua
Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor</p>
    </Card.Text>
    <CustomButton1 text = "READ MORE" classes = "colored-btn infocard-btn"/>
    
      </Card.Body>
</Card>
        </div>
    );
}

export default InfoCard2;