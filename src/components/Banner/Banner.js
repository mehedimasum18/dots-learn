import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Banner.css'
const Banner = () => {
    
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch("./data/data.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);

    return (
      <div>
        <div className="banner ">
          <Col></Col>
          <Col>
            <h1 style={{ color: "#yellow" }} className="pt-5 fw-bold">
              <span style={{ color: "#FFBE62" }}>You Can Learn Anything,</span>
              <span style={{ color: "#FFBE62" }}> Anytime.</span>
            </h1>
            <br />
            <br />
            <h3>
              Read More, <span style={{ color: "#FFBE62" }}>Learn More </span>
            </h3>
            <br />

            <Button className="join_us" variant="success">
              <h3>Join With Us</h3>
            </Button>
          </Col>
        </div>
        {
          <Row xs={1} md={3} className="mt-5 g-4">
            {Array.from({ length: 1 }).map((_, idx) =>
              services
                .slice(0, 3)
                .map((info) => <Service info={info}></Service>)
            )}
          </Row>
        }
      </div>
    );
};

export default Banner;