import React, { useState } from "react";
import "./ProjetosFuturos.css";
import direitos from "../assets/direitos.jpg";
import parabens from "../assets/parabens.jpg";
//import image3 from '../assets/image3.jpg';

const ProjetosFuturos = () => {
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Projeto A",
      description:
        "Na imagem, vemos uma vibrante manifestação de pessoas unidas por uma causa comum: a luta por direitos humanos. Homens e mulheres de todas as idades, raças e origens estão lado a lado, segurando cartazes e faixas que expressam suas demandas por justiça, igualdade e liberdade.",
      image: direitos,
    },
    {
      id: 2,
      title: "Projeto B",
      description: "este projeto conta com o a",
      image: parabens,
    },
    //{ id: 3, title: 'Projeto C', description: 'Descrição detalhada do Projeto C', image: image3 },
  ];

  const openModal = (project) => {
    setCurrentProject(project);
  };

  const closeModal = () => {
    setCurrentProject(null);
  };

  return (
    <section className="projetos-futuros">
      <div className="container">
        <h2>Projetos Futuros</h2>
        <div className="projetos-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="projeto-item"
              onClick={() => openModal(project)}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {currentProject && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentProject.image} alt={currentProject.title} />
            <h3>{currentProject.title}</h3>
            <p>{currentProject.description}</p>
            <button className="close-modal" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjetosFuturos;
