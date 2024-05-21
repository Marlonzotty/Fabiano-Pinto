import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Fabiano Pinto</h1>
        </div>
        <nav className={`nav ${navOpen ? 'open' : ''}`}>
          <Link to="/proposituras" onClick={() => setNavOpen(false)}>Proposituras</Link>
          <Link to="/projetos" onClick={() => setNavOpen(false)}>Projetos</Link>
          <Link to="/sobre" onClick={() => setNavOpen(false)}>Sobre</Link>
          <Link to="/fale-conosco" onClick={() => setNavOpen(false)}>Fale Conosco</Link>
        </nav>
        <div className="language-toggle">
          <button>PT-BR</button>
        </div>
        <div className="menu-icon" onClick={toggleNav}>
          <FaBars />
        </div>
      </div>
      {navOpen && (
        <div className="nav-modal open" onClick={() => setNavOpen(false)}>
          <nav className="nav-content" onClick={(e) => e.stopPropagation()}>
            <Link to="/proposituras" onClick={() => setNavOpen(false)}>Proposituras</Link>
            <Link to="/projetos" onClick={() => setNavOpen(false)}>Projetos</Link>
            <Link to="/sobre" onClick={() => setNavOpen(false)}>Sobre</Link>
            <Link to="/fale-conosco" onClick={() => setNavOpen(false)}>Fale Conosco</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
