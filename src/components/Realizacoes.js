import React, { useEffect, useState } from 'react';
import { FaBuilding, FaCertificate, FaFileAlt, FaHeartbeat, FaGraduationCap, FaTools } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Realizacoes = () => {
  const realizacoes = [
    { icon: <FaBuilding />, label: 'Obras', maxCount: 500 },
    { icon: <FaCertificate />, label: 'Certidões', maxCount: 256 },
    { icon: <FaFileAlt />, label: 'Projetos de Lei', maxCount: 40 },
    { icon: <FaHeartbeat />, label: 'Saúde', maxCount: 361 },
    { icon: <FaGraduationCap />, label: 'Educação', maxCount: 780 },
    { icon: <FaTools />, label: 'Infraestrutura', maxCount: 543 },
  ];

  const [counts, setCounts] = useState(realizacoes.map(() => 0));
  const [directions, setDirections] = useState(realizacoes.map(() => 1));
  const [paused, setPaused] = useState(realizacoes.map(() => false));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) => {
          if (paused[index]) return count;

          const direction = directions[index];
          const maxCount = realizacoes[index].maxCount;
          if (count >= maxCount && direction === 1) {
            setPaused((prevPaused) => {
              const newPaused = [...prevPaused];
              newPaused[index] = true;
              return newPaused;
            });
            setTimeout(() => {
              setPaused((prevPaused) => {
                const newPaused = [...prevPaused];
                newPaused[index] = false;
                return newPaused;
              });
              setDirections((prevDirections) => {
                const newDirections = [...prevDirections];
                newDirections[index] = -1;
                return newDirections;
              });
            }, 50000);
            return count;
          } else if (count <= 0 && direction === -1) {
            setPaused((prevPaused) => {
              const newPaused = [...prevPaused];
              newPaused[index] = true;
              return newPaused;
            });
            setTimeout(() => {
              setPaused((prevPaused) => {
                const newPaused = [...prevPaused];
                newPaused[index] = false;
                return newPaused;
              });
              setDirections((prevDirections) => {
                const newDirections = [...prevDirections];
                newDirections[index] = 1;
                return newDirections;
              });
            }, 10000);
            return count;
          }
          return count + direction;
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, [directions, paused, realizacoes]);

  return (
    <section className="py-5 bg-gradient-to-r from-purple-700 to-purple-900 text-white text-center">
      <Container>
        <h2 className="text-3xl font-bold mb-4">Em nossos 2 últimos mandatos fizemos 2163 requerimentos</h2>
        <p className="mb-5">Trabalhamos frente à câmara municipal de Limeira nos anos primário mandatos de 2017, em 2018 assumi a vice aladoria vereador de Limeira como suplente eleito em 2016 até 2020. Neste tempo fizemos muito por nossa cidade, e agora em nosso novo mandato, fizemos muito mais para população Limeirense.</p>
        <Row className="justify-content-center">
          {realizacoes.map((item, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <div className="d-flex flex-column align-items-center bg-white bg-opacity-10 border border-white border-opacity-20 p-4 rounded-lg transition transform hover:scale-105">
                {item.icon}
                <h3 className="text-2xl font-bold my-2">{counts[index]}</h3>
                <p className="text-lg">{item.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Realizacoes;
