import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
const Hero = () => {
    const images = [
        "/heronew1.webp",
        "/heronew2.jpg",
        "/heronew3.jpg",
    ];
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="hero-container">
            {/* Primeira linha */}
            <div className="hero-row">
                <div className="hero-side" />
                <div className="hero-image-wrapper">
                    <img
                        src={images[current]}
                        alt="Law Firm"
                        className="hero-image"
                    />
                </div>
                <div className="hero-content" />
            </div>

            {/* Segunda linha */}
            <div className="hero-row">
                <div className="hero-side secondary" />
                <div className="hero-info-wrapper">
                    <div className="subtitle">NOTÍCIAS EM DESTAQUE</div>
                    <div className="sobre" style={{padding:0}}>
                        <h2>Apresentação</h2>
                        <p>
                            Sovierzoski, Carleial & Magnabosco reúne advogados com trajetória sólida e atuação destacada em diversas áreas do Direito. Nosso trabalho é pautado pela cooperação entre especialistas, permitindo análises precisas e soluções jurídicas sob medida para cada cliente. Com presença em diferentes segmentos e abrangência que ultrapassa fronteiras, prestamos assessoria estratégica para demandas complexas e de alta relevância.
                        </p>
                        <Link to="/sobre" className="button">Saiba mais</Link>

                    </div>
                </div>
                <div className="hero-side" />
            </div>
        </div>
    );
};

export default Hero;


