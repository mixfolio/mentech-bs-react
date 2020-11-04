import React from 'react';
import './Features.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faAward, faCubes, faHandshake } from '@fortawesome/free-solid-svg-icons';

function Features() {
   return (
      <section className=" text-center bg-dark py-5" id="features">
         <Container>
            <h2 className="mb-5 text-light font-weight-light" data-aos="fade-down">Преимущества</h2>
            <Row className="gy-4">

               <Col lg={6} xl={3} data-aos="zoom-in">
                  <div className="h-100">
                     <div>
                        <FontAwesomeIcon icon={faLightbulb} className="fa-3x" />
                     </div>
                     <Card.Body>
                        <h4 className="text-white font-weight-normal">Эффективность</h4>
                        <div className="font-weight-normal text-white-50">Повышаем эффективность производства, внедряя цифровые
                  решения</div>
                     </Card.Body>
                  </div>
               </Col>

               <Col lg={6} xl={3} data-aos="zoom-in">
                  <div className="h-100">
                     <div>
                        <FontAwesomeIcon icon={faAward} className="fa-3x" />
                     </div>
                     <Card.Body>
                        <h4 className="text-white font-weight-normal">Экспертность</h4>
                        <div className="font-weight-normal text-white-50">Наши специалисты отлично разбираются как в производстве,
                        так и в технологиях
                        </div>
                     </Card.Body>
                  </div>
               </Col>

               <Col lg={6} xl={3} data-aos="zoom-in">
                  <div className="h-100">
                     <div>
                        <FontAwesomeIcon icon={faCubes} className="fa-3x" />
                     </div>
                     <Card.Body>
                        <h4 className="text-white font-weight-normal">Системный подход</h4>
                        <div className="font-weight-normal text-white-50">Мы являемся системным интегратором цифровых решений для
                  промышленности</div>
                     </Card.Body>
                  </div>
               </Col>

               <Col lg={6} xl={3} data-aos="zoom-in">
                  <div className="h-100">
                     <div>
                        <FontAwesomeIcon icon={faHandshake} className="fa-3x" />
                     </div>
                     <Card.Body>
                        <h4 className="text-white font-weight-normal">Взаимоотношения</h4>
                        <div className="font-weight-normal text-white-50">Гибкость в формате взаимоотношений</div>
                     </Card.Body>
                  </div>
               </Col>

            </Row>
         </Container>
      </section>
   )
}

export default Features;
