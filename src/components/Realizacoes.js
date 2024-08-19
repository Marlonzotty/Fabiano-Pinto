import React, { useEffect, useState } from 'react';
import { FaWheelchair, FaCalendarAlt, FaHeartbeat, FaUniversalAccess, FaBalanceScale } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Realizacoes = () => {
  const realizacoes = [
    { icon: <FaUniversalAccess />, label: 'Agências Bancárias com Atendimento LIBRAS', maxCount: 1 },
    { icon: <FaWheelchair />, label: 'Agências com Acessibilidade para Cadeirantes', maxCount: 1 },
    { icon: <FaCalendarAlt />, label: 'Dia da Ordem DeMolay', maxCount: 1 },
    { icon: <FaHeartbeat />, label: 'Semana de Combate ao Diabetes', maxCount: 1 },
    { icon: <FaBalanceScale />, label: 'Mudança de Nome para Moradores', maxCount: 1 },
    { icon: <FaWheelchair />, label: 'Placas com Informações da Lei Maria da Penha', maxCount: 1 },
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
    }, 800);

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
        <h2 className="text-4xl font-bold mb-4 text-center">Projetos Aprovados Durante o Mandato</h2>
        <p className="mb-5 text-lg text-center">Estes são alguns dos principais projetos e realizações que garantimos durante nosso mandato.</p>
        <Row className="justify-content-center">
          {realizacoes.map((item, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <div className="d-flex flex-column align-items-center bg-white bg-opacity-10 border border-white border-opacity-20 p-4 rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:bg-opacity-20">
                <div className="text-5xl text-yellow-400 mb-3">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold my-2">{counts[index]}</h3>
                <p className="text-lg">{item.label}</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="mt-5 d-flex flex-column align-items-center">
          <h3 className="text-4xl font-bold text-yellow-300 mb-3 text-center">Investimentos Totais</h3>
          <p className="text-5xl font-extrabold text-yellow-400 text-center">
            {moneyCount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Realizacoes;
