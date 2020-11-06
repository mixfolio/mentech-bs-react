import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Row, Card, Col } from 'react-bootstrap';

import BrainImg from '../assets/img/svg/brain-ico.svg';
import EyeImg from '../assets/img/svg/eye_outlined.svg';
import HeadChipImg from '../assets/img/svg/head-chip-ico.svg';
import AIImg from '../assets/img/svg/ai-ico.svg';
import VRImg from '../assets/img/svg/vr-ico.svg';
import MobilityImg from '../assets/img/svg/mobility-ico.svg';

function Directions() {
   return (

      <section className=" text-center py-5 bg-black" id="directions">
         <Container>
            <ScrollAnimation animateIn="fadeIn">
               <h2 className="mb-3 text-light font-weight-light" data-aos="fade-down">Основные направления</h2>
            </ScrollAnimation>

            <Row className="gy-4 text-white-50">
               <Col xl={4} lg={6} data-aos="fade-in">
                  <Card bg="dark" className="h-100 pt-4">
                     <img src={BrainImg} alt="brain" height="64" />
                     <Card.Body>
                        <h5 className="font-weight-normal text-light">Прогнозные и рекомендательные системы</h5>
                        <p className="card-text font-weight-light">Системы прогнозирования, построенные на интеллектуальном анализе данных и машинном обучении</p>
                     </Card.Body>
                  </Card>
               </Col>

               <Col xl={4} lg={6} data-aos="fade-in">
                  <Card bg="dark" className="h-100 pt-4">
                     <img alt="eye" src={EyeImg} height="64" />
                     <Card.Body>
                        <h5 className="font-weight-normal text-light">Машинное зрение и видеоаналитика</h5>
                        <p className="card-text font-weight-light">Решения на основе машинного зрения обработка и анализ оптического потока (распознавание предметов, эмоций человека, контроль усталости)</p>
                     </Card.Body>
                  </Card>
               </Col>

               <Col xl={4} lg={6} data-aos="fade-in">
                  <Card bg="dark" className="h-100 pt-4">
                  <img alt="head-chip" src={HeadChipImg} height="64" />
                     <Card.Body>
                        <h5 className="font-weight-normal text-light">Цифровые двойники</h5>
                        <p className="card-text font-weight-light">Разработка цифровых двойников предприятий, технологических процессов, прототипов и изделий</p>
                     </Card.Body>
                  </Card>
               </Col>

               <Col xl={4} lg={6} data-aos="fade-in">
                  <Card bg="dark" className="h-100 pt-4">
                  <img alt="ai" src={AIImg} height="64" />
                     <Card.Body>
                        <h5 className="font-weight-normal text-light">Разработка программных продуктов и решений</h5>
                        <p className="card-text font-weight-light">Разработка и внедрение интеллектуальных решений для различных отраслей промышленности</p>
                     </Card.Body>
                  </Card>
               </Col>

               <Col xl={4} lg={6} data-aos="fade-in">
                  <Card bg="dark" className="h-100 pt-4">
                     <img alt="vr" src={VRImg} height="64" />
                     <Card.Body>
                        <h5 className="font-weight-normal text-light">Технологический скаутинг</h5>
                        <p className="card-text font-weight-light">Поиск на рынке новых решений и технологий, которые могут быть внедрены в работу вашей компании. Это источник стартапов и команд для инвестирования, аутсорсинга, запуска совместных проектов</p>
                     </Card.Body>
                  </Card>
               </Col>

               <Col xl={4} lg={6}>
                  <div className="card bg-dark h-100 pt-4">
                  <img alt="mobility" src={MobilityImg} height="64" />
                     <Card.Body>
                        <h5 className="font-weight-normal text-light">Интеграция цифровых технологий в производство</h5>
                        <p className="card-text font-weight-light">Использование прорывных технологий и цифровых ресурсов для преобразования производственных процессов</p>
                     </Card.Body>
                  </div>
               </Col>

            </Row>
         </Container>
      </section>

   )
}

export default Directions;
