import React from 'react'
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import car_wireframe from "../../assets/img/covered.png";
import eautogen_product from "../../assets/img/eautogen_product.png";
function Checkoutbox() {
    return (  <section className="py-5 mt-5">
    <Container>
      <Row>
        <Col md={12}>
          <div className="section-title mb-5">
            <span>GET COVERED BY AUTOGEN+</span>
            <h2>
              <span>PAYMENT SUCCESSFUL</span>
            </h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Image src={car_wireframe} fluid />
        </Col>
        <Col md={6}>
          <div className="quot">
            <Image src={eautogen_product} fluid />
            <p className="mt-5">
            This is a computer generated receipt, no signature is required. Thank you for purchase of eAutoGen Plus{" "}
            </p>

            <Row>
              <Col md={4}>
                <strong>Owner Name: </strong>
              </Col>
              <Col md={8}>
                <p>Name</p>
              </Col>
              <Col md={4}>
                <strong>Brand: </strong>
              </Col>
              <Col md={8}>
                <p>Name</p>
              </Col>
              <Col md={4}>
                <strong>Year Make:</strong>
              </Col>
              <Col md={8}>
                <p>Name</p>
              </Col>
              <Col md={4}>
                <strong>Other input:</strong>
              </Col>
              <Col md={8}>
                <p>Name</p>
              </Col>
            </Row>
          </div>
          <div className="customer_details">
            <h2>This is your AUTOGEN+ unique code for car inspection:</h2>
            <Row>
             
              <Col md={12}>
                  <strong>Get covered by AUTOGEN+ for only</strong>
                  <div className="section-title d-flex align-items-end">
                      <h2 className="mb-0"><span>PRO73C7</span></h2>
                  </div>
                  <p>Other terms & conditions here</p>
              </Col>
            
                <Col md={12}>
                  <Button variant="primary" className=" text-center m-auto">DOWNLOAD RECEIPT</Button>
                </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </section> );
}

export default Checkoutbox;