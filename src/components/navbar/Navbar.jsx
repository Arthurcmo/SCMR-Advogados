import { useState, useEffect } from 'react';
import { useDarkMode } from '../../contexts/ColorSchemeContext';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import './Navbar.css';
function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, setIsDark } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Define o limite de rolagem para mudar o estilo
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='navbar-top'>
      
      <div  className={` ${scrolled ? 'navbar-logo' : 'navbar-logo'}`}>
        <Link to="/">
          <img src={isDark ? '/05-cropped.svg' : '/05-cropped.svg'} className={` ${scrolled ? 'navbar-logo' : 'navbar-logo'}`}  />       
        </Link>
      </div>
      <div className="navbar-dots">
        <span className="dot dot-pale"></span>
        <span className="dot dot-mid"></span>
        <span className="dot dot-primary"></span>
      </div>
      <div className="navbar-mobile-toggle">
        <button className="close-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>☰</button>
      </div>
      <div className="navbar-links">
        <div className='navbar-links-left'>
          <Link to="/sobre" className="button">Sobre</Link>
          <Link to="/servicos" className="button">Atuação</Link>
          <Link to="/equipe" className="button">Equipe</Link>
          <Link to="/publicacoes" className="button">Publicações</Link>
          <Link to="/contato" className="button">Contato</Link>
        </div>
        <div className="navbar-socials">
          <a href="https://wa.me/5541988077655" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={20} /></a>
          <a href="https://www.linkedin.com/company/sovierzoski-carleial-magnabosco-advogados/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
          <a href="https://instagram.com/scmradvogados" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
        </div>
      </div>
      

      {isSidebarOpen && (
        <>
          <div className="navbar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
          <div className={`navbar-sidebar ${isSidebarOpen ? "active" : ""}`} onClick={() => setIsSidebarOpen(false)}>
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/servicos">Atuação</Link>
            <Link to="/equipe">Equipe</Link>
            <Link to="/publicacoes">Publicações</Link>
            <Link to="/contato">Contato</Link>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
