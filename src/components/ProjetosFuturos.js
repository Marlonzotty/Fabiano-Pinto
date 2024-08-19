import React, { useState } from "react";
import direitos from "../assets/projetos.jpg";
import parabens from "../assets/investimentos.jpg";
import image3 from '../assets/denun.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjetosFuturos = () => {
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Projetos aprovados ao longo do mandado",
      description: "Todos os projetos aprovados pelo vereador Fabiano.",
      image: direitos,
    },
    {
      id: 2,
      title: "Investimentos garantidos pelo Fabiano",
      description: "Investimentos significativos que foram garantidos durante o mandato.",
      image: parabens,
    },
    { 
      id: 3, 
      title: 'Denuncias Feitas Por Fabiano', 
      description: 'Descrição detalhada das denúncias feitas por Fabiano durante o mandato.', 
      image: image3 
    },
  ];

  const openModal = (project) => {
    setCurrentProject(project);
  };

  const closeModal = () => {
    setCurrentProject(null);
  };

  return (
    <section className="projetos-futuros bg-gray-100 py-5 text-center">
      <div className="container">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Projetos</h2>
        <div className="row">
          {projects.map((project) => (
            <div
              key={project.id}
              className="col-12 col-md-6 col-lg-4 mb-4"
            >
              <div 
                className="projeto-item bg-white rounded shadow-sm hover:shadow-lg transition-all cursor-pointer overflow-hidden"
                onClick={() => openModal(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="img-fluid" 
                />
                <h3 className="p-3 text-lg font-semibold text-purple-700">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentProject && (
        <div 
          className="modal fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" 
          onClick={closeModal}
        >
          <div 
            className="modal-content bg-white p-4 md:p-6 w-full max-w-4xl rounded-lg shadow-lg relative transition-transform duration-300 transform scale-100 max-h-full overflow-y-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={currentProject.image} 
              alt={currentProject.title} 
              className="w-full h-auto object-contain mb-4"
            />
            <h3 className="text-2xl font-bold text-purple-700 mb-4">{currentProject.title}</h3>
            <p className="text-gray-700 mb-4">{currentProject.description}</p>
            <button 
              className="close-modal bg-red-500 text-white py-2 px-4 rounded-full font-bold absolute top-4 right-4 hover:bg-red-600 transition-colors" 
              onClick={closeModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjetosFuturos;
