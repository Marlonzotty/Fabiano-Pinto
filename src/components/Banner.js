import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import FabianoImg from '../assets/fabiano.jpg';

const Banner = () => {
  return (
    <section className="position-relative text-white py-5" style={{ background: 'linear-gradient(to right, #6a11cb, #81868f )', minHeight: '100vh' }}>
      <div className="position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
      <Container className="position-relative z-10">
        <Row className="align-items-center justify-content-center text-center">
          <Col md={6} className="mb-4">
            <Image src={FabianoImg} roundedCircle fluid className="shadow-lg hover-zoom" />
          </Col>
          <Col md={6}>
            <h2 className="display-4 font-weight-bold mb-4">Vereador reeleito para a legislatura 2021 a 2024!</h2>
            <p className="lead mb-4">Quero agradecer a Deus que sempre me honrou, meus familiares e amigos, em especial nossos 1149 eleitores.</p>
            <Button href="#realizacoes" variant="warning" className="text-uppercase font-weight-bold px-4 py-2">Quem sou eu</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
