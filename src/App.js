import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import AlertaRA from './components/AlertaRA';
import ModalRA from './components/ModalRA';
import ToastRA from './components/ToastRA';
import AccordionRA from './components/AccordionRA';
import RegistroUsuario from './components/RegistroUsuario';
import ListaProyectos from './components/ListaProyectos';

function App() {
  return (
    <div>
      <Navbar />
      <Container className="mt-4">
        <h1>Plataforma de Realidad Aumentada-examen</h1>
        <AlertaRA />
        <ModalRA />
        <ToastRA />
        <AccordionRA />
        <RegistroUsuario />
        <ListaProyectos />
      </Container>
    </div>
  );
}

export default App;