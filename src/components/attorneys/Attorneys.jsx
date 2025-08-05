import React, { useState } from 'react';
import './Attorneys.css';

const attorneys = [
  {
    name: "Dr. Sovierzoski",
    title: "Founding Partner – Civil & Real Estate Law",
    image: "/leco.jpeg",
    bio: "Expert in litigation and real estate transactions, with over 15 years of experience representing clients in complex civil cases.",
  },
  {
    name: "Dr. Paulo Roberto",
    title: "OAB/PR 119.157",
    image: "/pauloR.jpg",
    bio: "Advogado atuante no âmbito do Direito do Trabalho. Graduado pela Pontifícia Universidade Católica do Paraná e pós-graduado em Direito e Processo do Trabalho pela Pontifícia Universidade Católica do Rio Grande do Sul.",
  },
  {
    name: "Dr. Magnabosco",
    title: "Partner – Labor & Family Law",
    image: "/leco.jpeg",
    bio: "Advocates for clients with compassion in family matters and expert representation in labor disputes.",
  },
];

const Attorneys = () => {
  const [selectedAttorney, setSelectedAttorney] = useState(null);

  return (
    <div className="att-wrapper">
      <div className="att-blank" />
      <div className="att-image-section">
        <img
          src={"/attorneysAlt.jpg"}
          alt="Equipe"
          className="att-hero-image"
        />
      </div>
      <div className="att-side-grey" />

      <div className="att-color-left" />
      <div className="att-content">
        <div className="att-list-panel">
          <h3 className="practice-areas-h3">SÓCIOS</h3>
          <ul className="att-list">
            {attorneys.map((attorney, index) => (
              <li
                key={index}
                onClick={() => setSelectedAttorney(index)}
                style={{
                  cursor: 'pointer',
                  color: selectedAttorney === index ? 'var(--color-primary)' : '#676'
                }}
              >
                <p>{attorney.name}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="att-detail-panel">
          {selectedAttorney !== null && (
            <button onClick={() => setSelectedAttorney(null)} className="att-close-btn">
              ←
            </button>
          )}
          <h2>{selectedAttorney !== null ? attorneys[selectedAttorney].name : 'Equipe de Advogados'}</h2>
          <h4>{selectedAttorney !== null ? attorneys[selectedAttorney].title : 'Profissionais especializados em diferentes áreas do direito, trabalhando com excelência e ética para representar nossos clientes.'}</h4>
          <p>
            {selectedAttorney !== null
              ? attorneys[selectedAttorney].bio
              : 'Nosso time é composto por profissionais experientes em diversas áreas jurídicas. Trabalhamos de forma colaborativa para garantir as melhores soluções jurídicas para nossos clientes.'}
          </p>
        </div>
      </div>

      <div className="att-detail-image">
        {selectedAttorney !== null && (
          <img
            src={attorneys[selectedAttorney].image}
            alt={attorneys[selectedAttorney].name}
            className="att-attorney-image"
          />
        )}
      </div>
    </div>
  );
};

export default Attorneys;
