import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Hero from './Hero';
import ControlledCarousel from '../ControlledCarousel'

function Header() {
   return (
      <>
         <Navbar bg="dark" variant="dark"> 
            <Container>
               <Navbar.Brand><img class=" mb-0" src="img/svg/LogoMen.svg" height="48" alt="Logo"/></Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse>
                  <Nav>
                     <Nav.Link href="#directions">Основные направления</Nav.Link>
                     <Nav.Link href="#opport" >Решения для бизнеса</Nav.Link>
                     <Nav.Link href="#about" >О нас</Nav.Link>
                     <Nav.Link href="#features">Преимущества</Nav.Link>
                     <Nav.Link href="#projects">Проекты</Nav.Link>
                  </Nav>
                  <Button>Напишите нам</Button>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <Hero/>
         <ControlledCarousel/>
         
      </>
   )
}

export default Header;
