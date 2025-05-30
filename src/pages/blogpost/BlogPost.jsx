import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
import matter from "gray-matter";
import "./BlogPost.css";
const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);


  useEffect(() => {
  async function fetchPost() {
    console.log('📥 Buscando post...');
    console.log('🔎 Slug atual:', slug);

    const postFiles = import.meta.glob('../../posts/*.md', {
      import: 'default',
      query: '?raw'
    });

    const paths = Object.keys(postFiles);
    console.log('📁 Arquivos encontrados:', paths);

    let found = false;

    for (const path of paths) {
      console.log('🧪 Verificando:', path);

      if (path.includes(`${slug}.md`)) {
        console.log('✅ Match encontrado:', path);
        try {
          const rawContent = await postFiles[path]();
          console.log('📄 Conteúdo bruto carregado.');

          const { data, content } = matter(rawContent);
          console.log('📦 Frontmatter:', data);

          setPost({ ...data, content });
          found = true;
          break;
        } catch (err) {
          console.error('❌ Erro ao carregar post:', err);
        }
      }
    }

    if (!found) {
      console.warn(`⚠️ Post com slug "${slug}" não encontrado.`);
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
      "name": "Sovierzoski | Carleial | Magnabosco Advogados"
    }
  };

  return (
    <div className="blog-container">
      <Helmet>
        <title>{post.title} | Sovierzoski | Carleial | Magnabosco Advogados</title>
        <meta name="description" content={post.excerpt || post.content.slice(0, 160)} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <small>{new Date(post.date).toLocaleDateString()}</small>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
