import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
      <div className="mt-5 p-5 footer_container">
        <Container>
          <Row>
            <Col>
              <h1 style={{ color: "#F1E453", fontWeight: "bolder" }}>
               
                DOT'S LEARN'S{" "}
              </h1>
              <p>Online and Offline Education </p>
              <Button className="join_us" variant="success">
                Join With Us{" "}
              </Button>
            </Col>
            <Col className="quick_link">
              <h3>Quick Link </h3>
              <ul style={{ listStyle: "none" }}>
                <li>Contact Us</li>
                <li>Services </li>
                <li>Feedback </li>
                <li>Privacy </li>
              </ul>
            </Col>
            <Col>
              <h2>Have a Question?</h2>
              <p>Address: 106, Motijheel, Dhaka, Bangladesh.</p>
              <p>
                Mobile: +880********** <br />
                Email:dotslearn@gmail.com
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Footer;