import React, { useEffect,useState } from "react";
import Header from "../../admin/components/common/header";
import debounce from 'lodash.debounce';
import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  InputGroup,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import { CreateUserForm } from "./CreateUserForm/CreateUserForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { GETALLDEALERUSERS } from "../../queries/userQueries";
import { useQuery } from "@apollo/react-hooks";
import { Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import {
  Menu, 
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';


export const Dealeradmin = () => {
    const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  const [value, setValue] = React.useState("");

  const [modal, setModal] = React.useState(false);

  const [show, setShow] = useState(false);

  
 
  const toggle = () => setModal(!modal);

  const createdByuserId = localStorage.getItem("userId");
  var { data } = useQuery(GETALLDEALERUSERS, {
    variables: { createdByuserId },
  });
  const dealer_user_data = data?.getAllUserCreatedByAdmin?.allUserRes;
  // console.log("dealer_user_data",dealer_user_data)
  const [curr, setCurr] = useState(null);
  

  
  function handleDetails(id) {
    let temp = dealer_user_data?.filter((item) => {
        if (item.id === id) {
          return item;
        }
      });
      setCurr(temp);
   
  }
  console.log("curr",curr)

  const [searchTerm, setSearchTerm] = useState("");




  return (
    <div>
     
      <ChakraProvider>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Delete User</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>Are you sure? You can't undo this action afterwards.</MDBModalBody>

          <MDBModalFooter>
            <Button color='secondary' onClick={toggleShow}>
              Cancel
            </Button>
            <Button color='secondary' onClick={toggleShow}>Delete</Button>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
        <Header />

        <Modal isOpen={modal} toggle={toggle} className="modal-dialog modal-lg">
          <ModalBody>
            <Row>
              <Col md={11}>
                <h1>Create New User</h1>
                <p>You're about to change user status.</p>
              </Col>
              <Col md={1} className="justify-content-end">
                <i onClick={toggle} class="fa fa-remove"></i>
              </Col>
            </Row>

            <CreateUserForm />
          </ModalBody>
        </Modal>
        <Container>
        <Row >
            <Col md={6}>
               
                { curr===null? null :
                <table  style={{width:"100%"}}>
                <h1>User Details</h1>
  <tr >
    <th>ID Number</th>
    <td >{curr[0].id}</td>
  </tr>
  <tr>
    <th>User Name</th>
    <td>{curr[0].name}</td>
  </tr>
  <tr>
    <th>Email</th>
    <td>{curr[0].email}</td>
  </tr>
  <tr>
    <th>Role Types</th>
    <td>{curr[0].role}</td>
  </tr>
  <tr>
    <th>Status</th>
    <td>{curr[0].status}</td>
  </tr>
</table>
                }
            </Col>
        </Row>
        </Container>
        <Container fluid>
          <Row className="mt-5 justify-content-between">
            <Col md={3}>
              <InputGroup>
                <Form.Control
                  aria-label="Search…"
                  
                  
                />
                <InputGroup.Text>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col>
              <Button
                className=" gap-2 mb-3 float-end"
                variant="secondary"
                onClick={toggle}
              >
                Create User
              </Button>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={12}>
              <Table striped bordered hover className="history">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th> Id Number</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Contact No</th>
                    <th>Role Types</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dealer_user_data?.map((p, ind) => (
                    <tr key={ind}>
                      <td>{p.status}</td>
                      <td>{p.id}</td>
                      <td>{p.name}</td>
                      <td>{p.email}</td>
                      <td>{p.mobile}</td>
                      <td>{p.role}</td>
                      <td>
                        <Menu>
                          <MenuButton>
                            {" "}
                            <i class="fa-solid fa-ellipsis"></i>
                          </MenuButton>
                          <MenuList>
                            <MenuItem onClick={()=>handleDetails(p.id)}>View User Details</MenuItem>
                            <MenuItem onClick={toggle}>Edit User</MenuItem>
                            <MenuItem onClick={toggleShow} >Delete</MenuItem>
                           
                          </MenuList>
                        </Menu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Pagination
                size="sm"
                className="justify-content-end"
              ></Pagination>
            </Col>
          </Row>
        </Container>
      </ChakraProvider>
    </div>
  );
};
