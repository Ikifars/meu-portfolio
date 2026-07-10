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
    /* 
      CORREÇÃO: Mudamos o background de '#000' para 'transparent'.
      Dessa forma, o Matrix (que está fixado no fundo) consegue aparecer!
    */
    <div style={{ background: 'transparent', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <MatrixBackground /> {/* Agora ele vai aparecer perfeitamente no fundo */}

    
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: 'rgba(11, 15, 25, 0.40)', // 40% opacidade
        backdropFilter: 'blur(1px)' // Um leve desfoque opcional
      }}> 
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <div style={{ paddingBottom: '4rem', flex: 1 }}>
          {renderPage()}
        </div>

        <footer id="contato" style={{ 
          marginTop: 'auto', 
          background: 'rgba(0,0,0,0.5)', // fundo ligeiramente mais leve para combinar
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
