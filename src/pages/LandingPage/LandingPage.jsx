import React,{useRef} from 'react'
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Col, NavLink, Row,Button } from "react-bootstrap";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import Logo from "../../assets/img/header_bg.png";
import desk_logo from "../../assets/img/eutogen_logo.svg";
import { HassleFree } from './HassleFree/HassleFree';
import { BrandSlider } from './BrandSlider/BrandSlider';
import { CarEngine } from './CarEngine/CarEngine';
import { GirlInCar } from './GirlInCar/GirlInCar';
import { PeriodicCar } from './PeriodicCar/PeriodicCar';
import { LandingFaq } from './LandingFaq/LandingFaq';
import { Header } from '../../components/common/header';
import { HeroBg } from './HeroBg/HeroBg';
import { HowItWorks } from './HowItWorks/HowItWorks';
import { WorkshopOne } from './WorkshopOne/WorkshopOne';
import { WorkshopTwo } from './WorkshopTwo/WorkshopTwo';
import Footer from '../../components/common/footer';
import { useNavigate } from "react-router-dom";
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
import UserIcon from "./../../assets/img/autogen-icon.png";
import Logo2 from "./../../assets/img/eautogen_white.svg";
import Working from "./../../assets/img/workinghour.png";
import Location from "./../../assets/img/location.png";
import Email from "./../../assets/img/email.png";
import Phone from "./../../assets/img/phoneicon.png";
import Facebook from "./../../assets/img/face.png";
import Utube from "./../../assets/img/utube.png";
export const LandingPage = () => {

    const howitworks=useRef(null);
    const workshopone=useRef(null);
    const workshoptwo=useRef(null);
    const faq=useRef(null);
    const brandslider=useRef(null);
    const carengine=useRef(null);
    const girlincar=useRef(null);
    const periodiccar=useRef(null);
    const hasslefree=useRef(null);

    const scrollToSection = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    navigate("/");
  }
  return (
    <div>
    <ToastContainer />
    
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
                        <Dropdown.Item href="#/action-1" style={{fontSize:"12px",color:"#777777"}} onClick={() => scrollToSection(brandslider)}>
                          PROGRAM ELIGIBILITY
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1"  style={{fontSize:"12px",color:"#777777"}} onClick={() => scrollToSection(carengine)}>
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
                    onClick={() => scrollToSection(howitworks)}
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
                    onClick={() => scrollToSection(faq)}
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
                        <Dropdown.Item href="#/action-1"  style={{fontSize:"12px",color:"#777777"}}
                        onClick={() => scrollToSection(workshopone)}
                        >
                          AUTHORIZED PARTNER FOR <br /> PROGRAM ACTIVATION
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1"  style={{fontSize:"12px",color:"#777777"}}
                        onClick={() => scrollToSection(workshoptwo)}
                        >
                          PANEL WORKSHOP FOR CAR
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1"  style={{fontSize:"12px",color:"#777777"}}
                        onClick={() => scrollToSection(periodiccar)}
                        >
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
       <HeroBg/>
       <div ref={howitworks}>
       <HowItWorks/>
       </div>
      <div ref={brandslider}>
      <BrandSlider/>
      </div>
       <div ref={carengine}>
       <CarEngine/>
       </div>
      <div ref={girlincar}>
      <GirlInCar/>
      </div>
      <div ref={hasslefree}>
       <HassleFree/>
       </div>
       <div ref={periodiccar}>
        <PeriodicCar/>
       </div>
      
      
       <div ref={workshopone}>
       <WorkshopOne/>
       </div>
      <div ref={faq}>
      <LandingFaq/>
      </div>
      <div ref={workshoptwo}>
      <WorkshopTwo/>
      </div>
       
      <footer className="py-5">
      <Container>
        <Row>
          <Col className="pb-5">
            <Image src={Logo2} />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <strong className="pb-2 d-flex">
              EAUTOGEN CAPITAL SDN BHD (1402277-K){" "}
            </strong>
         
            <div style={{paddingBottom:"20px"}}>
            <Row>
           <Col md={2} >
            <Image src={Working} width="30px" height="30px"/>
           </Col>
           <Col md={10} >
              <p>Monday to Friday, excluding public holiday <br/>
9:00 AM to 6:00 PM</p>
           </Col>
           </Row>
           </div>


           <div style={{paddingBottom:"20px"}}>
            <Row>
           <Col md={2} >
            <Image src={Location} width="20px" height="20px"/>
           </Col>
           <Col md={10}>
              <p>D-26-3 Menara Suezcap 1, KL Gateway, <br/>
2, Jalan Kerinchi, 59200 Kuala Lumpur.</p>
           </Col>
            </Row>
</div>
            <div style={{paddingBottom:"20px"}}>
            <Row>
           <Col md={2} >
            <Image src={Email} width="20px" height="20px"/>
           </Col>
           <Col md={10} className="m-auto">
              <p>cs@eautogen.my</p>
           </Col>
            </Row>
            </div>
            <div style={{paddingBottom:"20px"}}>
            <Row>
           <Col md={2} >
            <Image src={Phone} width="20px" height="20px"/>
           </Col>
           <Col md={10}>
              <p>+603-7931 3663</p>
           </Col>
            </Row>
           </div>
          </Col>

          
          
          
          <Col md={3}>
            
            <ul>
            <li>
                <NavLink to=""><strong className="pb-2  d-flex">AUTOGEN Plus</strong></NavLink>
              </li>
              <li>
                <NavLink onClick={() => scrollToSection(brandslider)}>About AutoGen Plus</NavLink>
              </li>
              <li>
                <NavLink onClick={() => scrollToSection(howitworks)}>How It Works</NavLink>
              </li>
              <li>
                <NavLink onClick={() => scrollToSection(faq)}>Frequently Asked Questions</NavLink>
              </li>
             
            </ul>
          </Col>
          <Col md={3}>
            
            <ul>
              <li>
                <NavLink to=""><strong className="pb-2 d-flex">Locate Us</strong></NavLink>
              </li>
              <li>
                <NavLink onClick={() => scrollToSection(workshopone)}>Authorised Partners For Program</NavLink>
              </li>
              <li>
                <NavLink onClick={() => scrollToSection(hasslefree)}>Activation</NavLink>
              </li>
              <li>
                <NavLink onClick={() => scrollToSection(workshoptwo)}>Panel Workshops For Car</NavLink>
              </li>
              <li>
                <NavLink onClick={() => scrollToSection(periodiccar)}>Maintenance And Repair Work</NavLink>
              </li>
            </ul>
          </Col>
          <Col md={2}>
           
            <ul>
            <li>
                <NavLink to=""> <strong className="pb-2 d-flex">Quick Links</strong></NavLink>
              </li>
              <li>
                <NavLink to="">Terms & Conditions</NavLink>
              </li>
              <li>
                <NavLink href="/privacy-policy">Privacy Policy </NavLink>
              </li>
              <li>
                <NavLink to="">Refund Policy </NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
      <Row className="text-center d-flex justify-content-center">
      
        <Col md={2}  className="m-0 p-0 text-center d-flex justify-content-center">
        <p style={{fontWeight:"bold"}}>Find Us On :</p> 
        <Image className="m-1 p-0  " src={Facebook} width="20px" height="20px"/>
        <Image  className="m-1 p-0  " src={Utube} width="20px" height="20px"/>
        </Col>
        {/* <Col md={1} className="m-0 p-0">
       
        </Col>
        <Col md={1} className="m-0 p-0">
       
        </Col>
      */}
       
      </Row>
      </Container>
      <div className="footer-bottom">
        <p>COPYRIGHT © 2022 EAUTOGEN CAPITAL SDN BHD. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
     
       

    </div>
  )
}
