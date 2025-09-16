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
      // compensa o header fixo sem usar window.scrollBy
      rightPanel.style.scrollMarginTop = '260px';

      // no iOS, chame após o layout estabilizar
      requestAnimationFrame(() => {
        rightPanel.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      });
    }
  }
}, [selectedAttorney, isMobile]);


const canonical = "https://scmradvogados.com.br/equipe";
// === JSON-LD ===
  // 1) Breadcrumbs
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://scmradvogados.com.br/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Equipe",
        "item": canonical
      }
    ]
  };

  // 2) Organização (referencia os membros por @id)
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://scmradvogados.com.br/#organization",
    "name": "Sovierzoski, Carleial & Magnabosco Advogados",
    "url": "https://scmradvogados.com.br/",
    "logo": "https://scmradvogados.com.br/android-chrome-512x512.png",
    "sameAs": [
      "https://www.instagram.com/scmradvogados",
      "https://www.linkedin.com/company/sovierzoski-carleial-magnabosco-advogados"
    ],
    "member": [
      { "@id": "https://scmradvogados.com.br/equipe#leonardo-sovierzoski" },
      { "@id": "https://scmradvogados.com.br/equipe#paulo-magnabosco" },
      { "@id": "https://scmradvogados.com.br/equipe#ricardo-carleial" }
    ]
  };

  // 3) Pessoas (um bloco por sócio)
  const peopleJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://scmradvogados.com.br/equipe#leonardo-sovierzoski",
      "name": "Leonardo Sovierzoski",
      "jobTitle": "Sócio",
      "worksFor": { "@id": "https://scmradvogados.com.br/#organization" },
      "url": "https://scmradvogados.com.br/equipe",
      // troque a URL da imagem pelo retrato real, se houver:
      "image": "https://scmradvogados.com.br/FotoLeonardo.webp",
      "sameAs": []
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://scmradvogados.com.br/equipe#paulo-magnabosco",
      "name": "Paulo Magnabosco",
      "jobTitle": "Sócio",
      "worksFor": { "@id": "https://scmradvogados.com.br/#organization" },
      "url": "https://scmradvogados.com.br/equipe",
      "image": "https://scmradvogados.com.br/FotoPaulo.webp",
      "sameAs": []
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://scmradvogados.com.br/equipe#ricardo-carleial",
      "name": "Ricardo Carleial",
      "jobTitle": "Sócio",
      "worksFor": { "@id": "https://scmradvogados.com.br/#organization" },
      "url": "https://scmradvogados.com.br/equipe",
      "image": "https://scmradvogados.com.br/FotoRicardo.webp",
      "sameAs": []
    }
  ];

 
  return (
    <>
     <Helmet>
      {/* Título / Canonical / Description */}
      <title>Equipe | Sovierzoski, Carleial & Magnabosco Advogados</title>
      <link rel="canonical" href={canonical} />
      <meta
        name="description"
        content="Conheça a equipe de sócios do Sovierzoski, Carleial & Magnabosco Advogados. Profissionais experientes em Direito Empresarial, Trabalhista e Tributário."
      />

      {/* Open Graph */}
      <meta property="og:site_name" content="SCMR Advogados" />
      <meta property="og:title" content="Equipe | Sovierzoski, Carleial & Magnabosco Advogados" />
      <meta
        property="og:description"
        content="Sócios especializados em Direito Empresarial, Trabalhista e Tributário."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      {/* use uma imagem real da equipe; evite caminho com /public */}
      <meta property="og:image" content="https://scmradvogados.com.br/attorneysAlt.webp" />
      <meta property="og:image:alt" content="Equipe SCMR Advogados" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Equipe | Sovierzoski, Carleial & Magnabosco Advogados" />
      <meta
        name="twitter:description"
        content="Sócios especializados em Direito Empresarial, Trabalhista e Tributário."
      />
      <meta name="twitter:image" content="https://scmradvogados.com.br/attorneysAlt.webp" />

      {/* JSON-LD - Breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </script>

      {/* JSON-LD - Organização */}
      <script type="application/ld+json">
        {JSON.stringify(orgJsonLd)}
      </script>

      {/* JSON-LD - Pessoas */}
      {peopleJsonLd.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
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
