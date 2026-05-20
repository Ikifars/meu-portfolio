import React from 'react';
import { Github, Linkedin, ExternalLink, Terminal, Code2 } from 'lucide-react';

export default function App() {
  // Array de projetos para renderizar dinamicamente
  const meusProjetos = [
    {
      titulo: "DevTrack",
      descricao: "Aplicação web para monitoramento de tarefas, gerenciamento de projetos e colaboração em equipe, com integração a APIs externas.",
      tecnologias: ["Python", "Flask", "SQLite", "HTML/CSS & JavaScript", "JWT"],
      linkGithub: "https://github.com/Ikifars/Dev-TrackV2",
    },
    {
      titulo: "Bot automação B3",
      descricao: "Software de automação analítica que monitora o mercado financeiro em tempo real.",
      tecnologias: ["Python", "Pandas"],
      linkGithub: "https://github.com/Ikifars/b3-bot-python",
    },
    {
      titulo: "Portfólio Pessoal",
      descricao: "Meu portfólio pessoal, desenvolvido com React, para apresentar meus projetos e habilidades de forma moderna e responsiva.",
      tecnologias: ["JavaScript", "React", "CSS"],
      linkGithub: "https://github.com/Ikifars/meu-portfolio"
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
        <h1>Olá, eu sou Raphael Victor<span>Desenvolvedor Full-Stack</span></h1>
        <p>
          Focado em criar soluções modernas e eficientes com JavaScript, React, 
          Node.js e automações inteligentes. Transformando linhas de código em experiências reais.
        </p>
        
        {/* Redes Sociais */}
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <a href="https://github.com/ikifars" target="_blank" rel="noreferrer" style={{ color: '#fff' }}>
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/raphael-victor-a29183234/" target="_blank" rel="noreferrer" style={{ color: '#fff' }}>
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
        <p>© {new Date().getFullYear()} - Desenvolvido por Raphael Victor.</p>
      </footer>
    </div>
  );
}