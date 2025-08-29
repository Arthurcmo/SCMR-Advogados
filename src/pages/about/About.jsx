import React from "react";
import { Helmet } from "react-helmet";
import "./About.css";

const About = () => {
  return (
    <div className="abt-container">
      <Helmet>
  <title>Sobre Nós | Sovierzoski, Carleial & Magnabosco Advogados</title>
  
  {/* SEO Básico */}
  <meta
    name="description"
    content="O Sovierzoski, Carleial & Magnabosco Advogados nasceu para oferecer soluções jurídicas estratégicas e personalizadas. Escritório full service com atuação em Direito Empresarial, Tributário, Trabalhista, Imobiliário e Digital."
  />
  <meta
    name="keywords"
    content="advocacia empresarial Curitiba, direito empresarial, direito tributário, direito trabalhista, direito imobiliário, direito digital, LGPD, escritório de advocacia Curitiba, Sovierzoski Carleial Magnabosco"
  />
  <meta name="author" content="Sovierzoski, Carleial & Magnabosco Advogados" />

  {/* Open Graph (Facebook / LinkedIn / WhatsApp) */}
  <meta property="og:title" content="Sobre Nós | Sovierzoski, Carleial & Magnabosco Advogados" />
  <meta
    property="og:description"
    content="Conheça a história, valores e atuação do nosso escritório de advocacia em Curitiba. Excelência, ética e inovação em Direito Empresarial, Tributário, Trabalhista, Imobiliário e Digital."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://scmradvogados.com.br/sobre" />
  <meta property="og:image" content="https://scmradvogados.com.br/public/android-chrome-512x512.png" />
</Helmet>


      <div className="practice-wrapper">
        <h1 className="visually-hidden">Sobre o escritório</h1>
        {/* First row */}
        <div className="side-blank" />
        <div className="image-section">
          <img src="/AboutComp.webp" alt="Law Firm" className="abt-hero-image" />
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
              Nascemos de uma amizade movida por propósito e visão de futuro. Um escritório concebido para oferecer às empresas soluções jurídicas personalizadas.
            </p>
            <p>Entregamos mais do que respostas — estruturamos estratégias alinhadas aos objetivos de quem busca segurança, eficiência e evolução.</p>

            <p>No Soviersoski, Carleial & Magnabosco Advogados, unimos atuação técnica rigorosa e compreensão profunda das necessidades empresariais, conduzindo cada demanda com precisão e comprometimento absoluto. Nosso time, formado por profissionais de sólida trajetória, atua de maneira coordenada para atender com excelência casos de alta complexidade, sempre orientados por princípios éticos e visão estratégica.</p>
            <p>Com uma abordagem que valoriza a clareza, a agilidade e a consistência jurídica, prestamos assessoria consultiva e contenciosa em diversas áreas do Direito Empresarial, oferecendo soluções que preservam interesses, mitigam riscos e potencializam oportunidades.</p>
          </div>
        </div>
        <div className="side-right bottom" />
      </div>

    </div>
  );
};

export default About;
