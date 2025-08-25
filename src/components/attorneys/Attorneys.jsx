import React, { useState } from 'react';
import './Attorneys.css';

const attorneys = [
  {
    name: "Leonardo Sovierzoski ",
    title: "OAB/PR 121.618",
    image: "/FotoLeonardo.webp",
    bio: "Sócio responsável pela área Empresarial. Graduado em Direito pela Pontifícia Universidade Católica do Paraná e pós-graduado em Direito Tributário pela Pontifícia Universidade Católica do Rio Grande do Sul. Atua na consultoria e assessoria jurídica empresarial, com destaque para a atuação em operações societárias, reestruturações empresariais e negociações contratuais complexas.",
  },
  {
    name: "Paulo Magnabosco",
    title: "OAB/PR 119.157",
    image: "/FotoPaulo.webp",
    bio: "Sócio responsável pela área trabalhista. Graduado pela Pontifícia Universidade Católica do Paraná e pós-graduado em Direito e Processo do Trabalho pela Pontifícia Universidade Católica do Rio Grande do Sul. Membro da Comissão de Direito do Trabalho da OAB/PR. Atua na consultoria e no contencioso trabalhista, representando empresas e trabalhadores, com foco predominante na assessoria preventiva e na defesa estratégica dos interesses patronais.",
  },
  {
    name: "Ricardo Carleial",
    title: "OAB/PR 131.251",
    image: "/FotoRicardo.webp",
    bio: "Sócio responsável pela área Tributária. Graduado em Direito pela Pontifícia Universidade Católica de Minas Gerais e pós-graduado em Direito Tributário pela Pontifícia Universidade Católica do Rio Grande do Sul. Atua na consultoria e no contencioso tributário, com ênfase na defesa de interesses empresariais em demandas estratégicas e estruturadas.",
  },
];

const Attorneys = () => {
  const [selectedAttorney, setSelectedAttorney] = useState(null);

  return (
    <div className="att-wrapper">
      <div className="att-blank" />
      <div className="att-image-section">
        <img
          src={"/attorneysAlt.webp"}
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
          <h4>{selectedAttorney !== null ? attorneys[selectedAttorney].title : 'Nossa equipe é formada por profissionais altamente qualificados e especializados em diferentes áreas do Direito, que atuam com excelência técnica, rigor ético e visão estratégica.'}</h4>
          <p>
            {selectedAttorney !== null
              ? attorneys[selectedAttorney].bio
              : 'Unimos experiência e inovação em uma atuação colaborativa, voltada a oferecer soluções jurídicas personalizadas e de alto nível, sempre orientadas à proteção e ao fortalecimento dos interesses de nossos clientes.'}
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
