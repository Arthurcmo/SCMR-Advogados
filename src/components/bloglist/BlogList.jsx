import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import matter from "gray-matter";
import './BlogList.css';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadPosts() {
      const files = import.meta.glob('../../posts/*.md', {
        import: 'default',
        query: '?raw'
      });

      const loadedPosts = [];
      for (const path in files) {
        try {
          const slug = path.split('/').pop().replace('.md', '');
          const raw = await files[path]();
          const { data, content } = matter(raw);
          loadedPosts.push({
            slug,
            title: data.title || slug,
            excerpt: data.excerpt || content.slice(0, 150) + '...',
            date: data.date,
            image: data.image || null,
          });
        } catch (err) {
          console.error('Erro ao carregar post:', err);
        }
      }
      setPosts(loadedPosts);
    }

    loadPosts();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  if (posts.length === 0) return <div>Carregando...</div>;

  const post = posts[currentIndex];

  return (
    <div className="blog-list">
      <div className="blog-header">
        Notícias em Destaque
      </div>
      <div className="blog-flex-container">
        <div className="blog-preview">
          <h2>{post.title}</h2>
          <small>{new Date(post.date).toLocaleDateString()}</small>
          <p>{post.excerpt}</p>
          <Link to={`/blog/${post.slug}`}>Saiba mais</Link>
          <hr />
          <div className="blog-navigation">
            <button onClick={handlePrev} className="blog-nav-button" aria-label="Anterior">
              &#8592;
            </button>
            <div className="blog-dots">
              {posts.map((_, idx) => (
                <span
                  key={idx}
                  className={`blog-dot ${idx === currentIndex ? 'active' : ''}`}
                />
              ))}
            </div>
            <button onClick={handleNext} className="blog-nav-button" aria-label="Próximo">
              &#8594;
            </button>
          </div>
        </div>
        <div className="blog-image">
          <img
            src={post.image || '/botanico.jpg'} alt={post.title}
          />
        </div>
        <div className="digital">
          <img src="/digital.png" alt="Digital" />
        </div>
      </div>
    </div>
  );
};

export default BlogList;
