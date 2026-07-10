import React from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const links = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <nav className="navbar">
      <div 
        className="logo" 
        style={{ 
          cursor: 'pointer', 
          display: 'flex', 
          alignItems: 'center',
          height: '100%',     // Força o container a usar apenas a altura nativa da navbar
          maxHeight: '45px'   // Limita o teto do container para não esticar a barra
        }} 
        onClick={() => setCurrentPage('sobre')}
      >
        <img 
          src="/logoport.png" 
          alt="Raphael Victor" 
          style={{ 
            height: '65px',          // Mantém a logo grande
            maxHeight: '180%',       // Permite que ela transborde levemente se necessário, sem esticar a nav
            width: 'auto',        
            objectFit: 'contain',
            transform: 'scale(1.3)', // Aumenta o zoom da logo interna sem empurrar as bordas do layout
            transformOrigin: 'left center'
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
