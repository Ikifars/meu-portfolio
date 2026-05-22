import React from 'react';
import { ExternalLink, Terminal, Code2 } from 'lucide-react';

export default function Projects() {
  const meusProjetos = [
    {
      titulo: "DevTrack",
      descricao: "Aplicação web para monitoramento de tarefas, gerenciamento de projetos e colaboração em equipe, com integração a APIs externas.",
      tecnologias: ["Python", "Flask", "SQLite", "HTML/CSS & JavaScript", "JWT"],
      linkGithub: "https://github.com/Ikifars/Dev-TrackV2",
    },
    {
      titulo: "Bot automação B3",
      descricao: "Software de automação analítica que monitora o mercado financeiro em tempo real e executa rotinas estratégicas.",
      tecnologias: ["Python", "Pandas", "Automation"],
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
    <main className="container">
      <h2 style={{ fontSize: '2rem', borderBottom: '2px solid #1e293b', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
        Meus Projetos
      </h2>
      
      <div className="projects-grid">
        {meusProjetos.map((projeto, index) => (
          <div className="project-card" key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
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
  );
}