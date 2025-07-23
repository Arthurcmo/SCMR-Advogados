import React from "react";
import { Helmet } from "react-helmet";
import "./About.css";

const About = () => {
  return (
    <div className="sobre-nos-container">
      <Helmet>
        <title>Sobre Nós | Sovierzoski | Carleial | Magnabosco Advogados</title>
        <meta
          name="description"
          content="Conheça o escritório Sovierzoski | Carleial | Magnabosco Advogados, especialistas em Direito Digital, Empresarial, Trabalhista e Civil. Atuação ética, moderna e estratégica."
        />
        <meta name="keywords" content="advocacia, direito digital, LGPD, direito empresarial, PUC-PR, advogados Curitiba, direito civil, direito trabalhista" />
        <meta name="author" content="Sovierzoski | Carleial | Magnabosco Advogados" />
        <meta property="og:title" content="Sobre Nós | Sovierzoski | Carleial | Magnabosco Advogados" />
        <meta property="og:description" content="Escritório fundado por advogados da PUC-PR com"/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.seusite.com.br/sobre" />
        <meta property="og:image" content="https://www.seusite.com.br/imagens/logo-social.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre Nós | Sovierzoski | Carleial | Magnabosco Advogados" />
        <meta name="twitter:description" content="Conheça nossa história e especialidades jurídicas." />
        <meta name="twitter:image" content="https://www.seusite.com.br/imagens/logo-social.jpg" />
      </Helmet>

      <div className="sobre-nos-layout">
        {/* Linha 1 */}
        <div className="col side-color" />
        <div className="col image-area">
          <img
            src="/buildings1.jpg"
            alt="Law Firm"
            className="hero-image"
          />
        </div>
        <div className="col right-space" />

        {/* Linha 2 */}
        <div className="col side-color short" />
        <div className="col content-area">
          <div className="heading-area">
            <h2>Sobre</h2>
            <h2>o escritório</h2>
          </div>
          <div className="sobre">
            <p>
              O escritório Sovierzoski | Carleial | Magnabosco Advogados é formado por uma equipe de advogados com sólida formação acadêmica e experiência prática, atuando em diversas áreas do Direito. Nossa missão é oferecer soluções jurídicas personalizadas, com foco na ética, transparência e excelência no atendimento.
            </p>
          </div>
        </div>
        <div className="col right-space tall" />
      </div>
    </div>
  );
};

export default About;
