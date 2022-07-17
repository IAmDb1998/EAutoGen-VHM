import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Card() {
    return (<>
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
                      name="text"
                      required="required"
                      placeholder="e.g. Tan Eng Wai"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                    Card Number  <span className="text-danger">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      required="required"
                      placeholder="e.g. 1234 5678 9012 3456"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                    Expired Date <span className="text-danger">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      required="required"
                      placeholder="e.g. 01/27"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                    CVC Number <span className="text-danger">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      required="required"
                      placeholder="e.g. 123"
                    />
                  </Form.Group>
                </Form>
    </>  );
}

export default Card;