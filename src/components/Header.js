import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          
          <h1>Fabiano Pinto</h1>
        </div>
        <nav className="nav">
          <Link to="/proposituras">Proposituras </Link>
          <Link to="/projetos">Projetos </Link>
          <Link to="/sobre">Sobre </Link>
          <Link to="/fale-conosco">Fale Conosco </Link>
        </nav>
        <div className="language-toggle">
          <button>PT-BR</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
