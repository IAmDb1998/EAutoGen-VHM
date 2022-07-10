import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../common/header";
import Navigation from "./Navigation";
function PlanQuotation() {
  return (
    <>
     <div className="payment-box">
              <div className="authentication-inputs">
                <h1>Plan Quotation</h1>
                <p className="mb-3">Generate quotation</p>
                {/* <Form noValidate validated={validated} onSubmit={onSubmit}> */}
                <div className="quot">
                  <p>
                    <strong>Car Details</strong>
                  </p>

                  <Row>
                    <Col md={4}>
                      <p>Brand :</p>
                    </Col>
                    <Col md={8}>
                      <p>Name</p>
                    </Col>
                    <Col md={4}>
                      <p>Model :</p>
                    </Col>
                    <Col md={8}>
                      <p>Name</p>
                    </Col>
                    <Col md={4}>
                      <p>Year :</p>
                    </Col>
                    <Col md={8}>
                      <p>Name</p>
                    </Col>
                  </Row>
                </div>
                <hr />
                <div className="quot">
                  <p>
                    <strong>Customer Details</strong>
                  </p>

                  <Row>
                    <Col md={4}>
                      <p>Name :</p>
                    </Col>
                    <Col md={8}>
                      <p>Tan Eng Wai</p>
                    </Col>
                    <Col md={4}>
                      <p>Email :</p>
                    </Col>
                    <Col md={8}>
                      <p>abc@gmail.com</p>
                    </Col>
                    <Col md={4}>
                      <p>Phone Number :</p>
                    </Col>
                    <Col md={8}>
                      <p>0123456789</p>
                    </Col>
                    <Col md={4}>
                      <p>NRIC No :</p>
                    </Col>
                    <Col md={8}>
                      <p>0123456789</p>
                    </Col>
                    <Col md={12} className="mb-3">
                      <strong>Get covered by AUTOGEN+ for only</strong>
                      <div className="section-title d-flex align-items-end">
                        <h2 className="mb-0">RM 298.00</h2>
                        <h5>/YEAR</h5>
                      </div>
                    </Col>
                    <Col md={12} className="d-flex m-auto">
                      <Form.Check className="mb-3">
                        {" "}
                        <Form.Check.Input type="checkbox" />
                        <Form.Check.Label>I hereby agree, lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</Form.Check.Label>
                      </Form.Check>
                    </Col>
                  </Row>
                </div>
                <div className="d-flex justify-content-between  mt-5">
                  <Link to="/" className="btn btn-outline-secondary btn-md"> Back</Link>
                  <Link to="/admin/planpayment" className="btn btn-secondary btn-md"> SAVE & CONTINUE</Link>
                  
                  </div>
              </div>
            </div>
    </>
  );
}

export default PlanQuotation;
