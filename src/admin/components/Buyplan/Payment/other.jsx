import React from 'react';
import { Form, Image, ListGroup } from 'react-bootstrap';
import Maybank from "../../../../assets/img/Maybank.png";

function OtherPayment() {
    return (  <ListGroup>
        <ListGroup.Item>
          <Form.Check type="radio" id="maybank">
            <Form.Check.Input type="radio" name="online" />
            <Form.Check.Label>
              <Image src={Maybank} /> Maybank
            </Form.Check.Label>
          </Form.Check>
        </ListGroup.Item>
        <ListGroup.Item> <Form.Check type="radio" id="maybank">
            <Form.Check.Input type="radio" name="online" />
            <Form.Check.Label>
              <Image src={Maybank} /> Maybank
            </Form.Check.Label>
          </Form.Check></ListGroup.Item>
      </ListGroup>);
}

export default OtherPayment