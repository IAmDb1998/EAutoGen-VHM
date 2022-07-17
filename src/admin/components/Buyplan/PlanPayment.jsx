import React from "react";
import { Button, Col, Container, Form, Image, Row ,Tab,Tabs} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import ipay from "./../../../assets/img/ipay88.png";
import Header from "../common/header";
import OnlineBanking from "./Payment/onlinebanking";
import OtherPayment from "./Payment/other";
import Cardpage from "./Payment/card";
function PlanPayment() {
  return (
    <>
      <Header />
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <Navigation />
          </Col>
          <Col md={8}>
          <div className="payment-box">
        <div className="authentication-inputs">
          <Row className="align-items-center">
            <Col md={8} className="mb-3">
              <strong>Get covered by AUTOGEN+ for only</strong>
              <div className="section-title d-flex align-items-end">
                <h2 className="mb-0">RM <span>{localStorage.getItem("owner_price")}</span>.00</h2>
                <h5>/YEAR</h5>
              </div>
            </Col>
            <Col md={4} className="mb-3 d-flex justify-content-end">
              <Image src={ipay} className="ipay" />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="mb-3">
              <h1>Payment</h1>
              <p className="mb-3">Choose your payment method</p>
            </Col>
            <Col md={12}>
              <Tabs
                defaultActiveKey="card"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="card" title="Credit/Debit Card">
                  <Cardpage />
                </Tab>
                <Tab eventKey="onlinebanking" title="Online Banking">
                  <OnlineBanking />
                </Tab>
                <Tab eventKey="payment" title="Other Options">
                  <OtherPayment />
                </Tab>
              </Tabs>
            </Col>
          </Row>

          {/* <Form noValidate validated={validated} onSubmit={onSubmit}> */}

          <div className="d-flex justify-content-between  mt-5">
            <Link to="/admin/planquotation" className="btn btn-outline-secondary btn-md">
              Back
            </Link>
            <Link
              to="/admin/planpayment"
              className="btn btn-secondary btn-md"
            >
             Pay
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
