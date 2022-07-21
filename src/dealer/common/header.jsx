import React ,{useRef} from 'react'
import { Container, Image, Nav,Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from './../../assets/img/eutogen_logo.svg';
import '../../admin/style.css'
import Dropdown from "react-bootstrap/Dropdown";

function HeaderDelaer() {
  
    return ( <>
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
            <Dropdown>
              <Dropdown.Toggle
               
                id="dropdown-basic"
                className="dropdown_after"
              >
                Admin
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">
                  Edit Profile
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  {" "}
                 My Subscription
                </Dropdown.Item>
                <Dropdown.Item href="#/">
                  {" "}
                 Change Password
                </Dropdown.Item>
                <Dropdown.Item href="#/">
                  {" "}
                  Help Centre
                </Dropdown.Item>
                <Dropdown.Item href="#/">
                  {" "}
                  <button className="profile_logout">Log Out</button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
        <div className='login'>
        <Link to="/userprofile"> <i class="fa-regular fa-circle-user"></i></Link>|
       
        <Link to=""> EN</Link>

            <Link to=""> BM</Link>

        </div>
      </Container>
    </Navbar>
    </header>
    </> );
}

export default HeaderDelaer;