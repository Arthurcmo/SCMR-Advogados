import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
import matter from "gray-matter";
import "./BlogPost.css";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const postFiles = import.meta.glob('../../posts/*.md', {
        import: 'default',
        query: '?raw'
      });

      for (const path in postFiles) {
        if (path.includes(`${slug}.md`)) {
          try {
            const rawContent = await postFiles[path]();
            const { data, content } = matter(rawContent);
            setPost({ ...data, content });
          } catch (err) {
            console.error('Erro ao carregar post:', err);
          }
          break;
        }
      }
    }

    fetchPost();
  }, [slug]);

  if (!post) return <div className="loading">⏳ Carregando artigo...</div>;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "author": { "@type": "Person", "name": post.author || "Equipe SCM" },
    "datePublished": post.date,
    "articleBody": post.content,
    "publisher": {
      "@type": "Organization",
      "name": "Sovierzoski, Carleial & Magnabosco Advogados"
    }
  };

  return (
    <div className=" practice-wrapper publications-layout  ">
      {/* Top Row */}
      <div className="side-blank" />
      <div className="image-section">
        <img
          src="/Publicacao.webp"
          alt="Artigo"
          className="hero-image"
        />
      </div>
      <div className="side-right" />

      {/* Bottom Row */}
      <div className="left-color" />
      <div className="content-wrapper publications-content">
        <div className="left-panel">
          <h3 className="practice-areas-h3">PUBLICAÇÃO</h3>
          <h3 className="practice-areas-h3">ARTIGO</h3>
        </div>

        <div className="right-panel">
          <Helmet>
            <title>{post.title} |SCMR Advogados</title>
            <meta name="description" content={post.excerpt || post.content.slice(0, 160)} />
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
          </Helmet>

          {/* Botão de voltar */}
          <div className="back-button-wrapper">
            <Link to="/publicacoes" className="back-button">
              ← Voltar às publicações
            </Link>
          </div>

          <div className="publication-preview">
            <h1>{post.title}</h1>
            <small>{new Date(post.date).toLocaleDateString()}</small>
            <div>
              <span className="author"> por</span>
              <span className="author-name"> {post.author}</span>
            </div>
            <hr className="custom-divider" />
            <div className="blogPost">
            <ReactMarkdown >{post.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      <div className="side-right bottom" />
    </div>
  );
};

export default BlogPost;
