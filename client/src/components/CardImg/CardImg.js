import React from 'react';

import Card from 'react-bootstrap/Card'
function CardImg(props) {
    return (
        <div className="container_card">
      <Card.Img src= {props.image}/>
      
    <Card.Text className="bottom-left">Food</Card.Text>
      </div>
    );
}

export default CardImg;