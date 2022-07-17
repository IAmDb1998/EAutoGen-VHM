import React, { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./../assets/img/eautogen_white.svg";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "./../mutations/userMutations";
import { useForm } from "../utils/hooks";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "@apollo/react-hooks";
import values_that_lead_us from "./../assets/img/values_that_lead_us.png";
import "react-toastify/dist/ReactToastify.css";
function Signup() {
  const [errors, setErrors] = useState({});
  const { onChange, onSubmit, values } = useForm(handleSubmit, {
    email: "",
    mobile: "",

    name: "",
  });

  // const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const [addUser, { loading }] = useMutation(SIGNUP, {
    update(_, { data: { registerUser: userData } }) {
      // console.log("signup result ", userData);
      localStorage.setItem("token", userData.userId);
      // practice

      if (userData) {
        toast("User Created Successfully");
      }
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    },
    onError(err) {
      setErrors(err);
      toast(err.message);
    },
    variables: values,
  });

  function handleSubmit() {
    //  console.log("hello")
    if (!values.email || !values.name || !values.mobile) {
      toast("Please Fill All The Fields");

      return;
    } else if (values.email.includes("@") === false) {
      toast("Please Enter Valid Email");
      return;
    } else if (values.mobile.length > 15) {
      toast("Please Enter Valid Mobile Number");
      return;
    } else if (values.mobile.length < 8) {
      toast("Please Enter Valid Mobile Number");
      return;
    }
    addUser();
  }
  return (
    <>
      <ToastContainer />
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
                      AutoGen+ is an extended warranty plan that covers two
                      major car component: Engine & Tramission (a.k.a. Gearbox)
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
                        name="name"
                        required="required"
                        value={values.name}
                        onChange={onChange}
                        placeholder="e.g. 0123456789"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>
                        Email <span className="text-danger">*</span>{" "}
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        required="required"
                        value={values.email}
                        onChange={onChange}
                        placeholder="e.g. abc@text.com"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>
                        Phone Number <span className="text-danger">*</span>{" "}
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="e.g. 0123456789"
                        name="mobile"
                        required="required"
                        value={values.mobile}
                        onChange={onChange}
                      />
                    </Form.Group>
                    <Form.Check className="mb-3">
                      {" "}
                      <Form.Check.Input type="checkbox" required />
                      <Form.Check.Label>
                        I hereby agree, lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.{" "}
                      </Form.Check.Label>
                    </Form.Check>
                    <div className="d-grid gap-2 mb-3">
                      <Button
                        variant="secondary"
                        size="lg"
                        type="submit"
                        onClick={onSubmit}
                      >
                        sign up
                      </Button>
                      <Link
                        to="/login"
                        className="btn btn-outline-secondary btn-lg"
                      >
                        {" "}
                        Back
                      </Link>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Signup;
