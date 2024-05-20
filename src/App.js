import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Realizacoes from './components/Realizacoes';
import Galeria from './components/Galeria';
import ProjetosFuturos from './components/ProjetosFuturos'; 
import Footer from './components/Footer';
import './App.css';

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <section>
          <Banner />
        </section>
        <section>
          <Realizacoes />
        </section>
        <section>
          <Galeria />
        </section>
        <section>
        <ProjetosFuturos />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </Router>
  );
};

export default App;
