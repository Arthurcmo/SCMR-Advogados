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
    return (
        <>
            <Helmet>
                <title>Sovierzoski, Carleial & Magnabosco Advogados</title>
                <meta
                    name="description"
                    content="Escritório de advocacia em Curitiba especializado em Direito Empresarial, Tributário, Trabalhista e Imobiliário, com atuação em diversas áreas estratégicas."
                />
                <meta
                    name="keywords"
                    content="Administrativo e Regulatório, Agronegócio, Ambiental, Comércio Internacional e Aduaneiro, Contratos, Empresaria, Imobiliário, Precatórios e Ativos Judiciais, Recuperacional e Falimenta, Relações de Trabalho, Societário, Tecnologia e Propriedade Intelectual, Tributário, empresarial, Curitiba, advogados, Sovierzoski, Carleial, Magnabosco"
                />
                <link rel="canonical" href="https://scmradvogados.com.br" />

                <meta property="og:title" content="Sovierzoski, Carleial & Magnabosco Advogados | Advocacia Estratégica em Curitiba" />
                <meta property="og:description" content="Escritório de advocacia em Curitiba especializado em Direito Empresarial, Tributário, Trabalhista e Civil. Atendimento personalizado e soluções estratégicas para empresas." />
                <meta property="og:image" content="https://scmradvogados.com.br/android-chrome-512x512.png" />
                <meta property="og:url" content="https://scmradvogados.com.br" />
                <meta property="og:type" content="website" />


                <meta name="twitter:title" content="Sovierzoski, Carleial & Magnabosco Advogados | Advocacia Estratégica em Curitiba" />
                <meta name="twitter:description" content="Escritório de advocacia em Curitiba especializado em Direito Empresarial, Tributário, Trabalhista e Civil. Atendimento personalizado e soluções estratégicas para empresas." />
                <meta name="twitter:image" content="https://scmradvogados.com.br/Publicacao.jpg" />
                <meta name="twitter:url" content="https://scmradvogados.com.br" />
                <meta name="twitter:card" content="summary_large_image" />

                <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org",
                    "@type": "LegalService",
                    "name": "Sovierzoski, Carleial & Magnabosco advogados",
                    "url": "https://scmradvogados.com.br",
                    "logo": "/public\android-chrome-512x512.png",
                    "description": "Escritório de advocacia em Curitiba especializado em Direito Empresarial, Tributário, Trabalhista e Imobiliário, com atuação em diversas áreas estratégicas.",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Rua Tibagi, 576, Sala 607",
                        "addressLocality": "Curitiba",
                        "addressRegion": "PR",
                        "postalCode": " 80060-110",
                        "addressCountry": "BR"
                    },
                    "telephone": "+55 41 98807-7655",
                    "sameAs": [
                        "https://www.instagram.com/scmradvogados",
                        "https://www.linkedin.com/company/sovierzoski-carleial-magnabosco-advogados",
                        
                    ]
                }
                `}</script>
            </Helmet>
            <div >
                <Hero />
                <BlogList />

            </div>
        </>
    );
};

export default Home;