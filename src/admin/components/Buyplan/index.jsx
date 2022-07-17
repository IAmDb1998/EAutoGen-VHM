import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function CarDetails() {
  return (
    <>
      <div className="payment-box">
        <div className="authentication-inputs">
          <h1>Car Details</h1>
          <p className="mb-3">Input car model, brand & year</p>
          {/* <Form noValidate validated={validated} onSubmit={onSubmit}> */}
          <Form>
            <Form.Group
              className="mb-3 "
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                Car Brand <span className="text-danger">*</span>{" "}
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                Car Model<span className="text-danger">*</span>{" "}
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                Car Year<span className="text-danger">*</span>{" "}
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
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
          </Form>
        </div>
      </div>
    </>
  );
}

export default CarDetails;
