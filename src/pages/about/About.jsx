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

            {/* Open Graph (Facebook, LinkedIn) */}
            <meta property="og:title" content="Sobre Nós | Sovierzoski | Carleial | Magnabosco Advogados" />
            <meta property="og:description" content="Escritório fundado por advogados da PUC-PR com"/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.seusite.com.br/sobre" />
        <meta property="og:image" content="https://www.seusite.com.br/imagens/logo-social.jpg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre Nós | Sovierzoski | Carleial | Magnabosco Advogados" />
        <meta name="twitter:description" content="Conheça nossa história e especialidades jurídicas." />
        <meta name="twitter:image" content="https://www.seusite.com.br/imagens/logo-social.jpg" />
      </Helmet>

      <h1 className="titulo">Sovierzoski | Carleial | Magnabosco Advogados</h1>
      <p className="descricao">
        Fundado por três profissionais formados pela PUC-PR, nosso escritório une excelência acadêmica e prática para oferecer soluções jurídicas modernas, humanas e eficazes.
      </p>
      {/* restante do conteúdo */}
    </div>
  );
};

export default About;
