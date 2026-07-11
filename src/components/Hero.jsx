import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

export default function Hero() {
  // Estado e referência para controlar a animação ao rolar a página
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
          observer.unobserve(entry.target); // Roda a animação apenas uma vez
        }
      },
      { threshold: 0.1 } // Ativa quando 10% da seção estiver na tela
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <>
      {/* SEU CÓDIGO ORIGINAL (INTACTO) */}
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

      {/* --- NOVA SEÇÃO: SOBRE MIM (SEM FUNDO) --- */}
      <section 
        ref={aboutRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
          padding: '6rem 2rem',
          background: 'transparent', // Sem fundo para destacar o tema global
          maxWidth: '900px',
          margin: '0 auto',
          flexWrap: 'wrap',
          opacity: isAboutVisible ? 1 : 0,
          transform: isAboutVisible ? 'translateX(0)' : 'translateX(100px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        {/* Miniatura da Foto */}
        <div style={{ flexShrink: 0 }}>
          <img 
            src="/sua-foto.jpg" // Substitua pelo caminho real da sua imagem no /public
            alt="Raphael Victor" 
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #fff', // Opcional: uma bordinha fina para dar contraste
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}
          />
        </div>

        {/* Texto descritivo */}
        <div style={{ flex: '1', minWidth: '280px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>
            Sobre Mim
          </h2>
          <p style={{ lineHeight: '1.6', fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
            Sou fascinado por resolver problemas complexos através da tecnologia. Minha jornada no desenvolvimento 
            foca em construir aplicações robustas do back-end ao front-end, aplicando boas práticas de código 
            e criando automações que otimizam processos do dia a dia. Estou sempre em busca de aprender novas 
            ferramentas e refinar minhas habilidades para entregar projetos com real valor técnico e visual.
          </p>
        </div>
      </section>
    </>
  );
}
