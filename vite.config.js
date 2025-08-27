// https://vite.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
export default defineConfig({
  plugins: [
    react(),
    Sitemap ({
      hostname: 'https://scmradvogados.com.br', // seu domínio
      routes: [
        '/',          // página inicial
        '/sobre',    
        '/contato',   
        '/servicos' ,
        'publicacoes',
        '/servicos',
        '/equipe'  
      ],
      changefreq: 'monthly', // frequência de atualização
      priority: 0.8          // prioridade padrão
    })
  ]
})

