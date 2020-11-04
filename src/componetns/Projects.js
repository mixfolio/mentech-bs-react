import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Projects() {
   return (
      <section className=" text-center py-5 bg-black" id="projects">
         <Container>
            <h2 className="mb-5 text-light font-weight-light" data-aos="fade-down">Реализованные проекты</h2>
            <Row className="gy-3">


               <Col lg={4}>
                  <div className="project-card mx-auto" data-aos="zoom-in">
                     <div className="project-card-body p-3">
                        <h6 className="text-white font-weight-light"><span className="display-2 d-block" style={{ color: "#D04F45" }}>21</span> Разработанная <br/>система</h6>
                     </div>
                  </div>
               </Col>

               <Col lg={4}>
                  <div className="project-card mx-auto" data-aos="zoom-in">
                     <div className="project-card-body p-3">
                        <h6 className="text-white font-weight-light"><span className="display-2 d-block" style={{ color: "#D04F45" }}>37</span>Внедренных решений на <br/>основе ИИ</h6>
                     </div>
                  </div>
               </Col>


               <Col lg={4}>
                  <div className="project-card mx-auto" data-aos="zoom-in">
                     <div className="project-card-body p-3">
                        <h6 className="text-white font-weight-light"><span className="display-2 d-block" style={{ color: "#D04F45" }}>11</span>Решений <br/>для цифровизации <br/>промышленности</h6>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default Projects
