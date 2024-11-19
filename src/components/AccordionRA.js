import React from 'react';
import { Accordion } from 'react-bootstrap';

function AccordionRA() {
  return (
    <div className="mt-3">
      <h2>Tecnologías de Realidad Aumentada</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>ARKit (iOS)</Accordion.Header>
          <Accordion.Body>
            Framework de Apple para desarrollo de experiencias de Realidad Aumentada 
            en dispositivos iOS.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>ARCore (Android)</Accordion.Header>
          <Accordion.Body>
            Plataforma de Google para crear experiencias de Realidad Aumentada 
            en dispositivos Android.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Vuforia</Accordion.Header>
          <Accordion.Body>
            Plataforma líder en tecnología de Realidad Aumentada para desarrollo 
            multiplataforma.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionRA;