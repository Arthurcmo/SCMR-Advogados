import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';
import './Navbar.css';
import { DarkModeToggle } from '../darkmodetoggle/DarkModeToggle';
function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-mobile-toggle">
        <button className="close-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>☰</button>
      </div>
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-text">
          <span>Sovierzoski</span><br />
          <span>Carleial</span><br />
          <span>Magnabosco</span>
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/contato" className="button">Contato</Link>
        <Link to="/blog" className="button">Blog</Link>
        <div className="navbar-phone">(41) 3030-9890</div>
        <div className="navbar-socials">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
        </div>
      </div>
      <div className="navbar-dark-mode-toggle">
        <DarkModeToggle />
      </div>

      {isSidebarOpen && (
        <>
          <div className="navbar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
          <div className={`navbar-sidebar ${isSidebarOpen ? "active" : ""}`} onClick={() => setIsSidebarOpen(false)}>
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/noticias">Notícias</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/equipe">Equipe</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
