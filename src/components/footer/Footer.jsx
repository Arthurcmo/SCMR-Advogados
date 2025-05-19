import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h2>Sovierzoski | Carleial | Magnabosco</h2>
          <p>Advogados associados</p>
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
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SCM Advogados. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
