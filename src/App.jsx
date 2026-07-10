import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MatrixBackground from './components/MatrixBackground';

export default function App() {
  const [currentPage, setCurrentPage] = useState('sobre');

  const renderPage = () => {
    switch (currentPage) {
      case 'sobre':
        return <Hero />;
      case 'projetos':
        return <Projects />;
      case 'contato':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div style={{ background: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <MatrixBackground /> {/* Vai ficar no -zIndex */}

      <div style={{ position: 'relative', zIndex: 1, flex: 1 }}> {/* Conteúdo na frente */}
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <div style={{ paddingBottom: '4rem' }}>
          {renderPage()}
        </div>

        <footer id="contato" style={{ 
          marginTop: 'auto', 
          background: 'rgba(0,0,0,0.85)', // fundo semi-transparente
          backdropFilter: 'blur(4px)',
          color: '#0f0', 
          textAlign: 'center', 
          padding: '1rem' 
        }}>
          <p>© {new Date().getFullYear()} - Desenvolvido por Raphael Victor.</p>
        </footer>
      </div>
    </div>
  );
}