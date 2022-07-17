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
                <span>EXTENDED CARE FOR YOU & YOUR CAR</span>
                <h2>
                  <span>HOW IT WORKS</span>{" "}
                </h2>
              </div>
            </Col>
            </Row>
            <Row className="align-items-center justify-content-center">
            <Col md={3}>
                <Image src={autohgenplus} fluid className="hiw_img"/>
                <strong className="pb-2 d-flex">Purchase Plan</strong>
                <p>Get started with AUTOGEN PLUS by purchasing and making payment online</p>
            </Col>
            <Col md={1}>
                <Image src={arrow}  className="arrow_img"/>
            </Col>
            <Col md={3}>
                <Image src={car_inspection_icon} fluid className="hiw_img"/>
                <strong className="pb-2 d-flex">Car Inspection</strong>
                <p>Drive to any authorized workshop with your purchased plan to get your car inspected</p>
            </Col>
            <Col md={1}>
                <Image src={arrow}  className="arrow_img"/>
            </Col>
            <Col md={3}>
                <Image src={autogenplus_logo} fluid className="hiw_img"/>
                <strong className="pb-2  d-flex">Get covered by AutoGen Plus</strong>
                <p>After the preliminary car inspection, within 24-hours, you will be notified of your plan activation status</p>
            </Col>
            <Col md={12} className="pt-2">
                <p style={{color:"#777777"}}>*TERMS & CONDITIONS APPLIES.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HowItWork;
