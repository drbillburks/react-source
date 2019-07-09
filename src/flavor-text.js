import React from 'react';
import Card from 'react-bootstrap/Card';
const FlavorText = (props)=><>
    <Card>
      <Card.Body>    
        <Card.Title>{props.book} {props.chapter}:{props.verse}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
</>

export default FlavorText;
