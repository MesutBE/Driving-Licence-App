import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = () => {
  return (
    <Navbar bg="info" expand="lg" sticky="top" variant="dark">
      <Navbar.Brand href="#home">Driving-License-App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" active>
            Home
          </Nav.Link>
          <Nav.Link href="/tutorials">Tutorials</Nav.Link>
          <Nav.Link href="/freetest">Take Practice Test</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="User Name"
            className="mr-sm-2"
          />
          <FormControl type="text" placeholder="Password" className="mr-sm-2" />
          <Button variant="success">Log In</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
