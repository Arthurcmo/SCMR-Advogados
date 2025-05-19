import React from 'react';
import './CTA.css';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Precisa de assessoria jurídica de confiança?</h2>
        <p>Fale conosco e agende uma consulta com um de nossos especialistas.</p>
        <Link to="/contact" className="cta-button">Fale com um Advogado</Link>
      </div>
    </section>
  );
};

export default CTA;
