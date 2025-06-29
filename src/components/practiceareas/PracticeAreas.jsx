import React from 'react';
import './PracticeAreas.css';

const practiceAreas = [
  {
    title: "Civil Litigation",
    description: "Representing clients in civil disputes with professionalism and strategy.",
  },
  {
    title: "Corporate Law",
    description: "Advising businesses on structure, contracts, and compliance.",
  },
  {
    title: "Family Law",
    description: "Handling sensitive family matters with compassion and discretion.",
  },
  {
    title: "Criminal Defense",
    description: "Protecting your rights with experienced and dedicated defense.",
  },
  {
    title: "Real Estate Law",
    description: "Ensuring secure and fair property transactions.",
  },
  {
    title: "Labor & Employment",
    description: "Navigating employer and employee rights with clarity.",
  }
];

const PracticeAreas = () => {
  return (
    <section className="practice-areas">
      <h2 className="section-title">Áreas de Atuação</h2>
      <div className="areas-grid">
        {practiceAreas.map((area, index) => (
          <div className="area-card" key={index}>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreas;
