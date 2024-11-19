import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function RegistroUsuario({ onAgregarUsuario }) {
  const [usuario, setUsuario] = useState({
    nombres: '',
    apellidos: '',
    edad: '',
    pais: '',
    distrito: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregarUsuario(usuario); 
    setUsuario({ nombres: '', apellidos: '', edad: '', pais: '', distrito: '' }); 
  };

  return (
    <div className="mt-3">
      <h2>Registro de Usuario</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Nombres</Form.Label>
              <Form.Control
                type="text"
                name="nombres"
                value={usuario.nombres}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                name="apellidos"
                value={usuario.apellidos}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form.Group>
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="number"
                name="edad"
                value={usuario.edad}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>País</Form.Label>
              <Form.Control
                type="text"
                name="pais"
                value={usuario.pais}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Distrito</Form.Label>
              <Form.Control
                type="text"
                name="distrito"
                value={usuario.distrito}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="mt-3">
          Registrar
        </Button>
      </Form>
    </div>
  );
}

export default RegistroUsuario;
