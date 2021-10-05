import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Admission = () => {
  return (
    <Container className="mt-5 mb-3 g-1">
      <h1
        style={{
          color: "#C28D71",
          textAlign: "center",
          fontWeight: "700",
          marginBottom: "30px",
        }}
      >
        Admission Service{" "}
      </h1>
      <Row className="g-5">
        <Col>
          <img
            style={{ width: "100%" }}
            src={
              "https://preview.colorlib.com/theme/academics/images/xcourse_6.jpg.pagespeed.ic.P-biLxT2VW.webp"
            }
            alt=""
          />
        </Col>
        <Col>
          <h1
            style={{
              color: "#F1BE62",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            Requirements For Admission
          </h1>
          <p>
            Modi sit dolor repellat esse! Sed necessitatibus itaque libero odit
            placeat nesciunt, voluptatum totam facere.
          </p>
          <ul
            style={{ listStyle: "none", textAlign: "left", fontSize: "20px" }}
          >
            <li>1.  Accomplished Application Form</li>
            <li>2.  Certificate of Good Moral Characte</li>
            <li>3.  High School Report Card</li>
            <li>4.  High School Transcript</li>
            <li>5.  2×2 picture</li>
            
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Admission;
