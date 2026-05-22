import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  // Estado que gerencia qual página/view está ativa no momento
  const [currentPage, setCurrentPage] = useState('sobre');

  // Função helper para renderizar o componente correto baseado no estado
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
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar fixa recebendo o estado de navegação */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Conteúdo Principal Dinâmico */}
      <div style={{ flex: 1, paddingBottom: '4rem' }}>
        {renderPage()}
      </div>

      {/* Footer Fixo */}
      <footer id="contato" style={{ marginTop: 'auto' }}>
        <p>© {new Date().getFullYear()} - Desenvolvido por Raphael Victor.</p>
      </footer>
    </div>
  );
}