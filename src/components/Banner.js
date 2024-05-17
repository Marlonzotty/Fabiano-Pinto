import React from 'react';
import './Banner.css';
import FabianoImg from '../assets/fabiano.jpg'

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-content">
          <img src={FabianoImg} alt="Fabiano Pinto" />
          <div className="banner-text">
            <h2>Vereador reeleito para a legislatura 2021 a 2024!</h2>
            <p>
              Quero agradecer a Deus que sempre me honrou, meus familiares e amigos, em especial nossos 1149 eleitores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
