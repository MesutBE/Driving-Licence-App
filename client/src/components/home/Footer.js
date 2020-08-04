import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Footer.css";

const Footer = () => {
  return (
    <Navbar
      bg="info"
      expand = "lg"
      sticky = "bottom"
      variant="dark"
      className="justify-content-center mt-5 footer"
    >
      <Navbar.Brand>CopyRight©2020 Alright Reserved WebWinners</Navbar.Brand>
    </Navbar>

  );
};

export default Footer;
