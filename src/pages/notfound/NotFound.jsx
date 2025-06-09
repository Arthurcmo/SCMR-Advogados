// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, não conseguimos encontrar a página que você está procurando.</p>
      <Link to="/" className="button">Voltar para a página inicial</Link>
    </div>
  );
}

export default NotFound;
