import React from "react";
import { Navbar } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <Navbar
      bg="light"
      variant="footer"
      className="justify-content-center mt-5 footer"
    >
      <Navbar.Brand style={{ fontSize: "1rem" }}>
        CopyRight©2020 Alright Reserved WebWinners
      </Navbar.Brand>
    </Navbar>
  );
};

export default Footer;
