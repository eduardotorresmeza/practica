import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import RegistroUsuario from './RegistroUsuario'; // Importamos el componente RegistroUsuario

function ListaProyectos() {
  const [proyectos, setProyectos] = useState([
    {
      id: 1,
      nombre: 'App Educativa RA',
      tecnologia: 'ARKit',
      estado: 'En Desarrollo',
    },
    {
      id: 2,
      nombre: 'Museo Virtual',
      tecnologia: 'Vuforia',
      estado: 'Planificación',
    },
  ]);

  const [show, setShow] = useState(false);
  const [modo, setModo] = useState(''); // Puede ser 'crear', 'editar' o 'ver'
  const [proyectoActual, setProyectoActual] = useState({
    id: null,
    nombre: '',
    tecnologia: '',
    estado: '',
  });

  const handleClose = () => setShow(false);

  const handleShow = (modo, proyecto = null) => {
    setModo(modo);
    if (proyecto) {
      setProyectoActual(proyecto);
    } else {
      setProyectoActual({ id: null, nombre: '', tecnologia: '', estado: '' });
    }
    setShow(true);
  };

  const agregarProyecto = () => {
    const nuevoProyecto = {
      ...proyectoActual,
      id: proyectos.length + 1,
    };
    setProyectos([...proyectos, nuevoProyecto]);
    handleClose();
  };

  const editarProyecto = () => {
    setProyectos(
      proyectos.map((proyecto) =>
        proyecto.id === proyectoActual.id ? proyectoActual : proyecto
      )
    );
    handleClose();
  };

  const eliminarProyecto = (id) => {
    setProyectos(proyectos.filter((p) => p.id !== id));
  };

  const agregarUsuarioComoProyecto = (usuario) => {
    const nuevoProyecto = {
      id: proyectos.length + 1,
      nombre: `${usuario.nombres} ${usuario.apellidos}`,
      tecnologia: usuario.edad, // Mostramos la edad como una columna dedicada
      estado: `${usuario.pais} - ${usuario.distrito}`, // Mostramos país y distrito combinados
    };
    setProyectos([...proyectos, nuevoProyecto]);
  };

  return (
    <div className="mt-3">
      <h2>Proyectos de Realidad Aumentada</h2>
      <RegistroUsuario onAgregarUsuario={agregarUsuarioComoProyecto} />
      <Button variant="success" className="mt-3" onClick={() => handleShow('crear')}>
        Nuevo Proyecto
      </Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Ubicación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proyectos.map((proyecto) => (
            <tr key={proyecto.id}>
              <td>{proyecto.id}</td>
              <td>{proyecto.nombre}</td>
              <td>{proyecto.tecnologia}</td>
              <td>{proyecto.estado}</td>
              <td>
                <Button
                  variant="info"
                  size="sm"
                  className="me-2"
                  onClick={() => handleShow('ver', proyecto)}
                >
                  Ver
                </Button>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleShow('editar', proyecto)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarProyecto(proyecto.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modo === 'crear'
              ? 'Nuevo Proyecto de RA'
              : modo === 'editar'
              ? 'Editar Proyecto de RA'
              : 'Detalles del Proyecto'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modo === 'ver' ? (
            <div>
              <p>
                <strong>Nombre:</strong> {proyectoActual.nombre}
              </p>
              <p>
                <strong>Edad:</strong> {proyectoActual.tecnologia}
              </p>
              <p>
                <strong>Ubicación:</strong> {proyectoActual.estado}
              </p>
            </div>
          ) : (
            <Form>
              <Form.Group>
                <Form.Label>Nombre del Proyecto</Form.Label>
                <Form.Control
                  type="text"
                  value={proyectoActual.nombre}
                  onChange={(e) =>
                    setProyectoActual({
                      ...proyectoActual,
                      nombre: e.target.value,
                    })
                  }
                  disabled={modo === 'ver'}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Edad</Form.Label>
                <Form.Control
                  type="text"
                  value={proyectoActual.tecnologia}
                  onChange={(e) =>
                    setProyectoActual({
                      ...proyectoActual,
                      tecnologia: e.target.value,
                    })
                  }
                  disabled={modo === 'ver'}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Ubicación</Form.Label>
                <Form.Control
                  type="text"
                  value={proyectoActual.estado}
                  onChange={(e) =>
                    setProyectoActual({
                      ...proyectoActual,
                      estado: e.target.value,
                    })
                  }
                  disabled={modo === 'ver'}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          {modo !== 'ver' && (
            <>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button
                variant="primary"
                onClick={modo === 'crear' ? agregarProyecto : editarProyecto}
              >
                Guardar Proyecto
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ListaProyectos;
