import React from 'react';
import { Github, Linkedin, ExternalLink, Terminal, Code2 } from 'lucide-react';

export default function App() {
  // Array de projetos para renderizar dinamicamente
  const meusProjetos = [
    {
      titulo: "SaaS Dashboard Financeiro",
      descricao: "Interface completa em React para controle financeiro integrado com banco de dados em tempo real.",
      tecnologias: ["React", "JavaScript", "Supabase", "CSS Modules"],
      linkGithub: "https://github.com",
    },
    {
      titulo: "Bot Dashboard de Automação",
      descricao: "Painel web para monitoramento de logs, análises de mercado e execução de estratégias automatizadas.",
      tecnologias: ["React", "Node.js", "Python", "Vite"],
      linkGithub: "https://github.com",
    }
  ];

  return (
    <div>
      {/* Header / Navbar */}
      <nav className="navbar">
        <div className="logo">&lt; DevPortfólio /&gt;</div>
        <div className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero container" id="sobre">
        <h1>Olá, eu sou um <span>Desenvolvedor Full-Stack</span></h1>
        <p>
          Focado em criar soluções modernas e eficientes com JavaScript, React, 
          Node.js e automações inteligentes. Transformando linhas de código em experiências reais.
        </p>
        
        {/* Redes Sociais */}
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: '#fff' }}>
            <Github size={28} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#fff' }}>
            <Linkedin size={28} />
          </a>
        </div>
      </header>

      {/* Seção de Projetos */}
      <main className="container" id="projetos">
        <h2 style={{ fontSize: '2rem', borderBottom: '2px solid #1e293b', paddingBottom: '0.5rem' }}>
          Meus Projetos
        </h2>
        
        <div className="projects-grid">
          {meusProjetos.map((projeto, index) => (
            <div className="project-card" key={index}>
              <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '1rem' }}>
                {index % 2 === 0 ? <Code2 color="#0ea5e9" /> : <Terminal color="#0ea5e9" />}
              </div>
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
              
              <div className="tags" style={{ marginBottom: '1.5rem' }}>
                {projeto.tecnologias.map((tech, i) => (
                  <span className="tag" key={i}>{tech}</span>
                ))}
              </div>

              <a 
                href={projeto.linkGithub} 
                target="_blank" 
                rel="noreferrer" 
                style={{ color: '#0ea5e9', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                Ver no GitHub <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer id="contato">
        <p>© {new Date().getFullYear()} - Desenvolvido com React.</p>
      </footer>
    </div>
  );
}