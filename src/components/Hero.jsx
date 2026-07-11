import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

export default function Hero() {
  const [animateAbout, setAnimateAbout] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateAbout(true);
          observer.unobserve(entry.target); // Executa a animação apenas uma vez ao rolar
        }
      },
      { threshold: 0.15 } // Dispara quando 15% da seção estiver visível
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  // Lista de tecnologias com ícones via URLs públicas de CDN (Devicon) para garantir que apareçam perfeitamente
  const stacks = [
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', filter: true },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  ];

  return (
    <>
      {/* Injeção de estilo nativo para garantir que o efeito de deslizar funcione perfeitamente */}
      <style>{`
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(120px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .about-section-animated {
          animation: slideInFromRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
        }
        .stack-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.3) !important;
        }
      `}</style>

      {/* SEU CÓDIGO ORIGINAL (Mantendo a estrutura interna intacta, removendo apenas os botões daqui) */}
      <header className="hero container" style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1>Olá, eu sou Raphael Victor <span>Desenvolvedor Full-Stack</span></h1>
        <p>
          Focado em criar soluções modernas e eficientes com JavaScript, React, 
          Node.js e automações inteligentes. Transformando linhas de código em experiências reais.
        </p>
      </header>

      {/* --- SEÇÃO: SOBRE MIM (SEM FUNDO + ANIMAÇÃO ATIVADA NO SCROLL) --- */}
      <section 
        ref={aboutRef}
        className={animateAbout ? 'about-section-animated' : ''}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3rem',
          padding: '5rem 2rem',
          background: 'transparent',
          maxWidth: '950px',
          margin: '0 auto',
          flexWrap: 'wrap',
          opacity: 0, // Começa invisível e o Keyframe cuida do resto
          transform: 'translateX(120px)',
        }}
      >
        {/* Miniatura da Foto */}
        <div style={{ flexShrink: 0 }}>
          <img 
            src="/sua-foto.jpg" // Lembre de por seu arquivo em public/sua-foto.jpg
            alt="Raphael Victor" 
            style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid rgba(255,255,255,0.2)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}
          />
        </div>

        {/* Texto descritivo */}
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.2rem', color: '#fff', fontWeight: '600' }}>
            Sobre Mim
          </h2>
          <p style={{ lineHeight: '1.7', fontSize: '1.08rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
            Sou fascinado por resolver problemas complexos através da tecnologia. Minha jornada no desenvolvimento 
            foca em construir aplicações robustas do back-end ao front-end, aplicando boas práticas de código 
            e criando automações que otimizam processos do dia a dia. Estou sempre em busca de aprender novas 
            ferramentas e refinar minhas habilidades para entregar projetos com real valor técnico e visual.
          </p>
        </div>
      </section>

      {/* --- SEÇÃO: MINHAS STACKS (SEM FUNDO) --- */}
      <section style={{ padding: '5rem 2rem', background: 'transparent', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', color: '#fff', fontWeight: '600' }}>
          Tecnologias & Stacks
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
          {stacks.map((stack) => (
            <div 
              key={stack.name}
              className="stack-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '110px',
                padding: '1.2rem 0',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
              }}
            >
              <img 
                src={stack.logo} 
                alt={stack.name} 
                style={{ 
                  width: '45px', 
                  height: '45px', 
                  marginBottom: '0.8rem',
                  filter: stack.filter ? 'invert(1) brightness(2)' : 'none' // Ajuste para o logo do NextJS se o fundo for escuro
                }} 
              />
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', fontWeight: '500' }}>
                {stack.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* --- SEÇÃO FINAL: CONECTE-SE / ACTIONS --- */}
      <footer style={{ padding: '6rem 2rem 8rem 2rem', background: 'transparent', textAlign: 'center' }}>
        <h3 style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Vamos construir algo juntos?
        </h3>
        
        {/* Botão do Currículo */}
        <div style={{ marginBottom: '2.5rem' }}>
          <a 
            href="/curriculo.pdf" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-cv"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <FileText size={20} /> Visualizar Currículo
          </a>
        </div>
        
        {/* Links de Redes Sociais */}
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
          <a href="https://github.com/ikifars" target="_blank" rel="noreferrer" style={{ color: '#fff', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.target.style.opacity = 0.7} onMouseLeave={(e) => e.target.style.opacity = 1}>
            <Github size={32} />
          </a>
          <a href="https://www.linkedin.com/in/raphael-victor-a29183234/" target="_blank" rel="noreferrer" style={{ color: '#fff', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.target.style.opacity = 0.7} onMouseLeave={(e) => e.target.style.opacity = 1}>
            <Linkedin size={32} />
          </a>
        </div>
      </footer>
    </>
  );
}
