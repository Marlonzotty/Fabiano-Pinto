import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Realizacoes from './components/Realizacoes';
import Galeria from './components/Galeria';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Banner />
        <Realizacoes />
        <Galeria />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
