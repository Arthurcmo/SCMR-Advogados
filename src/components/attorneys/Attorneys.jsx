import React, { useState } from 'react';
import './Attorneys.css';
import { Helmet } from "react-helmet";


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
    bio: "Sócio responsável pela área Trabalhista. Graduado pela Pontifícia Universidade Católica do Paraná e pós-graduado em Direito e Processo do Trabalho pela Pontifícia Universidade Católica do Rio Grande do Sul. Membro da Comissão de Direito do Trabalho da OAB/PR. Atua na consultoria e no contencioso trabalhista, representando empresas e trabalhadores, com foco predominante na assessoria preventiva e na defesa estratégica dos interesses patronais.",
  },
  {
    name: "Ricardo Carleial",
    title: "OAB/PR 131.251",
    image: "/FotoRicardo.webp",
    bio: "Sócio responsável pela área Tributária. Graduado em Direito pela Pontifícia Universidade Católica de Minas Gerais e pós-graduando em Direito Tributário pela Pontifícia Universidade Católica do Rio Grande do Sul. Atua na consultoria e no contencioso tributário, com ênfase na defesa de interesses empresariais em demandas estratégicas e estruturadas.",
  },
];

const Attorneys = () => {
  
const [selectedAttorney, setSelectedAttorney] = useState(null);
 const isMobile = window.innerWidth <= 768;
  
React.useEffect(() => {
      if (isMobile && selectedAttorney !== null) {
        const rightPanel = document.querySelector('.att-list');
        if (rightPanel) {
          rightPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, [selectedAttorney, isMobile]);


 
  return (
    <>
      <Helmet>
        <title>Equipe | Sovierzoski, Carleial & Magnabosco Advogados</title>

        {/* SEO Básico */}
        <meta
          name="description"
          content="Conheça a equipe de sócios do Sovierzoski, Carleial & Magnabosco Advogados. Profissionais experientes e especializados em Direito Empresarial, Trabalhista e Tributário, atuando com excelência e visão estratégica."
        />
        <meta
          name="keywords"
          content="advogados Curitiba, equipe de advogados, sócios do escritório, Leonardo Sovierzoski, Paulo Magnabosco, Ricardo Carleial, direito empresarial, direito tributário, direito trabalhista, advocacia estratégica"
        />
        <meta name="author" content="Sovierzoski, Carleial & Magnabosco Advogados" />

        {/* Open Graph (Facebook / LinkedIn / WhatsApp) */}
        <meta property="og:title" content="Equipe | Sovierzoski, Carleial & Magnabosco Advogados" />
        <meta
          property="og:description"
          content="Sócios especializados em Direito Empresarial, Trabalhista e Tributário. Conheça Leonardo Sovierzoski, Paulo Magnabosco e Ricardo Carleial."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scmradvogados.com.br/equipe" />
        <meta property="og:image" content="https://scmradvogados.com.br/public/attorneysAlt.webp" />

        {/* Twitter (opcional, se for usar) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Equipe | Sovierzoski, Carleial & Magnabosco Advogados" />
        <meta
          name="twitter:description"
          content="Equipe de advogados especializados em Direito Empresarial, Trabalhista e Tributário."
        />
        <meta name="twitter:image" content="https://scmradvogados.com.br/public/attorneysAlt.webp" />
      </Helmet>
      

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
    </>
  );
};

export default Attorneys;
