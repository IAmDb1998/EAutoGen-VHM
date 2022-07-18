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
import Header from "../admin/components/common/header.jsx";
function UserProfileUpdate() {
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
    navigate("/");
  }
  return (
    <>
      <ToastContainer />
      <Header />
      <Container fluid>
        <Row className="justify-content-center text-center">
          <Col md={2} className="mt-5 mb-2">
           
            <i
              style={{ fontSize: "80px" }}
              class="fa-regular fa-circle-user"
            ></i>
          </Col>
          <p
            style={{
              color: "rgb(23, 190, 187)",
              font: "bold",
              fontSize: "18px",
            }}
          >
            Upload Profile Picture
          </p>
        </Row>
      </Container>

      <section className="authentication">
        <Container fluid className="ps-0">
          <Row className="align-items-center justify-content-center">
            <Col md={5} className="p-0">
              <div className="authentication-box" style={{ marginTop: "0px" }}>
                <div className="authentication-inputs mb-0">
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        required="required"
                        value={values.name}
                        onChange={onChange}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Email</Form.Label>
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
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="e.g. 0123456789"
                        name="mobile"
                        required="required"
                        value={values.mobile}
                        onChange={onChange}
                      />
                    </Form.Group>

                    <div className="d-grid gap-2 mb-3">
                      <Button
                        variant="secondary"
                        size="lg"
                        type="submit"
                        onClick={onSubmit}
                      >
                        SAVE CHANGES
                      </Button>
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

export { UserProfileUpdate };
