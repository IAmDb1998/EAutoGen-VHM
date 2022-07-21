import React ,{useRef} from 'react'
import { Container, Image, Nav,Navbar } from 'react-bootstrap';
import { Link, NavLink,useNavigate } from 'react-router-dom';
import Logo from '../../../assets/img/eutogen_logo.svg';
import '../../../admin/style.css'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import {Row,Col,Button} from 'react-bootstrap'
import { ChakraProvider } from "@chakra-ui/react";
import UserIcon from '../../../assets/img/autogen-icon.png';
function HeaderDelaer() {
  const navigate=useNavigate()
    return ( <>
    <ChakraProvider>
    <header className='header-admin'>
      <Navbar expand="xl">
      <Container >
        <Navbar.Brand href="/">
            <Image src={Logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/buyplan">Buy Plan</NavLink>
            <NavLink className="nav-link" to="/dealer-admin">Admin</NavLink>
           
          </Nav>
        </Navbar.Collapse>
        <div className='login'>
       
        <Menu>
                          <MenuButton>
                            {" "}
                            <i class="fa-regular fa-circle-user"></i>
                          </MenuButton>
                          <MenuList>
                            <MenuItem >
                              <Row>
                                <Col md={5}>
                                <Image src={UserIcon}/>
                                </Col>
                                <Col md={7}>
                                     <p style={{fontSize:"10px",margin:"0px",padding:"0px"}}>{localStorage.getItem("owner_name")}Steve</p>
                                     <p style={{fontSize:"10px",margin:"0px",padding:"0px"}}>Your Plan</p>
                                     <p style={{fontSize:"10px",margin:"0px",padding:"0px"}}>Expiry Date:26 May</p>
                                     <p style={{fontSize:"10px",margin:"0px",padding:"0px"}}>Active</p>
                                </Col>
                              </Row>
                            </MenuItem>
                            <MenuItem onClick={()=>navigate("/userprofile")} >Edit Profile</MenuItem>
                            <MenuItem onClick={()=>navigate("/privacy-policy")} >Privacy Policy</MenuItem>
                            <MenuItem  ><Button variant="primary" style={{width:"100%",padding:"2px",border:"2px solid #22BBB9",}}>Logout</Button></MenuItem>
                           
                          </MenuList>
                        </Menu>
            
        <Link to=""> EN</Link>

            <Link to=""> BM</Link>

        </div>
      </Container>
    </Navbar>
    </header>
    </ChakraProvider>
    </> );
}

export default HeaderDelaer;