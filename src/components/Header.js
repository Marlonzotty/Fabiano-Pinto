import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="bg-purple-700 text-white py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fabiano Pinto</h1>
        <nav className="hidden md:flex gap-4">
          <Link to="/proposituras" className="text-white hover:bg-purple-900 p-2 rounded transition">Proposituras</Link>
          <Link to="/projetos" className="text-white hover:bg-purple-900 p-2 rounded transition">Projetos</Link>
          <Link to="/quem-sou" className="text-white hover:bg-purple-900 p-2 rounded transition">Quem Sou</Link>
          <Link to="/fale-conosco" className="text-white hover:bg-purple-900 p-2 rounded transition">Fale Conosco</Link>
        </nav>
        <button className="md:hidden bg-yellow-500 text-purple-700 p-2 rounded" onClick={toggleNav}>
          <FaBars size={24} />
        </button>
      </div>
      {/* Mobile Menu */}
      {navOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg text-center relative">
            <button className="absolute top-3 right-3 text-purple-700" onClick={toggleNav}>
              <FaTimes size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6">Navegação</h2>
            <nav className="flex flex-col gap-4">
              <Link to="/proposituras" onClick={toggleNav} className="text-purple-700 hover:bg-purple-900 hover:text-white p-2 rounded transition">Proposituras</Link>
              <Link to="/projetos" onClick={toggleNav} className="text-purple-700 hover:bg-purple-900 hover:text-white p-2 rounded transition">Projetos</Link>
              <Link to="/quem-sou" onClick={toggleNav} className="text-purple-700 hover:bg-purple-900 hover:text-white p-2 rounded transition">Quem Sou</Link>
              <Link to="/fale-conosco" onClick={toggleNav} className="text-purple-700 hover:bg-purple-900 hover:text-white p-2 rounded transition">Fale Conosco</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
