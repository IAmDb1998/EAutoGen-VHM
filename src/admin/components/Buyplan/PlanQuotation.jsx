import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
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
                      <p>{localStorage.getItem("owner_brand")}</p>
                    </Col>
                    <Col md={4}>
                      <p>Model :</p>
                    </Col>
                    <Col md={8}>
                      <p>{localStorage.getItem("owner_model")}</p>
                    </Col>
                    <Col md={4}>
                      <p>Year :</p>
                    </Col>
                    <Col md={8}>
                      <p>{localStorage.getItem("owner_year")}</p>
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
                      <p>{localStorage.getItem("owner_name")}</p>
                    </Col>
                    <Col md={4}>
                      <p>Email :</p>
                    </Col>
                    <Col md={8}>
                      <p>{localStorage.getItem("owner_email")}</p>
                    </Col>
                    <Col md={4}>
                      <p>Phone Number :</p>
                    </Col>
                    <Col md={8}>
                      <p>{localStorage.getItem("owner_mobile")}</p>
                    </Col>
                    <Col md={4}>
                      <p>NRIC No :</p>
                    </Col>
                    <Col md={8}>
                      <p>{localStorage.getItem("owner_nric")}</p>
                    </Col>
                    <Col md={12} className="mb-3">
                      <strong>Get covered by AUTOGEN+ for only</strong>
                      <div className="section-title d-flex align-items-end">
                        <h2 className="mb-0">
                          RM <span>{localStorage.getItem("owner_price")}</span>
                          .00
                        </h2>
                        <h5>/YEAR</h5>
                      </div>
                    </Col>
                    <Col md={12} className="d-flex m-auto">
                      <Form.Check className="mb-3">
                        {" "}
                        <Form.Check.Input type="checkbox" />
                        <Form.Check.Label>
                          I hereby agree, lorem Ipsum is simply dummy text of
                          the printing and typesetting industry. Lorem Ipsum has
                          been the industry’s standard dummy text.
                        </Form.Check.Label>
                      </Form.Check>
                    </Col>
                  </Row>
                </div>
                <div className="d-flex justify-content-between  mt-5">
                  <Link to="/admin/customerdetails" className="btn btn-outline-secondary btn-md">
                    {" "}
                    Back
                  </Link>
                  <Link
                    to="/admin/planpayment"
                    className="btn btn-secondary btn-md"
                  >
                    {" "}
                    SAVE & CONTINUE
                  </Link>
                </div>
              </div>
            </div>
    </>
  );
}

export default PlanQuotation;
