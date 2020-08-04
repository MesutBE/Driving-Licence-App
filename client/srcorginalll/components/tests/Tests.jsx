
import React, { useState } from "react";
import { Jumbotron, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import TestsNavbar from "./TestsNavbar";
import "./Tests.css";
const Tests = () => {
  const [fileNames] = useState([ 
    { filename: "Equipment", filePath: "/assets/tests/Equipment/1/2015_01_27_03_26_0820141205_123346.jpg" },
    { filename: "Commissioning" , filePath: "/assets/tests/Commissioning/1/2013_02_09_10_41_50IMG_1723.jpeg"}, 
    { filename: "Location_on_the_road", filePath: "/assets/tests/Location_on_the_road/1/2013_04_20_09_58_59najnnfoto--43-.jpg" },
   ]);
  return (
        <> 
             <TestsNavbar />
             <Jumbotron fluid className="result-part">
              <Row className="picture-part"> 
                 {fileNames.map((obj, id) => (
                   <Col key={id} xs={5} md={3} lg={2} className="m-4 p-1">
                      <Row className="justify-content-center">
                        <Link to={
                          { 
                          pathname: '/freetest',
                          tests: {
                            testName: `${obj.filename}`
                          }
                        }} onClick = {() => window.localStorage.setItem("testN" , obj.filename)} >
                          <Image key={id} src={obj.filePath} height="180px" width="180px" className="p-2" />   
                        {" "}</Link>
                      </Row>                    
                      <Row className="justify-content-center">                      
                          <p> {obj.filename} </p>                    
                      </Row>                  
                    </Col>                
                 ))}        
              </Row>      
            </Jumbotron>    
          </>
  );};
export default Tests;
