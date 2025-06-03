import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../contexts/ColorSchemeContext';


const Footer = () => {
  const navigate = useNavigate();
    const { isDark, setIsDark } = useDarkMode();

  const handleNavigate = () => {
    navigate('/');
    window.scrollTo(0, 0);
  }



  return (
    <footer className="footer">
        <div className="footer-brand" onClick={() => handleNavigate()} style={{ cursor: 'pointer' }}>
          <img src={isDark ? '/01-cropped.svg' : '/05-cropped.svg'} alt="SCM Advogados Logo" className="footer-logo" />
        </div>

        <div className="footer-links">
          <Link to="/about">Sobre Nós</Link>
          <Link to="/practice-areas">Áreas de Atuação</Link>
          <Link to="/attorneys">Equipe</Link>
          <Link to="/contact">Contato</Link>
        </div>

        <div className="footer-contact">
          <p>Email: contato@scmadvogados.com</p>
          <p>Telefone: (41) 99999-9999</p>
          <p>Curitiba - PR</p>
        </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SCM Advogados. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
