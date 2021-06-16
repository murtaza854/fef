import React from 'react';
import Card from 'react-bootstrap/Card'
import "./InfoCard.scss"
import st_class from  "../../../../assets/client/Class.jpg"
import { CardImg, SliderCard } from '../../../../components';
function InfoCard(props) {
    return (
        <div className="cont">
            <Card style={{width: '25rem'}}>
  <Card.Body>
    <CardImg image = {st_class}/>
    <Card.Title className="cardTitle"><p className="title-card">Support a Classroom</p></Card.Title>
    <SliderCard  amount = {40000} goal = {100000}/>
    
    <div className="row justify-content-between">
    <div className="col-4">
      <p className="content-bold">Raised </p>
      <p className="content-bold">Rs. 40000 </p>
    </div>
    <div className="col-4">
    <p className="content-bold">Left</p>
      <p className="content-bold">Rs. 60000 </p>
    </div>
    </div>
    {/* <CustomButton1 text = "READ MORE" classes = "colored-btn infocard"/> */}
    
      </Card.Body>
</Card>
        </div>
    );
}

export default InfoCard;