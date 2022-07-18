import React ,{useRef} from 'react'
import { Container, Image, Nav,Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from './../../assets/img/eutogen_logo.svg';
import '../../admin/style.css'
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
            <NavLink className="nav-link" to="/">Admin</NavLink>
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