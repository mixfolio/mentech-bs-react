import React from 'react'
import {Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faMapMarkerAlt, faAt} from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/img/svg/LogoMen.svg';


function GetYear() {
   return new Date().getFullYear();
}

function Footer() {
   
   return (
      <footer className="bg-dark text-white text-center text-lg-left">
         <div className="container d-md-flex align-items-center justify-content-between py-3 px-0 flex-wrap">
            <img className="mb-3 mb-md-0" src={Logo} height="48" alt="Logo"/>
               <p className="font-weight-light m-md-0">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" style={{color: "#D04F45"}}/>
                  +7 (495) 374-82-46
               </p>
               <p className="font-weight-light m-md-0">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" style={{color: "#D04F45"}}/>
                  125009, г. Москва, ул. 1905 года, 7к1
               </p>
               <p className="font-weight-light m-md-0">
                  <FontAwesomeIcon icon={faAt} className="mr-2" style={{color: "#D04F45"}}/>
                  info@menplustech.ru
               </p>
         </div>
         <div className="text-center p-1 font-weight-light" style={{background: "#212121"}}>
            <span>&copy; <GetYear/></span> 
            <Nav.Link href='/' className="text-white d-inline-block" >MenTech</Nav.Link>
         </div>
      </footer>
   )
}


export default Footer
