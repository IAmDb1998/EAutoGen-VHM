import React, { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./../assets/img/eautogen_white.svg";
import values_that_lead_us from "./../assets/img/values_that_lead_us.png";

function Signup() {
  
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
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
              <div className="authentication-inputs mb-0">
                <h1>Sign Up</h1>
                <p>Fill up your personal information with AUTOGEN.</p>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>
                    Name <span className="text-danger">*</span>{" "}
                  </Form.Label>
                  <Form.Control type="text" placeholder="e.g. 0123456789" required  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>
                  Email  <span className="text-danger">*</span>{" "}
                  </Form.Label>
                  <Form.Control type="email" placeholder="e.g. abc@text.com" required  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>
                  Phone Number  <span className="text-danger">*</span>{" "}
                  </Form.Label>
                  <Form.Control type="text" placeholder="e.g. 0123456789" required  />
                </Form.Group>
                <Form.Check
                      className="mb-3"
                    > <Form.Check.Input type="checkbox" required />
                    <Form.Check.Label>I hereby agree, lorem Ipsum is simply dummy text of the printing and typesetting industry. </Form.Check.Label>
                        </Form.Check>
                <div className="d-grid gap-2 mb-3">
                  <Button variant="secondary" size="lg" type="submit">
                  sign up
                  </Button>
                  <Link to="/login" className="btn btn-outline-secondary btn-lg"> Back</Link>
                
                </div>
                </Form>
             
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Signup;
