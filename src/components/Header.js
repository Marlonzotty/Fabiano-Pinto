import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="bg-purple-700 text-white py-3 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <h1 className="m-0">Fabiano Pinto</h1>
        </div>
        <nav className="hidden md:flex gap-4">
          <Link to="/proposituras" className="text-white hover:bg-purple-900 p-2 rounded">Proposituras</Link>
          <Link to="/projetos" className="text-white hover:bg-purple-900 p-2 rounded">Projetos</Link>
          <Link to="/sobre" className="text-white hover:bg-purple-900 p-2 rounded">Sobre</Link>
          <Link to="/fale-conosco" className="text-white hover:bg-purple-900 p-2 rounded">Fale Conosco</Link>
        </nav>
        <button className="bg-yellow-500 text-purple-700 p-2 rounded font-bold md:hidden" onClick={toggleNav}>
          <FaBars />
        </button>
      </div>
      {navOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg text-center">
            <h2 className="text-2xl mb-4">Navegação</h2>
            <nav className="flex flex-col gap-4">
              <Link to="/proposituras" onClick={toggleNav} className="block my-2 hover:bg-purple-900 p-2 rounded text-purple-700">Proposituras</Link>
              <Link to="/projetos" onClick={toggleNav} className="block my-2 hover:bg-purple-900 p-2 rounded text-purple-700">Projetos</Link>
              <Link to="/sobre" onClick={toggleNav} className="block my-2 hover:bg-purple-900 p-2 rounded text-purple-700">Sobre</Link>
              <Link to="/fale-conosco" onClick={toggleNav} className="block my-2 hover:bg-purple-900 p-2 rounded text-purple-700">Fale Conosco</Link>
            </nav>
            <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded" onClick={toggleNav}>Fechar</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
