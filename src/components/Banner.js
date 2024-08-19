import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Banner = () => {
  return (
    <section className="relative text-white py-5" style={{ background: 'linear-gradient(to right, #6a11cb, #81868f )', minHeight: '100vh' }}>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
      <Container className="relative z-10">
        <Row className="justify-center text-center">
          <Col md={8} className="mb-4">
            <video
              src={require('../assets/video.mp4')}
              autoPlay
              controls
              playsInline
              className="shadow-lg rounded-lg mx-auto"
              style={{ borderRadius: '25px', width: '60%', height: '500px' }} // Reduz a largura do vídeo para 60% do container
            />
          </Col>
        </Row>
        <Row className="justify-center text-center mt-4">
          <Col md={8}>
            <h2 className="text-4xl font-bold mb-4">Vereador Fabiano Pinto</h2>
            <p className="text-lg mb-4">Quero agradecer a Deus que sempre me honrou, meus familiares e amigos, em especial nossos 750 eleitores.</p>
            <Button href="#realizacoes" variant="warning" className="text-uppercase font-weight-bold px-4 py-2">Quem sou eu</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
