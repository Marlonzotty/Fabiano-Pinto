import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
        </div>
        <p className="rights">© 2023 Zotty. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
