import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('./data/data.json')
            .then(res => res.json())
            .then(data => setServices(data))
        
    }, [])
    
    return (
      <div className="services mt-5">
        <h1 style={{ color: "#FFBE62", fontWeight: "bolder" }}>Our Services</h1>
        <h5>
          Voluptatibus assumenda omnis tempora ullam alias amet eveniet
          voluptas, incidunt quasi <br /> aut officiis porro ad, expedita saepe
          necessitatibus rem debitis architecto dolore?{" "}
        </h5>
        <div className="container pt-4">
          {
            <Row xs={1} md={3} className="g-4">
              {Array.from({ length: 1 }).map((_, idx) =>
                services.map((info) => <Service info={info}></Service>)
              )}
            </Row>
          }
        </div>
      </div>
    );
};

export default Services;