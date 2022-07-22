import React from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import Periodic from "../../../assets/img/periodic-calender.png";
import "./PeriodicCar.css";
export const PeriodicCar = () => {
  return (
    <div style={{marginTop:"50px"}}>
      <Container>
        <Row>
          <Col
            md={6}
            style={{
              disply: "flex",
              textAlign: "right",
            }}
          >
            <Image src={Periodic} fluid />
          </Col>
          <Col md={6} className="periodic-left">
            <h1>
              AUTOGEN PLUS PROGRAM <br /> COVERAGE AND REQUIREMENT
            </h1>

            <h2>Periodic Car Maintenance Requirement</h2>
            <p>
              <br />
              Cultivate good car owner behavior by keeping your program
              activated. You are required to perform your periodic car
              maintenance at your own expense at any eAutoGen's panel workshops.
              <br />
              <br />
              AutoGen PLUS periodic car maintenance schedule (as per recommended
              by manufacturers) as below:
            </p>
          </Col>
        </Row>

        <Row className=" justify-content-center ">
          <Col
            style={{
              disply: "flex",
              textAlign: "center",
             
              margin: "10px",
              padding: "10px",
              background: "#0C4C81",
            }}
            md={5}
          >
            <p style={{ fontSize: "12.8px", color: "#ffffff" }}>
              Car Lubricant Type
            </p>
          </Col>
          <Col
            md={5}
            style={{
              disply: "flex",
              textAlign: "center",
             
              alignItems: "center",
              margin: "10px",
              padding: "10px",
              background: "#0C4C81",
            }}
          >
            <p style={{ fontSize: "12.8px", color: "#ffffff" }}>
              AutoGen PLUS Periodic Car Maintenance Schedule
            </p>
          </Col>
        </Row>
        <Row className=" justify-content-center ">
          <Col
            style={{
              disply: "flex",
              textAlign: "center",
             
              margin: "10px",
              padding: "10px",
              background: "#F4F6F6",
            }}
            md={5}
          >
            <p>Semi-synthetic</p>
          </Col>
          <Col
           
            style={{
              disply: "flex",
              textAlign: "center",
           
              margin: "10px",
              padding: "10px",
              background: "#F4F6F6",
            }}
            md={5}
          >
            <p>every 3 months (or 5,000 kilometers, whichever earlier)</p>
          </Col>
          <Col
            md={5}
            style={{
              disply: "flex",
              textAlign: "center",
             
              margin: "10px",
              padding: "10px",
              background: "#F4F6F6",
            }}
          >
            <p>Fully-synthetic</p>
          </Col>
          <Col
            md={5}
            style={{
              disply: "flex",
              textAlign: "center",
          
              margin: "10px",
              padding: "10px",
              background: "#F4F6F6",
            }}
          >
            <p>every 6 months (or 10,000 kilometers, whichever earlier)</p>
          </Col>
        </Row>
        <Row>
          <Col className="mt-4 text-center">
          <Button className="getstarted text-center" variant="secondary" onClick={()=>window.location.href="https://pgmall.my/s/IMA2/3033"}>GET STARTED</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
