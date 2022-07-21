import React from "react";
import { Button, Col, Container, Image, Row,Form } from "react-bootstrap";
import visa from "../../assets/img/visa.png"
function Package() {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-title">
              <span>GET COVERED BY AUTOGEN+</span>
              <h2>
                <span>1 Year Warranty Package</span>
              </h2>
            </div>{" "}
            <div className="section-title d-flex align-items-end justify-content-center">
              <h2 className="mb-0 ">RM <span>{localStorage.getItem("owner_price")}</span>.00</h2>
              <h5>/YEAR</h5>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4}>
            <div className="quot">
              <Row>
                <Col md={6}>
                  <strong>Owner Name: </strong>
                </Col>
                <Col md={6}>
                  <p>{localStorage.getItem("owner_name")}</p>
                </Col>
                <Col md={4}>
                  <strong>Brand: </strong>
                </Col>
                <Col md={8}>
                  <p>{localStorage.getItem("owner_brand")}</p>
                </Col>
                <Col md={4}>
                  <strong>Year Make:</strong>
                </Col>
                <Col md={8}>
                  <p>{localStorage.getItem("owner_year")}</p>
                </Col>
                <Col md={4}>
                  <strong>Other input:</strong>
                </Col>
                <Col md={8}>
                  <p>{localStorage.getItem("owner_model")}</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
            <Col md={12}>
               <div className="box-gray" >
                <div className="box-head">
               <Form.Check type="radio" aria-label="radio 1" />
               <Button className="ipay88">ipay88</Button>
               </div>

               <div className="box-content">
                <Row>
                    <Col md={12}><strong>Make a payment using your Credit/Debit Card </strong></Col>
                    <Col md={4}>
                        <strong>Payment Type *</strong>
                        <div className="payment_methods">
                            <p>Credit / Debit Card </p>
                            <div className="d-flex justify-content-between">
                            <Form.Check type="radio" aria-label="radio 1" /> <Image src={visa}/>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="payment_methods">
                            <p>Online Bank Transfer </p>
                            <div className="d-flex justify-content-between">
                            <Form.Check type="radio" aria-label="radio 2" /> <Image src={visa}/>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="payment_methods">
                            <p>Other Options </p>
                            <div className="d-flex justify-content-between">
                            <Form.Check type="radio" aria-label="radio 3" /> <Image src={visa}/>
                            </div>
                        </div>
                    </Col>
                </Row>
                
               </div>
               </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Package;
