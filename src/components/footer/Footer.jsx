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
        <div className="footer-links">
          <p>Email: contato@scmadvogados.com</p>
          <p>Telefone: (41) 98807-7655</p>
          <p>Curitiba - PR</p>
          <p>Rua Tibagi 576, Sala 607</p>
        </div>

        <div className="footer-contact">
          
        </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SCMR Advogados. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
