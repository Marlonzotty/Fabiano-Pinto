import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaTimes } from 'react-icons/fa'; 
import projetoImg from '../assets/7m.jpg';
import image2Img from '../assets/vidaP.jpg';
import partidoImg from '../assets/partido.jpg'; 
import gestaoImg from '../assets/gestão.jpg'; 

const Galeria = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const items = [
    { id: 1, type: 'image', src: projetoImg, caption: 'Legenda da imagem 1' },
    { 
      id: 3, 
      type: 'image', 
      src: image2Img, 
      caption: 'VOCÊ CONHECE A MINHA VIDA PÚBLICA?\n\nFabiano Pinto, filho de Maria de Lourdes Rocha Pinto (Lurdinha) e Júlio Eustáquio Pinto (Tal). O caçula de 3 irmãos, vindo de uma família com histórico político há mais de 1 século. Ingressou na vida pública no ano de 2006, através do Movimento Estudantil e Juventude Partidária. No ano de 2008 foi pré-candidato a vereador pela primeira vez, aos 18 anos. Durante todo o período sempre esteve ligado em movimentos sociais. Nos anos de 2012 e 2016 pleiteou novamente ao cargo de vereador, tendo obtido êxito nas eleições de 2020, como vereador, sendo o mais jovem e mais aguerrido da Câmara Municipal de São João Del Rei. Buscando representar a população de São João Del Rei e região, em 2018, foi candidato a Deputado Estadual, sendo o 3º mais votado na cidade de São João Del - Rei. Já é mandato, em 2022 foi candidato a Deputado Estadual.'
    },
    { 
      id: 4, 
      type: 'image', 
      src: partidoImg, 
      caption: 'partido.' 
    },
    { 
      id: 5, 
      type: 'image', 
      src: gestaoImg, 
      caption: ' gestão.' 
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const openModal = (item) => {
    setCurrentItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentItem(null);
  };

  return (
    <section className="py-20 text-center" style={{ background: 'linear-gradient(to right, rgb(106, 17, 203), rgb(129, 134, 143))' }}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">Galeria Do vereador</h2>
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="relative cursor-pointer overflow-hidden rounded-lg hover:scale-105 transition transform mx-auto max-w-xl" onClick={() => openModal(item)}>
              <img src={item.src} alt={item.caption} className="w-full h-auto rounded-lg transition transform" />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition">
                Clique para ver mais
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {modalOpen && currentItem && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50 p-4">
          <div className="bg-white p-5 rounded-lg text-center max-w-xl w-full mx-auto relative">
    
            <button className="absolute top-2 right-2 text-gray-700 hover:text-gray-900" onClick={closeModal}>
              <FaTimes size={24} />
            </button>
            <img src={currentItem.src} alt={currentItem.caption} className="w-full h-auto mb-5 rounded-lg" />
            <p className="text-sm md:text-base font-bold text-purple-700 mb-5 whitespace-pre-line">{currentItem.caption}</p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition" onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Galeria;
