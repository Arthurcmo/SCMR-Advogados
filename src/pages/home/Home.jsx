import React from 'react';
import Hero from '../../components/hero/Hero';
import Stats from '../../components/stats/Stats';
import PracticeAreas from '../../components/practiceareas/PracticeAreas';
import Attorneys from '../../components/attorneys/Attorneys';
import CTA from '../../components/cta/CTA';
import Footer from '../../components/footer/Footer';
import BlogList from '../../components/bloglist/BlogList';
import Helmet from 'react-helmet';
import ContactPage from '../../pages/contact/ContactPage';

const Home = () => 
    {
    return (
         <>
            <Helmet>
                <title>Advocacia Sovierzoski Carleial Magnabosco | Direito Civil, Trabalhista e Empresarial</title>
                <meta 
                    name="description" 
                    content="Escritório de advocacia especializado em direito civil, trabalhista e empresarial. Atendimento personalizado em Curitiba e região." 
                />
                <meta 
                    name="keywords" 
                    content="advocacia, direito civil, trabalhista, empresarial, Curitiba, advogados, Sovierzoski, Carleial, Magnabosco"
                />
                <link rel="canonical" href="https://site-advocacia-rust.vercel.app" />
                
                <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org",
                    "@type": "LegalService",
                    "name": "Sovierzoski Carleial Magnabosco Advocacia",
                    "url": "https://site-advocacia-rust.vercel.app",
                    "logo": "/public\android-chrome-512x512.png",
                    "description": "Escritório de advocacia especializado em direito civil, trabalhista e empresarial. Atendimento personalizado em Curitiba.",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Rua Exemplo, 123",
                        "addressLocality": "Curitiba",
                        "addressRegion": "PR",
                        "postalCode": "80000-000",
                        "addressCountry": "BR"
                    },
                    "telephone": "+55 41 3030-9890",
                    "sameAs": [
                        "https://www.instagram.com/seuinsta",
                        "https://www.linkedin.com/in/seulinkedin",
                        "https://www.facebook.com/seufacebook"
                    ]
                }
                `}</script>
            </Helmet>
            <div >
                <Hero />
                <BlogList/>
            </div>
        </>
    );
};

export default Home;