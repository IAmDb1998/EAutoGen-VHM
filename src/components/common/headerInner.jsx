import React from 'react'
import { Container, Image, Nav,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './../../assets/img/eutogen_logo.svg'
function HeaderInnner() {
    return (  <header>
        <Navbar fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="/">
              <Image src={Logo}/>
          </Navbar.Brand>
         
          <div className='login ms-auto'>
          <i class="fa-regular fa-circle-user"></i>
              <Link to="">EN</Link>|
              <Link to=""> BM</Link>
  
          </div>
        </Container>
      </Navbar>
      </header> );
}

export default HeaderInnner;