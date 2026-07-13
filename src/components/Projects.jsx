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
    <>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .project-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(14, 165, 233, 0.4);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }
        .project-card h3 {
          font-size: 1.25rem;
          color: #fff;
          margin: 0 0 0.5rem 0;
          font-weight: 600;
        }
        .project-card p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin: 0 0 1.25rem 0;
          flex-grow: 1; /* Garante que o botão do github fique sempre alinhado embaixo */
        }
        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .project-tag {
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.25rem 0.75rem;
          background: rgba(14, 165, 233, 0.1);
          color: #38bdf8;
          border: 1px solid rgba(14, 165, 233, 0.15);
          border-radius: 15px;
        }
        .project-link {
          color: #0ea5e9;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s ease;
          width: fit-content;
        }
        .project-link:hover {
          color: #38bdf8;
        }
      `}</style>

      <main className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          color: '#fff', 
          textAlign: 'center', 
          marginBottom: '2.5rem',
          fontWeight: '600'
        }}>
          Meus Projetos
        </h2>
        
        <div className="projects-grid">
          {meusProjetos.map((projeto, index) => (
            <div className="project-card" key={index}>
              <div style={{ marginBottom: '1rem' }}>
                {index % 2 === 0 ? <Code2 size={22} color="#0ea5e9" /> : <Terminal size={22} color="#0ea5e9" />}
              </div>
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
              
              <div className="tags-container">
                {projeto.tecnologias.map((tech, i) => (
                  <span className="project-tag" key={i}>{tech}</span>
                ))}
              </div>

              <a 
                href={projeto.linkGithub} 
                target="_blank" 
                rel="noreferrer" 
                className="project-link"
              >
                Ver no GitHub <ExternalLink size={15} />
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
