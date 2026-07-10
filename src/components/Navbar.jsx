import React from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const links = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <nav className="navbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div 
        className="logo" 
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} 
        onClick={() => setCurrentPage('sobre')}
      >
        {/* Substitua pelo nome exato do arquivo que está na pasta public */}
        <img 
          src="/logoport.png" 
          alt="Raphael Victor Logo" 
          style={{ 
            height: '40px',       // Altura ideal para uma navbar sem quebrar o layout
            width: 'auto',        // Mantém a proporção original do quadrado
            objectFit: 'contain'  // Garante que a imagem não distorça
          }} 
        />
      </div>
      <div className="nav-links">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => setCurrentPage(link.id)}
            className={`nav-btn ${currentPage === link.id ? 'active' : ''}`}
            style={{
              background: 'none',
              border: 'none',
              color: currentPage === link.id ? '#0ea5e9' : '#fff',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: currentPage === link.id ? 'bold' : 'normal',
              padding: '0.5rem 1rem'
            }}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
