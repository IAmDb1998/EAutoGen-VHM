import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import autohgenplus from "../../assets/img/autohgenplus.png";
import autogenplus_logo from "../../assets/img/autogenplus_logo.png";
import car_inspection_icon from "../../assets/img/car_inspection_icon.png";
import arrow from '../../assets/img/arrow.svg';
function HowItWork() {
  return (
    <>
      <section className="py-5 how_work">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-title">
                <span>HOW IT WORKS</span>
                <h2>
                  <span>WHAT'S NEXT</span>{" "}
                </h2>
              </div>
            </Col>
            </Row>
            <Row className="align-items-center justify-content-center">
            <Col md={3}>
                <Image src={autohgenplus} fluid/>
                <strong className="pb-2 d-flex">Get a Quote & Purchase Plan</strong>
                <p>Complete form to get a quote for your AutoGen Plus program and purchase plan. An order code will be sent to your registered email within 24-hours.</p>
            </Col>
            <Col md={1}>
                <Image src={arrow} fluid/>
            </Col>
            <Col md={3}>
                <Image src={car_inspection_icon} fluid/>
                <strong className="pb-2 d-flex">Car Inspection</strong>
                <p>Visit any panel workshops with your order code within 3-months to have your car inspected for AutoGen Plus program activation.</p>
            </Col>
            <Col md={1}>
                <Image src={arrow} fluid/>
            </Col>
            <Col md={3}>
                <Image src={autogenplus_logo} fluid/>
                <strong className="pb-2  d-flex">Get covered by AutoGen Plus</strong>
                <p>Upon successful activation of AutoGen Plus program, you will receive a certification via email. </p>
            </Col>
            <Col md={12} className="pt-2">
                <p>Terms & Conditions applies. For all email communication, kindly check your inbox, spam box or junk box. </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HowItWork;
