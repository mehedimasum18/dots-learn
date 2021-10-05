import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({info}) => {
    const { name, img, expert } = info;
    return (
      <div>
            <Col>  
              <Card>
                <Card.Img style={{height:"250px", objectFit:"cover"}} variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text> {expert} </Card.Text>
                </Card.Body>
              </Card>
            </Col>
      </div>
    );
};

export default Service;