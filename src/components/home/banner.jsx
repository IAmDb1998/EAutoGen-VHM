import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import Banner_img from "../../assets/img/woman_with_bill.png";
import { GETAllBRANDS } from "../../queries/userQueries"
import { GETAllMODELS } from "../../queries/userQueries"
import { useQuery } from "@apollo/react-hooks"
import { useMutation } from "@apollo/client";
import { GETQUOTATION } from "../../mutations/userMutations";
import { useForm } from "../../utils/hooks";
import {ToastContainer, toast } from "react-toastify";
import Select from 'react-select';
import "react-toastify/dist/ReactToastify.css";
function Banner() {
  const [errors, setErrors] = useState({});
  const [checked, setChecked] = React.useState(false);
  const handleChecked = () => {
    setChecked(!checked);
  };
  const { onChange, onSubmit, values } = useForm(handleSubmit, {
      email:"",
      year:"",
      modelId:"",
      modelName:"",
      userName:"",
      brandId:"",
      mobile:"",
      });

    const navigate = useNavigate();
 
  localStorage.setItem("brandId",values.brandId)
    const [addUser] = useMutation(GETQUOTATION, {
      update(_, { data: { createQuotation: userData } }) {
        console.log(" result ", userData);
        localStorage.setItem("owner_name", userData.userName);
        localStorage.setItem("owner_email", userData.email);
        localStorage.setItem("owner_mobile", userData.mobile);
        localStorage.setItem("owner_brand", userData.brandName);
        localStorage.setItem("owner_model", userData.modelName);
        localStorage.setItem("owner_year", userData.year);
        localStorage.setItem("owner_price", userData.price);
        localStorage.setItem("token", userData.token);

       
        setTimeout(() => {
          navigate("/quotation");
        }, 1000);
      },
      onError(err) {
        setErrors(err);
        toast(err.message);
      },
      variables: values,
    });

   

    function handleSubmit () {
      //  console.log("hello")
    if(!values.email  || !values.userName  
        || !values.mobile || !values.brandId || !values.year || !values.modelId)  
       {
        
        
         toast("Please Fill All The Fields")
         
         return;
       }
       else if(values.email.includes('@')===false)
       {
         toast("Please Enter Valid Email")
         return;
       }
     
         else if(values.mobile.length>15 )
         {
           toast("Please Enter Valid Mobile Number")
           return;
         }
        else if(values.mobile.length<8)
        {
           toast("Please Enter Valid Mobile Number")
           return;
        }
        else if(checked===false)
        {
          toast("Please Accept Terms And Conditions")
          return;
        }
        
        
       addUser();
    };

    var { data } = useQuery(GETAllBRANDS);
    const brand = data?.getAllBrands?.allVehicleRes;
    
    const brandId= localStorage.getItem("brandId")
    var { data } = useQuery(GETAllMODELS, { variables: { brandId } });
    const model = data?.getBrandById?.allVehicleModelRes
    
 
 
  return (
    <>
      <section className="banner">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="banner-content">
                <h1>Daunted by expensive car repairs ?</h1>
                <p>
                  eAutoGen picks up where your auto warranty expires. Protect
                  your car's engine and transmission with our vehicle protection
                  plan that shields you from major car repair costs.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <Image src={Banner_img} fluid />
            </Col>
            <div className="banner-quote">
              <Form>
                <Row>
                  <Col md={4}>
                    {" "}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Brand</Form.Label>
                     
                      <Form.Select onChange={onChange} name="brandId"  id="fruit-select">
                      <option>Select Car Brand</option>
        {brand?.map((option, index) => (
          <option key={index} value={option.id}>
            {option.brand}
          </option>
        ))}

      </Form.Select>
                    
                     
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    {" "}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Model</Form.Label>

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
                  </Col>
                  <Col md={4}>
                    {" "}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Years</Form.Label>
                      <Form.Select aria-label="Default select example"  onChange={onChange} name="year" >
                        <option>Open this select menu</option>
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
                  </Col>
                  <Col md={4}>
                    {" "}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Name</Form.Label>
                      <Form.Control 
                      type="text" 
                      
                  name="userName"
                required="required"
                value={values.userName}
                onChange={onChange}
                      placeholder="e.g. Tan Eng" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    {" "}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label style={{fontWeight: 'bold'}}>Email </Form.Label>
                      <Form.Control
                        type="email"
                       
                  name="email"
                required="required"
                value={values.email}
                onChange={onChange}
                        placeholder="e.g. abg@gmail.com"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    {" "}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label style={{fontWeight: 'bold'}}>Mobile </Form.Label>
                      <Form.Control
                       
                        type="number" 
                  name="mobile"
                required="required"
                value={values.mobile}
                onChange={onChange}
                        placeholder="e.g. 0123456789"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={8} className="d-flex m-auto">
                  <Form.Check
                      className="mb-3"
                    > <Form.Check.Input 
                    type="checkbox"
         
          onChange={handleChecked}
                     />
                    <Form.Check.Label>By filling the checkbox and submitting this registration to eAutoGen. I understand and agree to the Terms and Conditions and Privacy Policy.</Form.Check.Label>
                        </Form.Check>
                      
                  </Col>
                  <Col md={8} className="d-flex m-auto">
                    {/* <Button variant="primary" className=" text-center m-auto">GET QUOTE</Button> */}
                    <a className=" text-center m-auto" style={{textDecoration:"none"}} ><Button variant="primary" onClick={onSubmit} >GET QUOTE</Button></a>
                  </Col>
                </Row>  
              </Form>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}




export default Banner;
