import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MatrixBackground from './components/MatrixBackground'; // 1. Importa aqui

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
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#000' }}> {/* 2. Fundo preto */}
      <MatrixBackground /> {/* 3. Joga ele aqui em cima de tudo */}

      <div style={{ position: 'relative', zIndex: 1 }}> {/* 4. Garante que o conteúdo fique na frente */}
        {/* Navbar fixa recebendo o estado de navegação */}
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* Conteúdo Principal Dinâmico */}
        <div style={{ flex: 1, paddingBottom: '4rem' }}>
          {renderPage()}
        </div>

        {/* Footer Fixo */}
        <footer id="contato" style={{ marginTop: 'auto', color: '#0f0', textAlign: 'center', padding: '1rem' }}>
          <p>© {new Date().getFullYear()} - Desenvolvido por Raphael Victor.</p>
        </footer>
      </div>
    </div>
  );
}