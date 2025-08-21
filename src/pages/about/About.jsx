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
    <img src="/AboutPhoto.webp" alt="Law Firm" className="hero-image" />
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
