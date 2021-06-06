import React from 'react';
import Card from 'react-bootstrap/Card'
function InfoCard(props) {
    return (
        <div>
            <Card style={{width: '18rem'}}>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
      </Card.Body>
</Card>
        </div>
    );
}

export default InfoCard;