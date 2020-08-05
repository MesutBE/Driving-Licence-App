import React from "react";
import "./ContactPart.css";
import { Col, Row } from "react-bootstrap";


const ContactPart = () => {
  return (
    <div className="contact-part">
      <Row className="parts">
        <Col xs={10} md={4}>
          <Row>
            <i className="fas fa-home"></i>
            <h2>Mailing Address</h2>
          </Row>
          <Row>
            <p>
              WebWinners Driving School
              <br />
              Boulevard Théo Lambert 75,
              <br />
              1070 Anderlecht
            </p>
          </Row>
        </Col>

        <Col xs={10} md={4}>
          <Row>
            <i className="fas fa-comment"></i>
            <h2>Social</h2>
          </Row>
          <Row>
            <p>
              <a href="www.linkedin.com/webwinners"><i className="fab fa-linkedin" style={{ fontSize: '36px' }}></i></a>
              <a href="www.linkedin.com/webwinners"><i class="fab fa-github-square" style={{ fontSize: '36px' }}></i></a>
              <a href="www.linkedin.com/webwinners"><i class="fab fa-facebook-square" style={{ fontSize: '36px' }}></i></a>
              <a href="www.linkedin.com/webwinners"><i class="fab fa-google-plus-square" style={{ fontSize: '36px' }}></i></a>
              <a href="www.linkedin.com/webwinners"><i class="fab fa-instagram-square" style={{ fontSize: '36px' }}></i></a>
              <a href="www.linkedin.com/webwinners"><i class="fab fa-twitter-square" style={{ fontSize: '36px' }}></i></a>
            </p>
          </Row>
        </Col>
      </Row>

      <Row className="parts">
        <Col xs={10} md={4}>
          <Row>
            <i className="fas fa-envelope"></i>
            <h2>Email</h2>
          </Row>
          <Row>
            <p>
              <a href="/">info@webwinners.be</a>
            </p>
          </Row>
        </Col>
        <Col xs={10} md={4}>
          <Row>
            <i className="fas fa-phone"></i>
            <h2>Phone</h2>
          </Row>
          <Row>
            <p>(032) 123-0000</p>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ContactPart;
