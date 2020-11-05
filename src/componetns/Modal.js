import React, { useState } from 'react';
import { Col, Form, Modal, Button } from 'react-bootstrap';


function ModalWindow() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='outline-light' className='send-email-btn' onClick={handleShow}>
        Напишите нам
         </Button>
      {/* <Button variant="primary" onClick={handleShow}>
         Launch demo modal
       </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: '#D04F45' }}>Отправить сообщение</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} sm={12} controlId="formName">
                <Form.Label>ФИО</Form.Label>
                <Form.Control type="text" placeholder="ФИО" />
              </Form.Group >
              <Form.Group as={Col} md={6} controlId="formPhone">
                <Form.Label>Телефон</Form.Label>
                <Form.Control type="tel" placeholder="Номер телефона" />
              </Form.Group>
              <Form.Group as={Col} md={6} controlId="formMail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="mail" placeholder="E-mail" />
              </Form.Group>
              <Form.Group as={Col} sm={12} controlId="formMessage">
                <Form.Label>Сообщение</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Введите сообщение" />
              </Form.Group>
              <Form.Group controlId="formCheckbox">
                <Form.Check type="checkbox" label=" Отправляя форму, вы подтверждаете, что ознакомлены с политикой кофиденциальности " />
              </Form.Group>

            </Form.Row>
            <div className="text-right">
              <Button variant="outline-light" onClick={handleClose}>
                Отменить
              </Button>
              <Button variant="error" className="ml-3" onClick={handleClose}>
                Отправить
              </Button>
            </div>
            

          </Form>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default ModalWindow;