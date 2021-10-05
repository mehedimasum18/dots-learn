
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Navbars.css';

const Navbars = () => {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand className="fw-bold fs-2" to="/">
              {" "}
              <span style={{ color: "#FFBE62" }}>DOT'S </span>Learn{" "}
            </Navbar.Brand>
            <Nav className="ms-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/services">
                Courses
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
              <NavLink className="nav-link" to="/admission">
                Admission
              </NavLink>
              <Button className="join_us" variant="success">
                ENROLL NOW
              </Button>
            </Nav>
          </Container>
        </Navbar>
        
      </div>
    );
};

export default Navbars;