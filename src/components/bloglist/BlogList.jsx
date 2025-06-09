import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import matter from "gray-matter";
import './BlogList.css';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadPosts() {
      const files = import.meta.glob('../../posts/*.md', {
        import: 'default',
        query: '?raw'
      });
      console.log('📁 Arquivos encontrados:', Object.keys(files));
      const loadedPosts = [];

      for (const path in files) {
        try {
          const slug = path
            .split('/')
            .pop()
            .replace('.md', '');

          const raw = await files[path]();
          const { data, content } = matter(raw);
          console.log(`📄 Carregando post: ${raw}`);
          loadedPosts.push({
            slug,
            title: data.title || slug,
            excerpt: data.excerpt || content.slice(0, 150) + '...',
            date: data.date,
          });
          console.log(loadedPosts);
        } catch (err) {
          console.error('Erro ao carregar post:', err);
        }
      }
      setPosts(loadedPosts);
    } loadPosts();
  }, []); 
  


  return (
    <div className="blog-list">
      <h1>📚 Blog </h1>
      {posts.map(post => (
        <div key={post.slug} className="blog-preview" onClick={() => navigate(`/blog/${post.slug}`)}>
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
