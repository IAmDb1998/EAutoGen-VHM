import React, { useState } from "react";
import { Button, Col, Dropdown, Form, InputGroup, Pagination, Row, Table } from "react-bootstrap";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";

function Historypage() {
    let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
const [state, setState] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: "selection",
  },
]);
  return (
    <>
      <Row className="mt-5 justify-content-between">
        <Col md={3}>
          <InputGroup>
            <Form.Control aria-label="Search…" />
            <InputGroup.Text>
              <i class="fa-solid fa-magnifying-glass"></i>
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Col md={3}>
        <Dropdown  autoClose="outside" className="datepicker">
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-autoclose-outside">
        Last 7 days
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">
          <DateRangePicker
                  onChange={(item) => setState([item.selection])}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  ranges={state}
                  direction="horizontal"
                />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={12}>
          <Table striped bordered hover className="history">
            <thead>
              <tr>
                <th>Status</th>
                <th>Order Id</th>
                <th>Transaction Id</th>
                <th>Owner Name</th>
                <th>Vechile No</th>
                <th>Contact No</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Button variant="success" size="sm">
                    Paid
                  </Button>
                </td>
                <td>#12345</td>
                <td>#ABC1234567</td>
                <td>Muhammad Shafiq Bin Muhamad Ashriq</td>
                <td>WB7596P</td>
                <td>+60118947810</td>
                <td>20 Jul 2022</td>
                <td>20 Jul 2023</td>
                <td>RM5,000</td>
                <td>
                  <Button variant="link">
                    <i class="fa-solid fa-ellipsis"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Button variant="danger" size="sm">
                    Expired
                  </Button>
                </td>
                <td>#12345</td>
                <td>#ABC1234567</td>
                <td>Muhammad Shafiq Bin Muhamad Ashriq</td>
                <td>WB7596P</td>
                <td>+60118947810</td>
                <td>20 Jul 2022</td>
                <td>20 Jul 2023</td>
                <td>RM5,000</td>
                <td>
                  <Button variant="link">
                    <i class="fa-solid fa-ellipsis"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Button variant="warning" size="sm">
                    Unpaid
                  </Button>
                </td>
                <td>#12345</td>
                <td>#ABC1234567</td>
                <td>Muhammad Shafiq Bin Muhamad Ashriq</td>
                <td>WB7596P</td>
                <td>+60118947810</td>
                <td>20 Jul 2022</td>
                <td>20 Jul 2023</td>
                <td>RM5,000</td>
                <td>
                  <Button variant="link">
                    <i class="fa-solid fa-ellipsis"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Button variant="info" size="sm">
                    Draft
                  </Button>
                </td>
                <td>#12345</td>
                <td>#ABC1234567</td>
                <td>Muhammad Shafiq Bin Muhamad Ashriq</td>
                <td>WB7596P</td>
                <td>+60118947810</td>
                <td>20 Jul 2022</td>
                <td>20 Jul 2023</td>
                <td>RM5,000</td>
                <td>
                  <Button variant="link">
                    <i class="fa-solid fa-ellipsis"></i>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <Pagination size="sm" className="justify-content-end">{items}</Pagination>
        </Col>
      </Row>
    </>
  );
}

export default Historypage;
