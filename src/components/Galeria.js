import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projetoImg from '../assets/projeto.jpg';
import image2Img from '../assets/image2.jpg';

const Galeria = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const items = [
    { id: 1, type: 'image', src: projetoImg, caption: 'Legenda da imagem 1' },
    { id: 3, type: 'image', src: image2Img, caption: 'Legenda da imagem 2' },
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
        <h2 className="text-3xl font-bold text-white mb-10">Galeria de Imagens e Vídeos</h2>
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
          <div className="bg-white p-5 rounded-lg text-center max-w-xl w-full mx-auto">
            <img src={currentItem.src} alt={currentItem.caption} className="w-full h-auto mb-5 rounded-lg" />
            <p className="text-lg font-bold text-purple-700 mb-5">{currentItem.caption}</p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition" onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Galeria;
