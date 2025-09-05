import React from 'react';
import Hero from '../../components/hero/Hero';
import Stats from '../../components/stats/Stats';
import PracticeAreas from '../../components/practiceareas/PracticeAreas';
import Attorneys from '../../components/attorneys/Attorneys';
import Footer from '../../components/footer/Footer';
import BlogList from '../../components/bloglist/BlogList';
import Helmet from 'react-helmet';
import ContactPage from '../../pages/contact/ContactPage';

const Home = () => {
    const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://scmradvogados.com.br/#organization",
    "name": "Sovierzoski, Carleial & Magnabosco Advogados",
    "url": "https://scmradvogados.com.br/",
    "logo": "https://scmradvogados.com.br/android-chrome-512x512.png",
    "image": [
      "https://scmradvogados.com.br/android-chrome-512x512.png",
      "https://scmradvogados.com.br/AboutPhoto.jpg",
      "https://scmradvogados.com.br/PaginaInicial.webp"
    ],
    "description": "Escritório de advocacia em Curitiba especializado em Direito Empresarial, Tributário, Trabalhista e Imobiliário.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Tibagi, 576, Sala 607",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "80060-110",
      "addressCountry": "BR"
    },
    "telephone": "+55-41-98807-7655",
    "areaServed": "BR",
    "sameAs": [
      "https://www.instagram.com/scmradvogados",
      "https://www.linkedin.com/company/sovierzoski-carleial-magnabosco-advogados"
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://scmradvogados.com.br/#website",
    "url": "https://scmradvogados.com.br/",
    "name": "Sovierzoski, Carleial & Magnabosco Advogados",
    "publisher": { "@id": "https://scmradvogados.com.br/#organization" },
    "inLanguage": "pt-BR"
  };
    return (
        <>
                <Helmet>
      {/* Título e canonical */}
      <title>Sovierzoski, Carleial & Magnabosco Advogados</title>
      <link rel="canonical" href="https://scmradvogados.com.br/" />

      {/* Meta description enxuta e objetiva */}
      <meta
        name="description"
        content="Escritório de advocacia em Curitiba especializado em Direito Empresarial, Tributário, Trabalhista e Imobiliário."
      />
     
      {/* Open Graph */}
      <meta property="og:site_name" content="SCMR Advogados" />
      <meta property="og:title" content="Sovierzoski, Carleial & Magnabosco Advogados | Advocacia Estratégica em Curitiba" />
      <meta property="og:description" content="Atendimento personalizado e soluções estratégicas em Direito Empresarial, Tributário, Trabalhista e Imobiliário." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://scmradvogados.com.br/" />
      <meta property="og:image" content="https://scmradvogados.com.br/light.png" />
      <meta property="og:image:alt" content="Logomarca e fachada do escritório SCMR Advogados" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Sovierzoski, Carleial & Magnabosco Advogados | Advocacia Estratégica em Curitiba" />
      <meta name="twitter:description" content="Direito Empresarial, Tributário, Trabalhista e Imobiliário em Curitiba." />
      <meta name="twitter:image" content="https://scmradvogados.com.br/light.png" />

      {/* JSON-LD (Organization/LegalService) */}
      <script type="application/ld+json">
        {JSON.stringify(orgJsonLd)}
      </script>

      {/* JSON-LD (WebSite) */}
      <script type="application/ld+json">
        {JSON.stringify(websiteJsonLd)}
      </script>
    </Helmet>

            <div >
                <Hero />
                <BlogList />

            </div>
        </>
    );
};

export default Home;