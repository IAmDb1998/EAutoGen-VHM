import React ,{useState}from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import car_wireframe from "../../assets/img/car_wireframe.png";
import eautogen_product from "../../assets/img/eautogen_product.png";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CUSTO_DETAILS} from "../../mutations/userMutations";
import { useForm } from "../../utils/hooks";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function QuotationPart() {
     const navigate=useNavigate();
  const [errors, setErrors] = useState({});
    const { onChange, onSubmit, values } = useForm(handleSubmit, {
        name:`${localStorage.getItem("owner_name")}`,
        email:`${localStorage.getItem("owner_email")}`,
        mobile:`${localStorage.getItem("owner_mobile")}`,
        nric:"",
        state:"",
        
      });
  
    
   

    const [addUser, { loading }] = useMutation(CUSTO_DETAILS, {
      update(_, { data: { customerDetails: userData } }) {
        console.log("signup result ", userData);
        if (userData) {
          navigate("/pay");
        }
      },
     
      variables: values,
    });

    function handleSubmit () {
       console.log("hello")
    if(!values.email  || !values.name  
        || !values.mobile  || !values.nric || !values.state) 
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
       addUser();
    };
  return (
    <section className="py-5 mt-5">
    <ToastContainer/>
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-title mb-5">
              <span>get covered by autogen+</span>
              <h2>
                <span>YOUR</span> AUTOGEN PLUS LEAD <span>QUOTATION</span>{" "}
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Image src={car_wireframe} fluid />
          </Col>
          <Col md={6}>
            <div className="quot">
              <Image src={eautogen_product} fluid />
              <p className="mt-5">
                This is a computer generated quotation, no signature is
                required.{" "}
              </p>

              <Row>
                <Col md={4}>
                  <strong>Owner Name: </strong>
                </Col>
                <Col md={8}>
                  <p>{localStorage.getItem("owner_name")}</p>
                </Col>
                <Col md={4}>
                  <strong>Brand: </strong>
                </Col>
                <Col md={8}>
                  <p>{localStorage.getItem("owner_brand")}</p>
                </Col>
                <Col md={4}>
                  <strong>Year Make:</strong>
                </Col>
                <Col md={8}>
                  <p>{localStorage.getItem("owner_year")}</p>
                </Col>
                <Col md={4}>
                  <strong>Other input:</strong>
                </Col>
                <Col md={8}>
                  <p>Name</p>
                </Col>
              </Row>
            </div>
            <div className="customer_details">
              <h2>Customer Details</h2>
              <Row>
                <Col md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                       
                    name="name"
                required="required"
                value={values.name}
                onChange={onChange}
                     placeholder="e.g. Tan Eng" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Email </Form.Label>
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
                <Col md={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Mobile </Form.Label>
                    <Form.Control 
                       type="number"
                    name="mobile"
                required="required"
                value={values.mobile}
                onChange={onChange}
                    placeholder="e.g. 0123456789" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>NRIC Number </Form.Label>
                    <Form.Control type="number"
                    name="nric"
                required="required"
                value={values.nric}
                onChange={onChange}
                     placeholder="e.g. 0123456789" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>State</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={onChange} name="state">
                      <option>Open this select menu</option>
                      <option value="01">Johor</option>
    <option value="02">Kedah</option>
    <option value="03">Kelantan</option>
    <option value="14">Kuala Lumpur</option>
    <option value="15">Labuan</option>
    <option value="04">Melaka</option>
    <option value="05">Negeri Sembilan</option>
    <option value="06">Pahang</option>
    <option value="07">Penang</option>
    <option value="08">Perak</option>
    <option value="09">Perlis</option>
    <option value="16">Putrajaya</option>
    <option value="12">Sabah</option>
    <option value="13">Sarawak</option>
    <option value="10">Selangor</option>
    <option value="11">Terengganu</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={12}>
                    <strong>Get covered by AUTOGEN+ for only</strong>
                    <div className="section-title d-flex align-items-end">
                        <h2 className="mb-0">RM <span>{localStorage.getItem("owner_price")}</span>.00</h2><h5>/YEAR</h5>
                    </div>
                </Col>
                <Col md={12} className="d-flex m-auto">
                  <Form.Check
                      className="mb-3"
                    > <Form.Check.Input type="checkbox"  required="required" />
                    <Form.Check.Label>I HEREBY AGREE,,,,</Form.Check.Label>
                        </Form.Check>
                  </Col>
                  <Col md={12}>
                  <a style={{textDecoration:"none"}}><Button variant="primary" onClick={onSubmit}  className=" text-center m-auto">BUY NOW</Button></a>
                  </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default QuotationPart;
