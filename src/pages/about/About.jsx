import React from "react";
import { Helmet } from "react-helmet";
import "./About.css";

const About = () => {
  return (
    <div className="abt-container">
      <Helmet>
        
        <title>Sobre Nós | Sovierzoski | Carleial | Magnabosco Advogados</title>
        <meta
         name="description"
    content="Escritório full service em advocacia empresarial com foco em excelência, ética e inovação. Atuação estratégica em Direito Digital, Empresarial, Trabalhista e Civil."
  />
  <meta
    name="keywords"
    content="advocacia empresarial, direito digital, LGPD, direito trabalhista, direito civil, advogados Curitiba, escritório de advocacia, Sovierzoski Carleial Magnabosco"
  />
  <meta name="author" content="Sovierzoski | Carleial | Magnabosco Advogados" />

  {/* Open Graph (Facebook / LinkedIn) */}
  <meta property="og:title" content="Sobre Nós | Sovierzoski | Carleial | Magnabosco Advogados" />
  <meta
    property="og:description"
    content="Conheça a história e os valores do nosso escritório de advocacia full service, referência em Direito Empresarial, Digital, Trabalhista e Civil."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.seusite.com.br/sobre" />
  <meta property="og:image" content="https://www.seusite.com.br/imagens/logo-social.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sobre Nós | Sovierzoski | Carleial | Magnabosco Advogados" />
  <meta
    name="twitter:description"
    content="Advocacia estratégica e moderna com compromisso ético e excelência técnica. Saiba mais sobre nossa atuação."/>
  <meta name="twitter:image" content="https://site-advocacia-rust.vercel.app/favicon.jpg" />
  
  </Helmet>

      <div className="practice-wrapper">
  {/* First row */}
  <div className="side-blank" />
  <div className="image-section">
    <img src="/buildings1.jpg" alt="Law Firm" className="hero-image" />
  </div>
  <div className="side-right" />

  {/* Second row */}
  <div className="left-color" />
  <div className="content-wrapper">
    <div className="left-panel">
      <h3 className="practice-areas-h3">SOBRE</h3>
      <h3 className="practice-areas-h3">O ESCRITÓRIO</h3>
    </div>
    <div className="right-panel">
      <p>
        O escritório Sovierzoski | Carleial | Magnabosco Advogados é formado por uma equipe de advogados com sólida formação acadêmica e experiência prática, atuando em diversas áreas do Direito. Nossa missão é oferecer soluções jurídicas personalizadas, com foco na ética, transparência e excelência no atendimento.
      </p>
    </div>
  </div>
  <div className="side-right bottom" />
</div>

    </div>
  );
};

export default About;
