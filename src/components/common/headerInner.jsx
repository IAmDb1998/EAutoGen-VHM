import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './../../assets/img/eutogen_logo.svg'
function HeaderInnner() {
  return (
    <header>
      <Navbar  expand="lg" style={{ borderBottom:"3px solid black"}} >
        <Container>
          <Navbar.Brand href="/">
            <Image src={Logo} />
          </Navbar.Brand>

          <div className='login ms-auto'>
            <i class="fa-regular fa-circle-user" style={{color:"black"}}></i>
            <Link  style={{color:"black"}} to="">EN</Link>|
            <Link  style={{color:"black",borderLeft: "1px solid black" }} to=""> BM</Link>

          </div>
        </Container>
      </Navbar>
    </header>
  );
}

export default HeaderInnner;