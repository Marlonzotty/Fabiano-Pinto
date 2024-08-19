import React from 'react';
import conheca from '../assets/conheça.jpg'; // Correctly importing the image

const QuemSou = () => {
  return (
    <section className="quem-sou relative">
      {/* Image Banner Section */}
      <div className="w-full">
        <img 
          src={conheca} 
          alt="Fabiano Pinto" 
          className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover md:object-contain" 
        />
      </div>
      {/* Text Section */}
      <div className="bg-[#2203f7] py-8 px-4 md:px-16 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Quem Sou Eu
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6 opacity-90 text-white">
            Eu sou Fabiano Pinto, vereador comprometido com o desenvolvimento da nossa cidade e o bem-estar de todos os seus cidadãos. Desde o início do meu mandato, venho trabalhando incansavelmente para implementar políticas que promovam a justiça social, a igualdade de oportunidades, e a melhoria dos serviços públicos. Acredito na força da comunidade e na importância de um governo transparente e acessível para todos.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6 opacity-90 text-white">
            Minha trajetória é marcada por um profundo compromisso com a educação, a saúde, e os direitos humanos. Tenho orgulho de poder representar minha cidade e de trabalhar todos os dias para construir um futuro melhor para todos nós.
          </p>
          <a 
            href="#inscreva-se" 
            className="inline-block bg-[#b44997] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#9d3e84] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl">
            Quero Me Inscrever
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuemSou;
