import React from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const links = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <nav className="navbar">
      <div className="logo" style={{ cursor: 'pointer' }} onClick={() => setCurrentPage('sobre')}>
        &lt; Raphael Victor - Dev /&gt;
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