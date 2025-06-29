import React from 'react';
import './CTA.css';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <div className="cta-image-wrapper">
          <img src="/law.jpg" alt="Advocacia" className="cta-image" />
          <div className="cta-h2-trapezoid">
            <h2>Precisa de assessoria jurídica de confiança?</h2>
          </div>
        </div>
        <p>Agende uma consulta com um de nossos especialistas.</p>
        <Link to="/contato" className="cta-button">Fale com um Advogado</Link>
      </div>
    </section>
  );
};

export default CTA;
