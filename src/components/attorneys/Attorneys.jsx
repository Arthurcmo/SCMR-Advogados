import React from 'react';
import './Attorneys.css';

const attorneys = [
  {
    name: "Dr. Sovierzoski",
    title: "Founding Partner – Civil & Real Estate Law",
    image: "/leco.jpeg",
    bio: "Expert in litigation and real estate transactions, with over 15 years of experience representing clients in complex civil cases.",
  },
  {
    name: "Dr. Carleial",
    title: "Partner – Criminal & Corporate Law",
    image: "/leco.jpeg",
    bio: "Recognized for his defense work in high-profile criminal cases and deep knowledge of corporate compliance.",
  },
  {
    name: "Dr. Magnabosco",
    title: "Partner – Labor & Family Law",
    image: "/leco.jpeg",
    bio: "Advocates for clients with compassion in family matters and expert representation in labor disputes.",
  },
];

const Attorneys = () => {
  return (
    <section className="attorneys-section">
      <h2 className="section-title">Meet Our Attorneys</h2>
      <div className="attorneys-grid">
        {attorneys.map((attorney, index) => (
          <div className="attorney-card" key={index}>
            <div className="attorney-image-wrapper">
              <img src={attorney.image} alt={attorney.name} className="attorney-image" />
            </div>
            <h3 className="attorney-name">{attorney.name}</h3>
            <p className="attorney-title">{attorney.title}</p>
            <p className="attorney-bio">{attorney.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Attorneys;
