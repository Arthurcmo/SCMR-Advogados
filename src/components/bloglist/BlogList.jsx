import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const files = import.meta.glob('../../posts/*.md', {
        import: 'default',
        query: '?raw'
      });

      const loadedPosts = [];

      for (const path in files) {
        try {
          const slug = path
            .split('/')
            .pop()
            .replace('.md', '');

          const raw = await files[path]();
          const { data, content } = matter(raw);

          loadedPosts.push({
            slug,
            title: data.title || slug,
            excerpt: data.excerpt || content.slice(0, 150) + '...',
            date: data.date,
          });
        } catch (err) {
          console.error('Erro ao carregar post:', err);
        }
      }

      // Ordenar por data (opcional)
      loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

      setPosts(loadedPosts);
    }

    loadPosts();
  }, []);

  return (
    <div className="blog-list">
      <h1>📚 Blog</h1>
      {posts.map(post => (
        <div key={post.slug} className="blog-preview">
          <h2>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <small>{new Date(post.date).toLocaleDateString()}</small>
          <p>{post.excerpt}</p>
          <Link to={`/blog/${post.slug}`}>🔗 Ler mais</Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
