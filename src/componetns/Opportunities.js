import React from 'react';
import './Opportunities.css'
import {Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faEye, faLaptop, faMicrochip, faChartPie, faChartLine, faCog, faTabletAlt } from '@fortawesome/free-solid-svg-icons'


function Opportunities() {
   return (
      <section className=" text-center py-5 bg-dark" id="opport">
      <Container>
        <h2 className="mb-5 text-light font-weight-light" data-aos="fade-down">Решения для вашего бизнеса</h2>
        <Row className="text-white-50">
          <Col lg={6}>
 
            <h5 className="mb-3 font-weight-light text-light p-4" data-aos="zoom-in">
               <FontAwesomeIcon icon={faRobot} className="fa-lg mb-3"/>
               Интеллектуальные помощники
            </h5>

            <h5 className="mb-3 font-weight-light text-light p-4" data-aos="zoom-in">
               <FontAwesomeIcon icon={faEye} className="fa-lg mb-3"/>
               AR/VR решения
            </h5>

            <h5 className="mb-3 font-weight-light text-light p-4" data-aos="zoom-in">
               <FontAwesomeIcon icon={faLaptop} className="fa-lg mb-3"/>
               Разработка информационных систем
            </h5>

            <h5 className="mb-3 font-weight-light text-light p-4" data-aos="zoom-in">
               <FontAwesomeIcon icon={faMicrochip} className="fa-lg mb-3"/>
               Цифровизация бизнес-процессов
            </h5>
   
          </Col>


          <Col lg={6}>

            <h5 className="mb-3 font-weight-light text-light p-4" data-aos="zoom-in">
               <FontAwesomeIcon icon={faChartPie} className="fa-lg mb-3"/>
               Технологический и бизнес-консалтинг
            </h5>

            <h5 className="mb-3 font-weight-light text-light p-4" data-aos="zoom-in">
               <FontAwesomeIcon icon={faChartLine} className="fa-lg mb-3"/>
               Разработка стратегии цифровой трансформации
            </h5>

            <h5 className="mb-3 font-weight-light text-light p-4" data-aos="zoom-in">
               <FontAwesomeIcon icon={faCog} className="fa-lg mb-3"/>
              Создание новых цифровых бизнес-моделей
            </h5>

            <h5 className="mb-3 font-weight-light text-light p-4" data-aos="zoom-in">
               <FontAwesomeIcon icon={faTabletAlt} className="fa-lg mb-3"/>
              Мобильные решения
            </h5>

          </Col>

        </Row>
      </Container>
    </section>
   )
}

export default Opportunities;
