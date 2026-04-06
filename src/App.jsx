import React from 'react';

function App() {
  const competencias = [
    { categoria: "Backend", itens: "Python, Automações, Integração de APIs, Supabase" },
    { categoria: "Frontend", itens: "JavaScript (ES6+), React, HTML5, CSS3 Semântico" },
    { categoria: "Ferramentas", itens: "Git, GitHub, Metodologias Ágeis (Scrum), Vercel" }
  ];

  const projetos = [
    { id: 1, titulo: "Automações & Bot de Trading", desc: "Scripts em Python para análise gráfica e automação de processos." },
    { id: 2, titulo: "Sistema de Login Inteligente", desc: "Tela de autenticação moderna com validação em tempo real e UX aprimorada." },
    { id: 3, titulo: "Dashboard Interativo React", desc: "SPA modular para gerenciamento e exibição de dados analíticos." }
  ];

  return (
    <div>
      <nav>
        <h2>RV.dev</h2>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#skills">Competências</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>

      <header>
        <h1>Olá, eu sou o Raphael</h1>
        <p>Desenvolvedor Full Stack | Python & JavaScript</p>
        <p>Construindo soluções web dinâmicas e automações eficientes de ponta a ponta.</p>
      </header>

      <section id="about">
        <h2>Sobre & Currículo</h2>
        <p>Unindo o poder de processamento do Python no backend com a agilidade do React no frontend.</p>
      </section>

      <section id="skills">
        <h2>Competências</h2>
        {competencias.map((comp, idx) => (
          <div key={idx}>
            <h3>{comp.categoria}</h3>
            <p>{comp.itens}</p>
          </div>
        ))}
      </section>

      <section id="projects">
        <h2>Projetos em Destaque</h2>
        {projetos.map(proj => (
          <div key={proj.id}>
            <h3>{proj.titulo}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </section>

      <section id="contact">
        <h2>Contato</h2>
        <p>Email: seu-email@exemplo.com</p>
      </section>
    </div>
  );
}

export default App;