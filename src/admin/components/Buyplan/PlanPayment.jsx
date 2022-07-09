import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import ipay from "./../../../assets/img/ipay88.png";
import Header from "../common/header";

function PlanPayment() {
  return (
    <>
    <Header/>
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <Navigation />
          </Col>
          <Col md={8}>
            <div className="authentication-box">
              <div className="authentication-inputs">
                <Row>
                  <Col md={8} className="mb-3">
                    <strong>Get covered by AUTOGEN+ for only</strong>
                    <div className="section-title d-flex align-items-end">
                      <h2 className="mb-0">RM 298.00</h2>
                      <h5>/YEAR</h5>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Image src={ipay} />
                  </Col>
                </Row>
                <h1>Payment</h1>
                <p className="mb-3">Choose your payment method</p>
                {/* <Form noValidate validated={validated} onSubmit={onSubmit}> */}
              
                <div className="d-flex justify-content-between  mt-5">
                  <Link to="/" className="btn btn-outline-secondary btn-md">
                    {" "}
                    Back
                  </Link>
                  <Link
                    to="/admin/customerdetails"
                    className="btn btn-secondary btn-md"
                  >
                    {" "}
                    SAVE & CONTINUE
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PlanPayment;
