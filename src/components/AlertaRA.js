import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

function AlertaRA() {
  const [show, setShow] = useState(true);

  return (
    <div className="mt-3">
      <h2>Estado de Proyectos</h2>
      {show && (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>¡Nuevo Proyecto de RA Iniciado!</Alert.Heading>
          <p>
            El Usuario Eduardo Torres Meza ha creado un proyecto de realidad aumentada
          </p>
        </Alert>
      )}
      <Button onClick={() => setShow(true)}>
        Restablecer Alerta
      </Button>
    </div>
  );
}

export default AlertaRA;