import React from 'react';
import CountUp from 'react-countup';
import { FaBuilding, FaCertificate, FaFileAlt, FaHeartbeat, FaGraduationCap, FaTools, FaTractor } from 'react-icons/fa';
import './Realizacoes.css';

const Realizacoes = () => {
  const realizacoes = [
    { icon: <FaBuilding />, label: "Obras", count: 500 },
    { icon: <FaCertificate />, label: "Certidões", count: 256 },
    { icon: <FaFileAlt />, label: "Projetos de Lei", count: 40 },
    { icon: <FaHeartbeat />, label: "Saúde", count: 361 },
    { icon: <FaGraduationCap />, label: "Educação", count: 780 },
    { icon: <FaTools />, label: "Infraestrutura", count: 543 },
    { icon: <FaTractor />, label: "Agricultura", count: 163 },
  ];

  return (
    <section className="realizacoes">
      <div className="container">
        <h2>Em nossos 2 últimos mandatos fizemos 2163 requerimentos</h2>
        <p>
          Trabalhamos frente à câmara municipal de Limeira nos anos primário mandatos de 2017, em 2018 assumi a vice
          aladoria vereador de Limeira como suplente eleito em 2016 até 2020. Neste tempo fizemos muito por nossa cidade,
          e agora em nosso novo mandato, fizemos muito mais para população Limeirense.
        </p>
        <div className="realizacoes-grid">
          {realizacoes.map((item, index) => (
            <div key={index} className="realizacao-item">
              {item.icon}
              <h3>
                <CountUp end={item.count} duration={7} /> {/* Animação da contagem */}
              </h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realizacoes;
