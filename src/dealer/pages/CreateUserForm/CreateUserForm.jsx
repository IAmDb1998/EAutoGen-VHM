import React ,{useState} from 'react'
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DEALER_USER } from "../../../mutations/userMutations";
import { useForm } from "../../../utils/hooks";
import { ToastContainer, toast } from "react-toastify";
export const CreateUserForm = () => {
    const [errors, setErrors] = useState({});
  
  const { onChange, onSubmit, values } = useForm(handleSubmit, {
    name:"",
    email:"",
    mobile:"",
    role:"",
    status:"",
    createdBy:`${localStorage.getItem("userId")}`,
  });

  // const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const [addUser, { loading }] = useMutation( DEALER_USER,{
    update(_, { data: { userCreateByDealer: userData } }) {
      console.log("signup result ", userData);
      
      

      if (userData) {
        toast("User Created Successfully");
      }
       
    },
    onError(err) {
      setErrors(err);
      toast(err.message);
    },
    variables: values,
  });

  function handleSubmit() {
    //  console.log("hello")
    if (!values.email || !values.name || !values.mobile || !values.role || !values.status) {
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
   
       <div  >
                <div >

                 <ToastContainer />
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>
                       User Name <span className="text-danger">*</span>{" "}
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
                        Contact No<span className="text-danger">*</span>{" "}
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
                    <Form.Group
                className="mb-3 "
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Role Types</Form.Label>

                <Form.Select
                  onChange={onChange}
                  name="role"
                  id="fruit-select"
                >
                
                  <option value="staff">Staff</option>
                  <option value="admin">Admin</option>
                 
                </Form.Select>
                <Form.Group
                className="mb-3 "
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Status</Form.Label>

                <Form.Select
                  onChange={onChange}
                  name="status"
                  id="fruit-select"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                 
                </Form.Select>
              </Form.Group>
              </Form.Group>
                  
                    <div className="text-right gap-2 mb-3 float-end">
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
   
  )
}
