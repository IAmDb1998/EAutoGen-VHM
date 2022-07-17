import React from 'react'
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import car_wireframe from "../../assets/img/404_error.png";
function CheckoutboxUnsuccessful() {
    return (  <section className="py-5 mt-5">
    <Container>
      <Row>
        <Col md={12}>
          <div className="section-title mb-5">
            <span>GER COVERD BY AUTOGEN PLUS</span>
            <h2>
              <span style={{color:"#EF487D"}}>PAYMENT UNSUCCESSFUL</span>
            </h2>
            <p>We encountered on error during your transaction. Please try again with different payment method.</p>

          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Image src={car_wireframe} fluid />
        </Col>
        <Col md={4} className="d-flex justify-content-center m-auto">
        <Button variant="primary" className=" text-center m-auto">RETURN TO PAYMENT</Button>
        </Col>
      </Row>
    </Container>
  </section> );
}

export default CheckoutboxUnsuccessful;