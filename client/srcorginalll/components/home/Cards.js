import React from "react";
import "./Cards.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <>
      <h2 className="text-center" variant="info" style={{ fontSize: "2.2rem" }}>
        How We Work
      </h2>
      <Row className="practice-text">
        <Col className="m-3" xs={11} md={3}>
          <Card>
            <Card.Img variant="top" src="/assets/onlineTutorials.jpg" />
            <Card.Body>
              <Card.Title>Online Tutorials</Card.Title>
              <Card.Text>
                With the online tutorials you learn a lot of thing different
                things. You can imagine you as a driver while watching the
                videos.
              </Card.Text>
              <Link to="/tutorials">
                <Button variant="success">Videos</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-3" xs={11} md={3}>
          <Card>
            <Card.Img variant="top" src="/assets/practice.jpg" />
            <Card.Body>
              <Card.Title>Buy Access</Card.Title>
              <Card.Text>
                When you registered to our page you can find more tests. More
                practice makes you perfect so you can easily pass the police
                test at first try.
              </Card.Text>
              <Button variant="success"> Sign Up</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="justify-content-around m-3" xs={11} md={3}>
          <Card>
            <Card.Img variant="top" src="/assets/drivingTestTips.jpg" />
            <Card.Body>
              <Card.Title>Driving Test Tips</Card.Title>
              <Card.Text>
                The pages have been prepared to give you some of the most
                important rules to remember before your theory test.
              </Card.Text>
              <Link to="/drivingTips">
                <Button variant="success">Tips</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Cards;
