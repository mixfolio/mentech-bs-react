import React from 'react';
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faLaptopCode, faBrain, faShieldAlt, faChartPie, faMoneyBill, faCog, faKeyboard } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <section className=" text-center py-5 bg-black" id="about">

      <Container>

        <h2 className="text-light font-weight-light" data-aos="fade-down">О нас</h2>
        <h4 className="text-white-50 mb-5 font-weight-light" data-aos="fade-up"><span className="font-weight-normal" style={{color: "#D04F45"}}>30+
            специалистов,</span><br/> работающих в распределенных командах</h4>
        <Row className="text-white-50">
          <Col sm={6} md={3}>
            <h5 className="mb-5 font-weight-light text-light" data-aos="zoom-in">
              <FontAwesomeIcon icon={faDatabase} className="fa-lg mb-3" />
              {/* <i className="fas fa-database fa-lg d-block mb-3" style="color: #D04F45"></i> */}
                Data Scientist
            </h5>
            <h5 className="mb-5 font-weight-light text-light" data-aos="zoom-in">
              <FontAwesomeIcon icon={faCog} className="fa-lg mb-3" />
              DevOps-инженеры
            </h5>
          </Col>

          <Col sm={6} md={3}>
            <h5 className="mb-5 font-weight-light text-light" data-aos="zoom-in">
              <FontAwesomeIcon icon={faLaptopCode} className="fa-lg mb-3" />
              Разработчики
            </h5>
            <h5 className="mb-5 font-weight-light text-light" data-aos="zoom-in">
              <FontAwesomeIcon icon={faBrain} className="fa-lg mb-3" />
              Аналитики
            </h5>
          </Col>

          <Col sm={6} md={3}>
            <h5 className="mb-5 font-weight-light text-light" data-aos="zoom-in">
              <FontAwesomeIcon icon={faChartPie} className="fa-lg mb-3" />
                Data Engineer
            </h5>
            <h5 className="mb-5 font-weight-light text-light" data-aos="zoom-in">
              <FontAwesomeIcon icon={faShieldAlt} className="fa-lg mb-3" />
                Эксперты по технологиям и кибербезопасности
            </h5>
          </Col>

          <Col sm={6} md={3}>

            <h5 className="mb-5 font-weight-light text-light" data-aos="zoom-in">
              <FontAwesomeIcon icon={faMoneyBill} className="fa-lg mb-3" />
                Проектные менеджеры
            </h5>

            <h5 className="mb-5 font-weight-light text-light" data-aos="zoom-in">
              <FontAwesomeIcon icon={faKeyboard} className="fa-lg mb-3" />
              QA-специалисты
            </h5>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
