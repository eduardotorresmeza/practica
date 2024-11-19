import React, { useState } from 'react';
import { Toast, ToastContainer, Button } from 'react-bootstrap';

function ToastRA() {
  const [show, setShow] = useState(false);

  return (
    <div className="mt-3">
      <h2>Notificaciones</h2>
      <Button onClick={() => setShow(true)}>
        Mostrar Notificación
      </Button>

      <ToastContainer position="top-end" className="p-3">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Proyecto RA</strong>
            <small>Hace 1 minuto</small>
          </Toast.Header>
          <Toast.Body>
            Nuevo recurso de Realidad Aumentada disponible
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default ToastRA;