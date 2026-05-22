import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <header className="hero container">
      <h1>Olá, eu sou Raphael Victor <span>Desenvolvedor Full-Stack</span></h1>
      <p>
        Focado em criar soluções modernas e eficientes com JavaScript, React, 
        Node.js e automações inteligentes. Transformando linhas de código em experiências reais.
      </p>
      
      <div style={{ marginBottom: '2rem' }}>
        <a 
          href="/curriculo.pdf" 
          target="_blank" 
          rel="noreferrer" 
          className="btn-cv"
        >
          <FileText size={20} /> Visualizar Currículo
        </a>
      </div>
      
      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
        <a href="https://github.com/ikifars" target="_blank" rel="noreferrer" style={{ color: '#fff' }}>
          <Github size={28} />
        </a>
        <a href="https://www.linkedin.com/in/raphael-victor-a29183234/" target="_blank" rel="noreferrer" style={{ color: '#fff' }}>
          <Linkedin size={28} />
        </a>
      </div>
    </header>
  );
}