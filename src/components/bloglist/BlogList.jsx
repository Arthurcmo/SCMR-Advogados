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
      query: '?raw',
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
          date: new Date(data.date),
          image: data.image || null,
        });
      } catch (err) {
        console.error('Erro ao carregar post:', err);
      }
    }

    // Ordena por data decrescente e pega os 10 mais recentes
    const sortedPosts = loadedPosts
      .sort((a, b) => b.date - a.date)
      .slice(0, 10);

    setPosts(sortedPosts);
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

      <div className="blog-flex-container">
        <div className="blog-header">
          NOTÍCIAS EM DESTAQUE
        </div>
        <div className="blog-preview">
          <h2>{post.title}</h2>
          <small>{new Date(post.date).toLocaleDateString()}</small>
          <p>{post.excerpt}</p>
          <Link to={`/blog/${post.slug}`}>Saiba mais</Link>
          <hr />
          <div className="blog-navigation">
            
            <div className="blog-dots">
              {posts.map((_, idx) => (
                <span
                  key={idx}
                  className={`blog-dot ${idx === currentIndex ? 'active' : ''}`}
                />
              ))}
            </div>
            <div className="blog-nav">
            <button onClick={handlePrev} className="blog-nav-button" aria-label="Anterior">
              &#8592;
            </button>
            <button onClick={handleNext} className="blog-nav-button" aria-label="Próximo">
              &#8594;
            </button>
            </div>
          </div>
        </div>
        <div className="blog-image">
          <img
            src={post.image || '/botanico.jpg'} alt={post.title}
          />
        </div>



        
        {/* Mobile - preview de texto */}
       
 <div className="blog-preview-mobile">
          <h2>{post.title}</h2>
          <small>{new Date(post.date).toLocaleDateString()}</small>
          <p>{post.excerpt}</p>
          <Link to={`/blog/${post.slug}`} className="a">Saiba mais</Link>
        </div>
                {/* Mobile - navegação */}
        <div className="blog-navigation-mobile">
          
          <div className="blog-dots">
            {posts.map((_, idx) => (
              <span
                key={idx}
                className={`blog-dot ${idx === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>
          <div>

          <button onClick={handlePrev} className="blog-nav-button" aria-label="Anterior">
            &#8592;
          </button>
          <button onClick={handleNext} className="blog-nav-button" aria-label="Próximo">
            &#8594;
          </button>
          </div>
        </div>
        
        {/* Mobile - imagem */}
        <div className="blog-image-mobile">
          <img
            src={post.image || '/botanico.jpg'}
            alt={post.title}
          />
        </div>
        


            <div className="digital" style={{
                    position: 'absolute',
                    top: '780px',
                    left: '83vw',
                    zIndex: 1000
                }}>
                    <img src="/digital.png" alt="Digital" style={{ width: 'auto', height: '350px', overflow: 'hidden' }} />
                </div>
      </div>
    </div>
  );
};

export default BlogList;
