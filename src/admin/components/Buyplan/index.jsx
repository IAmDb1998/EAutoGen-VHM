import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { GETAllBRANDS } from "../../../queries/userQueries";
import { GETAllMODELS } from "../../../queries/userQueries";
import { GETQUOTATION } from "../../../mutations/userMutations";
import { useQuery } from "@apollo/react-hooks";
import { useMutation } from "@apollo/client";
import { useForm } from "../../../utils/hooks";
import { toast, ToastContainer } from "react-toastify";

function Buyplanwizard() {
  // const [formData, setFormData] = useState({
  //   brandId: "",

  // });
  const [errors, setErrors] = useState({});
  const { onChange, onSubmit, values } = useForm(handleSubmit, {
    email: "",
    year: "",
    modelId: "",
    modelName: "",
    userName: "",
    brandId: "",
    mobile: "",
  });
  const navigate = useNavigate();
  localStorage.setItem("brandId", values.brandId);
  const [addUser] = useMutation(GETQUOTATION, {
    update(_, { data: { createQuotation: userData } }) {
      console.log(" result ", userData);

      localStorage.setItem("owner_brand", userData.brandName);
      localStorage.setItem("owner_model", userData.modelName);
      localStorage.setItem("owner_year", userData.year);
      localStorage.setItem("owner_price", userData.price);
      localStorage.setItem("token", userData.token);
    },

    variables: values,
  });

  var { data } = useQuery(GETAllBRANDS);
  const brand = data?.getAllBrands?.allVehicleRes;

  const brandId = localStorage.getItem("brandId");

  var { data } = useQuery(GETAllMODELS, { variables: { brandId } });
  const model = data?.getBrandById?.allVehicleModelRes;

  function handleSubmit() {
    if (!values.year || !values.modelId || !values.brandId) {
      toast("Please Fill All The Fields");
      return;
    }
    addUser();
    navigate("/admin/customerdetails");
  }
  return (
    <>
      <ToastContainer />
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
                <Form.Label>Brand</Form.Label>

                <Form.Select
                  onChange={onChange}
                  name="brandId"
                  id="fruit-select"
                >
                  <option>Select Car Brand</option>
                  {brand?.map((option, index) => (
                    <option key={index} value={option.id}>
                      {option.brand}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  Car Model<span className="text-danger">*</span>{" "}
                </Form.Label>
                {/* <Form.Select aria-label="Default select example">
                      <option>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select> */}

                <Form.Select
                  aria-label="Default select example"
                  onChange={onChange}
                  name="modelId"
                >
                  <option>Select Car Model</option>
                  {model?.map((option, index) => (
                    <option key={index} value={option.id}>
                      {option.modelName}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  Car Year<span className="text-danger">*</span>{" "}
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={onChange}
                  name="year"
                >
                  <option>Select</option>

                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                </Form.Select>
              </Form.Group>
              <div className="d-flex justify-content-between  mt-5">
                <Link to="/" className="btn btn-outline-secondary btn-md">
                  {" "}
                  Back
                </Link>
                <button onClick={onSubmit} className="btn btn-secondary btn-md">
                  {" "}
                  SAVE & CONTINUE
                </button>
              </div>
            </Form>
          </div>
      </div>
    </>
  );
}

export default Buyplanwizard;
