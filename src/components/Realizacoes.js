import React, { useEffect, useState } from 'react';
import './Realizacoes.css';
import { FaBuilding, FaCertificate, FaFileAlt, FaHeartbeat, FaGraduationCap, FaTools, FaTractor } from 'react-icons/fa';

const Realizacoes = () => {
  const realizacoes = [
    { icon: <FaBuilding />, label: 'Obras', maxCount: 500 },
    { icon: <FaCertificate />, label: 'Certidões', maxCount: 256 },
    { icon: <FaFileAlt />, label: 'Projetos de Lei', maxCount: 40 },
    { icon: <FaHeartbeat />, label: 'Saúde', maxCount: 361 },
    { icon: <FaGraduationCap />, label: 'Educação', maxCount: 780 },
    { icon: <FaTools />, label: 'Infraestrutura', maxCount: 543 },
  //  { icon: <FaTractor />, label: 'Agricultura', maxCount: 163 },
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
              <h3>{counts[index]}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realizacoes;
