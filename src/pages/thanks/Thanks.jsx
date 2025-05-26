import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Thanks.css';

const Thanks = () => {
  return (
    <div className="obrigado-container">
      <FaCheckCircle className="check-icon" />
      <h1 className="obrigado-title">Obrigado pelo seu contato!</h1>
      <p className="obrigado-text">
        Sua mensagem foi enviada com sucesso. Em breve, entraremos em contato com você.
      </p>
      <Link to="/" className="voltar-btn">
        Voltar para o início
      </Link>
    </div>
  );
};

export default Thanks;
