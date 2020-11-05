import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import ModalWindow from '../Modal';
import Hero from './Hero';
import ControlledCarousel from '../ControlledCarousel'

function Header() {
   return (
      <>
         <Navbar bg="dark" variant="dark" expand="lg"> 
            <Container>
               <Navbar.Brand className='py-0'><img src="img/svg/LogoMen.svg" height="48" alt="Logo"/></Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse>
                  <Nav className='mx-auto'>
                     <Nav.Link href="#directions">Основные направления</Nav.Link>
                     <Nav.Link href="#opport" >Решения для бизнеса</Nav.Link>
                     <Nav.Link href="#about" >О нас</Nav.Link>
                     <Nav.Link href="#features">Преимущества</Nav.Link>
                     <Nav.Link href="#projects">Проекты</Nav.Link>
                  </Nav>
                  {/* <Button variant='outline-light' className='send-email-btn'>Напишите нам</Button> */}
                  <ModalWindow/>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <Hero/>
         <ControlledCarousel/>
         
      </>
   )
}

export default Header;
