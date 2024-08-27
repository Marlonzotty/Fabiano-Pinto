import React, { useEffect, useState } from 'react';
import { FaBullhorn, FaFileAlt, FaGavel, FaUsers, FaHandsHelping } from 'react-icons/fa'; // Ícones atualizados
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Realizacoes = () => {
  const realizacoes = [
    { icon: <FaBullhorn />, label: 'Denúncias', maxCount: 5 },
    { icon: <FaFileAlt />, label: 'Ofícios enviados com solicitações de serviços e informações', maxCount: 500 },
    { icon: <FaGavel />, label: 'Projetos aprovados pelo meu mandato', maxCount: 10 },
    { icon: <FaUsers />, label: 'Comissões atuantes', maxCount: 5 },
    { icon: <FaHandsHelping />, label: 'Projetos em co-participação', maxCount: 200 },
  ];

  const [counts, setCounts] = useState(realizacoes.map(() => 0));
  const [moneyCount, setMoneyCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < realizacoes[index].maxCount ? count + 1 : count
        )
      );
    }, 12);

    return () => clearInterval(interval);
  }, [realizacoes]);

  useEffect(() => {
    const moneyInterval = setInterval(() => {
      setMoneyCount((prevCount) =>
        prevCount < 7000000 ? prevCount + 5000 : prevCount
      );
    }, 15);

    return () => clearInterval(moneyInterval);
  }, []);

  return (
    <section className="py-5" style={{ background: 'linear-gradient(to right, #6a11cb, #2575fc)', color: 'white' }}>
      <Container>
        <h2 className="text-4xl font-bold mb-4 text-center">Realizações Durante o Mandato</h2>
        <p className="mb-5 text-lg text-center">Estes são alguns dos principais números e realizações do nosso mandato.</p>
        <Row className="justify-content-center">
          {realizacoes.map((item, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <div className="d-flex flex-column align-items-center bg-white bg-opacity-10 border border-white border-opacity-20 p-4 rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:bg-opacity-20">
                <div className="text-5xl text-yellow-400 mb-3">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold my-2">{counts[index]}</h3>
                <p className="text-lg text-center">{item.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Realizacoes;
