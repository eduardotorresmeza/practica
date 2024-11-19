import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

function ModalRA() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mt-3">
      <h2>Detalles de Proyecto</h2>
      <Button variant="primary" onClick={handleShow}>
        Ver Detalles del Proyecto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Proyecto de Realidad Aumentada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Header>Información del Proyecto</Card.Header>
            <Card.Body>
              <Card.Title>Aplicación de RA para Educación</Card.Title>
              <Card.Text>
                Proyecto innovador que utiliza Realidad Aumentada 
                para mejorar la experiencia de aprendizaje.
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalRA;