import React from 'react';
import Card from 'react-bootstrap/Card'
import "./InfoCard2.scss"
import { CardImg, CustomButton1 } from '../../../../components';
function InfoCard2(props) {
  return (
    <div className="infocard2">
      <Card className="height-max">
        <Card.Body>
          <div className="img-box">
            <CardImg cat={props.cat} image={props.img} />
          </div>
          <Card.Title className="cardTitle"><p className="title-card">{props.title}</p></Card.Title>
          <Card.Text>
            <p className="content-read">{props.previewText}</p>
          </Card.Text>
          <div className="info-btn-container">
            <CustomButton1 to={props.url} text="READ MORE" classes="colored-btn infocard-btn" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default InfoCard2;