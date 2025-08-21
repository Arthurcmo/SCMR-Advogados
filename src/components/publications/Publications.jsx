import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";
import './PublicationList.css';

const POSTS_PER_PAGE = 20;

const PublicationsList = () => {
  const [publications, setPublications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadPublications() {
      const files = import.meta.glob('../../posts/*.md', {
        import: 'default',
        query: '?raw'
      });

      const loaded = [];
      for (const path in files) {
        try {
          const slug = path.split('/').pop().replace('.md', '');
          const raw = await files[path]();
          const { data, content } = matter(raw);
          loaded.push({
            slug,
            title: data.title || slug,
            excerpt: data.excerpt || content.slice(0, 150) + '...',
            author: data.author || 'Autor desconhecido',
            date: data.date,
            image: data.image || null,
          });
        } catch (err) {
          console.error('Erro ao carregar publicação:', err);
        }
      }

      // Sort by date descending
      loaded.sort((a, b) => new Date(b.date) - new Date(a.date));
      setPublications(loaded);
    }

    loadPublications();
  }, []);

  const totalPages = Math.ceil(publications.length / POSTS_PER_PAGE);
  console.log('Total pages:', totalPages);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPublications = publications.slice(start, start + POSTS_PER_PAGE);

  return (
    <div className="practice-wrapper publications-layout">
      {/* Top Row */}
      <div className="side-blank" />
      <div className="image-section">
        <img
          src="/Publicacao.jpg"
          alt="Publicações"
          className="hero-image"
        />
      </div>
      <div className="side-right" />

      {/* Bottom Row */}
      <div className="left-color" />
      <div className="content-wrapper publications-content">
        <div className="left-panel">
          <h3 className="practice-areas-h3">PUBLICAÇÕES</h3>
          <h3 className="practice-areas-h3">RECENTES</h3>
        </div>
        <div className="right-panel">
          {currentPublications.map((pub, index) => (
            <div className="publication-preview" key={index}>
              <Link to={`/blog/${pub.slug}`}>
                <h2>{pub.title}</h2>
              </Link>
              <small>{new Date(pub.date).toLocaleDateString()}</small>
              <div>
                <span className="author"> por</span>
                <span className="author-name"> {pub.author}</span>
              </div>
              <p>{pub.excerpt}</p>
              <hr className="custom-divider" />
            </div>
          ))}

          {/* Pagination */}
          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`page-button ${i + 1 === currentPage ? 'active' : ''}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="side-right bottom" />
    </div>
  );
};

export default PublicationsList;
