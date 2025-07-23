import React, { useState } from 'react';
import './PracticeAreas.css';

const practiceAreas = [
  { title: "Civil Litigation", description: "Lorem ipsum dolor sit amet..." },
  { title: "Corporate Law", description: "Advising businesses on structure..." },
  { title: "Family Law", description: "Handling sensitive family matters..." },
  { title: "Criminal Defense", description: "Protecting your rights..." },
  { title: "Real Estate Law", description: "Ensuring secure property transactions." },
  { title: "Labor & Employment", description: "Navigating employer/employee rights." },
];

const PracticeAreas = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <div className="practice-wrapper">
      {/* First row */}
      <div className="side-blank" />
      <div className="image-section">
        <img src="/buildings2.jpg" alt="Law Firm" className="hero-image" />
      </div>
      <div className="side-right" />

      {/* Second row */}
      <div className="left-color" />
      <div className="content-wrapper">
        <div className="left-panel">
          <h3 className="practice-areas-h3">ÁREAS DE</h3>
          <h3 className="practice-areas-h3">ATUAÇÃO</h3>

          <ul className="practice-areas-list">
            {practiceAreas.map((area, index) => (
              <li
                key={index}
                onClick={() => setSelectedArea(index)}
                style={{
                  cursor: 'pointer',
                  color: selectedArea === index ? 'var(--color-primary)' : '#676'
                }}
              >
                <p>{area.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="right-panel">
          {selectedArea !== null && (
            <button
              onClick={() => setSelectedArea(null)}
              className="close-button"
            >
              ←
            </button>
          )}
          <h2>{selectedArea !== null ? practiceAreas[selectedArea].title : 'Atuação'}</h2>
          <p>
            {selectedArea !== null
              ? practiceAreas[selectedArea].description
              : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quidem quod incidunt...'}
          </p>
        </div>
      </div>
      <div className="side-right bottom" />
    </div>
  );
};

export default PracticeAreas;
