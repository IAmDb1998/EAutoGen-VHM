import React ,{useRef} from 'react'
import { Container, Image, Nav,Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from './../../../assets/img/eutogen_logo.svg';
import '../../style.css'
function Header() {
  
    return ( <>
    <header className='header-admin'>
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
            <Image src={Logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/admin/buyplan">Buy Plan</NavLink>
            <NavLink className="nav-link" to="/">Admin</NavLink>
          </Nav>
        </Navbar.Collapse>
        <div className='login'>
        <i class="fa-regular fa-circle-user"></i>
            <Link to="">EN</Link>|
            <Link to=""> BM</Link>

        </div>
      </Container>
    </Navbar>
    </header>
    </> );
}

export default Header;