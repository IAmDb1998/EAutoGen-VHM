import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../common/header";
import Navigation from "./Navigation";
function CustomerDetails() {
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
                <h1>Customer Details</h1>
                <p className="mb-3">Input customer information</p>
                {/* <Form noValidate validated={validated} onSubmit={onSubmit}> */}
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                      Name <span className="text-danger">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="text"
                      required="required"
                      placeholder="e.g. name"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                    Email  <span className="text-danger">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      required="required"
                      placeholder="e.g. abc@dd.com"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                    Phone Number *  <span className="text-danger">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      required="required"
                      placeholder="e.g. 0123456789"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                    NRIC Number *  <span className="text-danger">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      required="required"
                      placeholder="e.g. 0123456789"
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-between  mt-5">
                    <Link to="/admin/buyplan" className="btn btn-outline-secondary btn-md">
                      {" "}
                      Back
                    </Link>
                    <Link to="/admin/planquotation" className="btn btn-secondary btn-md">
                      {" "}
                      SAVE & CONTINUE
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CustomerDetails;
