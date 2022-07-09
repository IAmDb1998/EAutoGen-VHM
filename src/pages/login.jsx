import React, { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./../assets/img/eautogen_white.svg";
import values_that_lead_us from "./../assets/img/values_that_lead_us.png";
import {ToastContainer, toast } from "react-toastify";
import { useForm } from "../utils/hooks";

function Login() {

    const { onChange, onSubmit, values } = useForm(handleSubmit, {
        email: "",
       
        
      });
  let navigate = useNavigate(); 
  
  const [validated, setValidated] = useState(false);

  function handleSubmit () {
    if(values.email.includes('@')===false )  
    {
      toast("Please Enter Valid Email")
      return;
    }
    else
    {
        navigate("/login/otp");
    }
    
  };
  return (
    <section className="authentication">
    <ToastContainer/>
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
                <div className="authentication-inputs">
              <h1>Welcome to eAutoGen Capital</h1>
              <p>Login with your email to get started.</p>
              <Form noValidate validated={validated} onSubmit={onSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  Email <span className="text-danger">*</span>{" "}
                </Form.Label>
                <Form.Control type="email" 
                 name="email"
                required="required"
                value={values.email}
                onChange={onChange}
                placeholder="e.g. 0123456789"   />
              </Form.Group>{" "}
              <div className="d-grid gap-2 mb-3">
                <Button variant="secondary" size="lg" type="submit">
                  next
                </Button>
              </div>
              </Form>
              <p className="text-center">
                Don’t have an account?<Link to="/signup"> Sign Up</Link>
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

export default Login;
