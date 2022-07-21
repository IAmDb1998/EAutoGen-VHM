import React from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../../assets/img/1.png";
import Brand2 from "../../../assets/img/2.png";
import Brand3 from "../../../assets/img/3.png";
import Brand4 from "../../../assets/img/4.png";
import "./BrandSlider.css";
export const BrandSlider = () => {
  return (
    <div style={{padding:"25px"}}>
      <Container>
        <Row  className="justify-content-center" >
          <Col md={5} className="brandslider">
            <p>AUTOGEN PLUS program ELIGIBILITY</p>
            <Col md={10}>
            <h1>AutoGen PLUS Extended Warranty Program</h1>
            </Col>
          </Col>
          <Col md={5} className="brandslider_right" >
          <Col md={12}>
            <p>
              Designed to pick you and your car up where your auto warranty
              expires, AutoGen PLUS is an extended warranty program allowing all
              <span> private use cars (excluding e-hailing) </span>with <span>car age up to 10 years</span>
              (from manufacturing year) and within <span> odometer reading of 200,000
              kilometers </span>at the time of activation of this warranty plan.
            </p>
            </Col>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} className="brandcarausal">
          <Carousel>
            <Carousel.Item>
              <Image src={Brand1} fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={Brand2} fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={Brand3} fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={Brand4} fluid />
            </Carousel.Item>
          </Carousel>
          <p>
            NON-AFFILIATION DISCLAIMER: Logos used are for illustration purposes
            only. We are not affiliated, associated, authorized, endorsed by, or
            in any way officially connected with or any of its subsidiaries or
            its affiliates.
          </p>
          </Col>
          <Col md={8} className="d-flex m-auto">
              {/* <Button variant="primary" className=" text-center m-auto">GET QUOTE</Button> */}
              <a
                className=" text-center m-auto"
                style={{ textDecoration: "none" }}
              >
                <Button className="getstarted" variant="secondary">GET STARTED</Button>
              </a>
            </Col>
        </Row>
      </Container>
    </div>
  );
};
