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
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

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
      <style>{`
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(150px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .about-section-animated {
          animation: slideInFromRight 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
        }
        .stack-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          transition: all 0.2s ease;
        }
        .stack-badge:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        .social-icon-btn {
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.2s ease;
        }
        .social-icon-btn:hover {
          color: #fff;
          transform: scale(1.1);
        }
      `}</style>

      {/* SEU CÓDIGO ORIGINAL (Ajustado apenas o padding vertical para não empurrar demais o conteúdo) */}
      <header className="hero container" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <h1>Olá, eu sou Raphael Victor <span>Desenvolvedor Full-Stack</span></h1>
        <p>
          Focado em criar soluções modernas e eficientes com JavaScript, React, 
          Node.js e automações inteligentes. Transformando linhas de código em experiências reais.
        </p>
      </header>

      {/* CONTEÚDO INTEGRADO (Sobre Mim + Stacks + Footer) */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* --- SEÇÃO: SOBRE MIM --- */}
        <section 
          ref={aboutRef}
          className={animateAbout ? 'about-section-animated' : ''}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            padding: '2.5rem 0',
            background: 'transparent',
            flexWrap: 'wrap',
            opacity: 0,
            transform: 'translateX(60px)',
          }}
        >
          {/* Miniatura da Foto */}
          <div style={{ flexShrink: 0, margin: '0 auto' }}>
            <img 
              src="/sua-foto.jpg" 
              alt="Raphael Victor" 
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid rgba(255,255,255,0.15)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            />
          </div>

          {/* Texto descritivo */}
          <div style={{ flex: '1', minWidth: '280px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#fff', fontWeight: '600' }}>
              Sobre Mim
            </h2>
            <p style={{ lineHeight: '1.6', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
              Sou fascinado por resolver problemas complexos através da tecnologia. Minha jornada no desenvolvimento 
              foca em construir aplicações robustas do back-end ao front-end, aplicando boas práticas de código 
              e criando automações que otimizam processos do dia a dia. Estou sempre em busca de aprender novas 
              ferramentas e refinar minhas habilidades para entregar projetos com real valor técnico e visual.
            </p>
          </div>
        </section>

        {/* --- SEÇÃO: MINHAS STACKS (Estilo Badges Compactos) --- */}
         <section style={{ padding: '2rem 0', background: 'transparent', textAlign: 'left' }}>
  <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#fff', fontWeight: '500' }}>
    Tecnologias & Stacks
  </h3>
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'flex-start' }}>
    {stacks.map((stack) => {
      // Função para lidar com o movimento 3D dinâmico
      const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const box = card.getBoundingClientRect();
        
        // Calcula a posição do mouse relativa ao centro do card (-0.5 a 0.5)
        const x = (e.clientX - box.left) / box.width - 0.5;
        const y = (e.clientY - box.top) / box.height - 0.5;
        
        // Multiplicadores definem a intensidade da inclinação (15 graus max)
        card.style.transform = `perspective(300px) rotateX(${-y * 15}deg) rotateY(${x * 15}deg) scale(1.05)`;
        card.style.borderColor = 'rgba(255, 255, 255, 0.25)';
        card.style.background = 'rgba(255, 255, 255, 0.06)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
      };

      // Restaura o estado original de forma suave quando o mouse sai
      const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.transform = 'perspective(300px) rotateX(0deg) rotateY(0deg) scale(1)';
        card.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        card.style.background = 'rgba(255, 255, 255, 0.03)';
        card.style.boxShadow = 'none';
      };

      return (
        <div 
          key={stack.name}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            padding: '1rem 0',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            // O segredo do efeito suave de mola está na transição de transform muito baixa ou desativada no move, mas aqui deixamos rápida para o retorno
            transition: 'transform 0.15s ease-out, background 0.2s, border-color 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
            transformStyle: 'preserve-3d', // Mantém o contexto 3D interno
          }}
        >
          <img 
            src={stack.logo} 
            alt={stack.name} 
            style={{ 
              width: '35px', 
              height: '35px', 
              marginBottom: '0.6rem',
              filter: stack.filter ? 'invert(1) brightness(2)' : 'none',
              transform: 'translateZ(10px)', // Faz o ícone "saltar" ligeiramente para fora do card
            }} 
          />
          <span style={{ 
            color: 'rgba(255,255,255,0.7)', 
            fontSize: '0.8rem', 
            fontWeight: '500',
            transform: 'translateZ(5px)', // Texto também ganha profundidade
          }}>
            {stack.name}
          </span>
        </div>
      );
    })}
  </div>
</section>
        {/* --- SEÇÃO FINAL: CONECTE-SE / FOOTER COMPACTO --- */}
        <footer style={{ padding: '3rem 0 4rem 0', background: 'transparent', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 0.25rem 0', fontWeight: '500' }}>
              Vamos construir algo juntos?
            </h4>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', margin: 0 }}>
              Sinta-se à vontade para me acompanhar ou acessar meu currículo.
            </p>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {/* Botão do Currículo menor e mais discreto */}
            <a 
              href="/curriculo.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-cv"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                padding: '0.5rem 1rem', 
                fontSize: '0.9rem' 
              }}
            >
              <FileText size={16} /> Currículo
            </a>
            
            {/* Links de Redes Sociais */}
            <a href="https://github.com/ikifars" target="_blank" rel="noreferrer" className="social-icon-btn">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/raphael-victor-a29183234/" target="_blank" rel="noreferrer" className="social-icon-btn">
              <Linkedin size={24} />
            </a>
          </div>
        </footer>

      </div>
    </>
  );
}
