import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <video className="hero-video" autoPlay loop muted>
                <source src="/path-to-your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img src="/Hero1.jpg" alt="Law Firm" className="hero-image" />
            <div className="hero-content">
                <h1>Welcome to Our Law Firm</h1>
                <p>Professional and Reliable Legal Services</p>
            </div>
        </div>
    );
};

export default Hero;