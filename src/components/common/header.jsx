import React, { useRef } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./../../assets/img/header_bg.png";
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
import { Row, Col, Button } from "react-bootstrap";
import { ChakraProvider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import UserIcon from "./../../assets/img/autogen-icon.png";
import Dropdown from "react-bootstrap/Dropdown";
export function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    navigate("/");
  }
  return (
    <>
      <ChakraProvider>
        <header>
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="/">
                <Image  src={Logo} / >
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                  <Nav.Link href="#home">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="Primary"
                        id="dropdown-basic"
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                       AUTOGEN PLUS
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" style={{fontSize:"12px",color:"#777777"}}>
                          PROGRAM ELIGIBILITY
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1"  style={{fontSize:"12px",color:"#777777"}}>
                          PROGRAM COVERAGE & REQUIREMENT
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav.Link>

                  <Nav.Link
                    href="#link"
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginTop: "7px",
                     
                    }}
                    
                  >
                    HOW IT WORKS
                  </Nav.Link>
                  <Nav.Link
                    href="#link"
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginTop: "7px",
                      marginLeft: "5px",
                    }}
                  >
                    FAQ
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="Primary"
                        id="dropdown-basic"
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        LOCATE
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"  style={{fontSize:"12px",color:"#777777"}}>
                          AUTHORIZED PARTNER FOR <br /> PROGRAM ACTIVATION
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1"  style={{fontSize:"12px",color:"#777777"}}>
                          PANEL WORKSHOP FOR CAR
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1"  style={{fontSize:"12px",color:"#777777"}}>
                          MAINTENANCE AND REPAIR WORK
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <div className="login">
                {localStorage.getItem("userId") ? (
                  <Menu>
                    <MenuButton>
                      {" "}
                      <i style={{margin:"20px"}} class="fa-regular fa-circle-user"></i>
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <Row>
                          <Col md={5}>
                            <Image src={UserIcon} />
                          </Col>
                          <Col md={7}>
                            <p
                              style={{
                                fontSize: "10px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              {localStorage.getItem("owner_name")}Steve
                            </p>
                            <p
                              style={{
                                fontSize: "10px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              Your Plan
                            </p>
                            <p
                              style={{
                                fontSize: "10px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              Expiry Date:26 May
                            </p>
                            <p
                              style={{
                                fontSize: "10px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              Active
                            </p>
                          </Col>
                        </Row>
                      </MenuItem>
                      <MenuItem onClick={() => navigate("/userprofile")}>
                        Edit Profile
                      </MenuItem>
                      <MenuItem onClick={() => navigate("/privacy-policy")}>
                        Privacy Policy
                      </MenuItem>
                      <MenuItem>
                        <Button
                          variant="primary"
                          style={{
                            width: "100%",
                            padding: "2px",
                            border: "2px solid #22BBB9",
                          }}
                          onClick={handleLogout}
                        >
                          Logout
                        </Button>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                ) : (
                  <Menu>
                    <MenuButton>
                      {" "}
                      <i class="fa-regular fa-circle-user"></i>
                    </MenuButton>
                    <MenuList>
                      <Image
                        src={UserIcon}
                        style={{
                          width: "70px",
                          display: "flex",
                          margin: "auto",
                        }}
                      />

                      {/* <Col md={7}>
                                     <p style={{fontSize:"10px",margin:"0px",padding:"0px"}}>{localStorage.getItem("owner_name")}Steve</p>
                                     <p style={{fontSize:"10px",margin:"0px",padding:"0px"}}>Your Plan</p>
                                     <p style={{fontSize:"10px",margin:"0px",padding:"0px"}}>Expiry Date:26 May</p>
                                     <p style={{fontSize:"10px",margin:"0px",padding:"0px"}}>Active</p>
                                </Col> */}

                      {/* <MenuItem onClick={()=>navigate("/userprofile")} >Edit Profile</MenuItem>
                            <MenuItem onClick={()=>navigate("/privacy-policy")} >Privacy Policy</MenuItem> */}
                      <MenuItem>
                        <Button
                          variant="primary"
                          style={{
                            width: "100%",
                            padding: "2px",
                            border: "2px solid #22BBB9",
                          }}
                          onClick={() => navigate("/login")}
                        >
                          Login
                        </Button>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                )}
                <Link to="">EN</Link>|<Link to=""> BM</Link>
              </div>
            </Container>
          </Navbar>
        </header>
      </ChakraProvider>
    </>
  );
}
