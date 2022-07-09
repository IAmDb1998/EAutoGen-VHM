import React, { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./../assets/img/eautogen_white.svg";
import values_that_lead_us from "./../assets/img/values_that_lead_us.png";



function OTP() {
    let navigate = useNavigate(); 
  
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else{     
        navigate('/');
    }
  
      setValidated(true);
    };
  return (
    <section className="authentication">
      <Container fluid className="ps-0">
        <Row className="align-items-center">
          <Col md={6}>
            <div className="authentication-content">
              <div className="logo">
                <Image src={Logo} />
              </div>
              <Row className="align-items-center">
                <Col md={12}>
                  <h1>
                    <span>Get Covered </span>
                    By AUTOGEN PLUS
                  </h1>
                  <p>
                    AutoGen+ is an extended warranty plan that covers two major
                    car component: Engine & Tramission (a.k.a. Gearbox)
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={6}>
            <div className="authentication-box">
                <div className="authentication-inputs" >
              <h1>Check your email</h1>
              <p>We’ve sent you OTP code to your email.</p> <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                OTP Code <span className="text-danger">*</span>{" "}
                </Form.Label>
                <Form.Control type="text" placeholder="e.g. 0123456789" required  />
              </Form.Group>{" "}
              <div className="d-grid gap-2 mb-3">
                <Button variant="secondary" size="lg" type="submit">
                validate
                </Button>
                <Link to="/login" className="btn btn-outline-secondary btn-lg"> Back</Link>
              </div></Form>
              <p className="text-center">
              Didn’t get the code? <Link to="/login/otp"> Resend Code</Link>
              </p>
              </div>
          
              <Image src={values_that_lead_us} fluid/>
            </div>
          
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OTP;
