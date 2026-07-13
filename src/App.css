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
    // Removido o <main> duplicado para não chocar com seletores globais e envelopado em um container controlado
    <section className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
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
          <div className="project-card" key={index} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '1rem' }}>
              {index % 2 === 0 ? <Code2 size={22} color="var(--primary)" /> : <Terminal size={22} color="var(--primary)" />}
            </div>
            <h3>{projeto.titulo}</h3>
            {/* O flex-grow garante que, mesmo com descrições de tamanhos diferentes, os botões do github fiquem alinhados perfeitamente na mesma linha embaixo */}
            <p style={{ flexGrow: 1, margin: '0 0 1.25rem 0' }}>{projeto.descricao}</p>
            
            <div className="tags" style={{ marginBottom: '1.5rem' }}>
              {projeto.tecnologias.map((tech, i) => (
                <span className="tag" key={i}>{tech}</span>
              ))}
            </div>

            <a 
              href={projeto.linkGithub} 
              target="_blank" 
              rel="noreferrer" 
              style={{ 
                color: 'var(--primary)', 
                textDecoration: 'none', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: '500',
                width: 'fit-content'
              }}
            >
              Ver no GitHub <ExternalLink size={15} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
