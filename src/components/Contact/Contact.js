import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

const Contact = () => {
    return (
      <div>
        <Container className="mt-5">
          <Row>
            <h1 style={{ color: "#FFBE62", fontWeight: "bolder" }}>
              Get In Touch
            </h1>
            <h4>
              Quos ipsum ratione vitae repudiandae voluptatibus rem inventore et
              natus cupiditate tempore!
            </h4>
            <Col className="pt-5">
              <img
                style={{ width: "100%" }}
                src={
                  "https://preview.colorlib.com/theme/academics/images/xcourse_6.jpg.pagespeed.ic.P-biLxT2VW.webp"
                }
                alt=""
              />
            </Col>
            <Col className="pt-5" style={{ textAlign: "left" }}>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter first name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="name" placeholder="Last first name" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Write Your Massage</Form.Label>

                  <FloatingLabel controlId="floatingTextarea2" label="Massage">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Button className="join_us" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Contact;