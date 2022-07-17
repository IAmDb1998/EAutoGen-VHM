import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CUSTO_DETAILS } from "../../../mutations/userMutations";
import { useForm } from "../../../utils/hooks";
import { ToastContainer, toast } from "react-toastify";
function CustomerDetails() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const { onChange, onSubmit, values } = useForm(handleSubmit, {
    name: "",
    email: "",
    mobile: "",
    nric: "",
    state: "",
  });

  const [addUser, { loading }] = useMutation(CUSTO_DETAILS, {
    update(_, { data: { customerDetails: userData } }) {
      console.log("signup result ", userData);
      localStorage.setItem("owner_name", userData.name);
      localStorage.setItem("owner_email", userData.email);
      localStorage.setItem("owner_mobile", userData.mobile);
      localStorage.setItem("owner_nric", userData.nric);
      localStorage.setItem("owner_state", userData.state);
      // practice
      setTimeout(() => {
        navigate("/admin/planquotation");
      }, 2000);
    },
    onError(err) {
      setErrors(err);
      toast(err.message);
    },
    variables: values,
  });

  function handleSubmit() {
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
      <div className="payment-box">
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
                      Name  <span className="text-danger">*</span>{" "}
                    </Form.Label>
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
                    <Form.Label>
                      Email <span className="text-danger">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      required="required"
                      value={values.email}
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                      Phone Number * <span className="text-danger">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="mobile"
                      required="required"
                      value={values.mobile}
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                      NRIC Number * <span className="text-danger">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="nric"
                      required="required"
                      value={values.nric}
                      onChange={onChange}
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-between  mt-5">
                    <Link
                      to="/admin/buyplan"
                      className="btn btn-outline-secondary btn-md"
                    >
                      {" "}
                      Back
                    </Link>
                    <Link
                      to="/admin/planquotation"
                      className="btn btn-secondary btn-md"
                      onClick={onSubmit}
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

export default CustomerDetails;
