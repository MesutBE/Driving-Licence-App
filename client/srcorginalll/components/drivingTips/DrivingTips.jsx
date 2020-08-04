import React from "react";
import "./DrivingTips.css";
import { Row, Col, Image } from "react-bootstrap";
import DrivingNavbar from "./DrivingNavbar";

const DrivingTips = () => {
  return (
    <div className="first-container">
      <DrivingNavbar />
      <Row>
        <h1 className="text-center"> Driving Tips </h1>
      </Row>
      <Row className="first-part">
        <Col className="text-part order2" xs={10} md={5}>
          The following pages have been prepared to give you some of the most
          important rules to remember before your theory test. If you get very
          nervous at going to the theory test, then it might be a good idea to
          not tell too many about it so that you don´t put extra pressure on
          yourself. Also you could order the theory test early in the morning so
          you don't have much time to think about it. Mostly your first answer
          is correct, by 80%, so think twice before you change your answer. Only
          if you are 100% sure should you change your answer. When you answer
          the questions and have doubts about a single image, then you should
          not focus only on that, because there is a risk that you do not hear
          the next question. But if in doubt, do not not answer – that will
          count as a mistake if there is no answer. You must have at least 20
          correct images of 25 images to pass the test. Multiple errors in an
          image count as one error, so 20 out of 25 images should be error-free.
          Do not skip the answers because you cannot recall the question later.
          The test at the police is not intended to make you fail, but to check
          that you have the necessary knowledge of the most important rules and
          to see how you will react in the different traffic situations. (always
          remember to be critical and never take chances).
        </Col>
        <Col className="image-part order1" xs={10} md={5}>
          <Image
            src="/assets/drivingTipsBckgrnd.jpg"
            width="600vw"
            height="400vh"
          />
        </Col>
      </Row>

      <Row className="first-part">
        <Col className="image-part order3" xs={10} md={5}>
          <Image
            src="/assets/speedRestrictions.jpg"
            width="500vw"
            height="650vh"
            className="image-hover"
          />
        </Col>
        <Col className="text-part order4" xs={10} md={5}>
          <Row>
            <h4>Speed Restrictions</h4>
          </Row>
          <Row className="pl-5">
            Speed restrictions must always be respected and you must never drive
            faster than what is the limit on the traffic sign. You must drive 50
            km/h in built-up areas when there are good driving conditions.
            Always lower your speed when you get close to a traffic intersection
            without traffic lights. Drive about 5-10 km/h if you have to comply
            with your right hand duty, and approx. 30 km/h if the traffic from
            the side road has unconditional duty from their residential roads.
            Pay special attention to children, the elderly, the disabled, and
            school patrols.
            <br />
            Inside a built-up area: 50 km/h
            <br />
            Outside a built-up area: 80 km/h
            <br />
            On a motorway: 120 km/h
            <br />
            On an express road/ motor traffic road: 80 km/h
            <br />
            Maximum speed for: Bus: 80 km/h Truck: 80 km/h
            <br />
            Car with Trailer: 80 km/h Tractor: 30 km/h, some tractors 40 km/h
          </Row>
        </Col>
      </Row>
      <Row className="first-part">
        <Col className="text-part order6" xs={10} md={5}>
          <Row>
            <h4>Duties</h4>
          </Row>
          <Row className="pl-5">
            Unconditional duty means that you must show that you can and will
            stop and hold back for traffic coming from both your right and left.
            You have unconditional duty in the following situations: There are
            shark teeth, There is a road sign for unconditional duty (triangular
            board with the point down), There is a stop sign (meaning full stop)
            Driving into a roundabout, When crossing a sidewalk - a bicycle path
            - you enter or exit from a garage or private property, Leaving a
            parking lot, gas station, gravel road or leaving a clearly
            subordinate road that has a different surface (typically
            cobblestone). Leaving a pedestrian area, living- and play area.
            Right hand duty means that you have to wait for all vehicles coming
            from your right. This applies where the rules for unconditional duty
            is not present. (These rules do not apply for merging or changing
            lanes!).
          </Row>
        </Col>
        <Col className="image-part order5" xs={10} md={5}>
          <Image
            src="/assets/trafficDuties.jpeg"
            width="600vw"
            height="400vh"
          />
        </Col>
      </Row>
      <Row className="first-part">
        <Col className="image-part order7" xs={10} md={5}>
          <Image src="/assets/danger.jpg" width="600vw" height="400vh" />
        </Col>
        <Col className="text-part order8" xs={10} md={5}>
          <Row>
            <h4>Danger, disadvantage and unnecessary disadvantage</h4>
          </Row>
          <Row>
            Never endanger yourself or others. You are "at a disadvantage" if
            you drive in a way that, without being in danger, gets in the way of
            the other road users and forces them to slow down / increase speed,
            change location on the road or hold back. For certain manoeuvres,
            e.g. starting from the curb, changing lanes (all parallel
            manoeuvres) and in the case of sudden stopping, you can not always
            avoid getting in the way of others (packed traffic), but you must
            ensure that the manoeuvre is not to "unnecessary inconvenience". In
            all manoeuvres when you meet others, you must not be at a
            disadvantage, whether there is packed traffic or not.
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default DrivingTips;
