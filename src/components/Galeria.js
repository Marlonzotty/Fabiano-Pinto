import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Galeria.css';
import projetoImg from '../assets/projeto.jpg'; // Importar a imagem
import image2Img from '../assets/image2.jpg'; // Importar a imagem
//import video1Mp4 from '../assets/video1.mp4'; // Importar o vídeo

const Galeria = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const items = [
    { id: 1, type: 'image', src: projetoImg, caption: 'Legenda da imagem 1' },
    // { id: 2, type: 'video', src: video1Mp4, caption: 'Legenda do vídeo 1' },
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
    <section className="galeria">
      <div className="container">
        <h2>Galeria de Imagens e Vídeos</h2>
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="galeria-item" onClick={() => openModal(item)}>
              {item.type === 'image' ? (
                <img src={item.src} alt={item.caption} />
              ) : (
                <video src={item.src} />
              )}
            </div>
          ))}
        </Slider>
      </div>

      {modalOpen && currentItem && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {currentItem.type === 'image' ? (
              <img src={currentItem.src} alt={currentItem.caption} />
            ) : (
              <video controls src={currentItem.src} />
            )}
            <p className="modal-caption">{currentItem.caption}</p>
            <button className="close-modal" onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Galeria;
