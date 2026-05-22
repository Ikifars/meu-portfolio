import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // URL do Formspree 
  const FORMSPREE_URL = "https://formspree.io/f/xlgvblwp"; 

  try {
    const response = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setEnviado(true);
      setFormData({ nome: '', email: '', mensagem: '' });
    } else {
      alert("Ops! Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Erro de conexão. Verifique sua internet.");
  }
};

  return (
    <section className="container" style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h2 style={{ fontSize: '2rem', borderBottom: '2px solid #1e293b', paddingBottom: '0.5rem', marginBottom: '2rem', textAlign: 'center' }}>
        Entre em Contato
      </h2>
      
      {enviado ? (
        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#1e293b', borderRadius: '8px' }}>
          <p style={{ color: '#0ea5e9', fontWeight: 'bold', fontSize: '1.2rem' }}>Obrigado pelo contato!</p>
          <p>Sua mensagem foi enviada com sucesso. Responderei o mais breve possível.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="nome" style={{ fontWeight: '600' }}>Nome</label>
            <input 
              type="text" 
              id="nome" 
              name="nome" 
              value={formData.nome} 
              onChange={handleChange} 
              required 
              style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="email" style={{ fontWeight: '600' }}>E-mail</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="mensagem" style={{ fontWeight: '600' }}>Mensagem</label>
            <textarea 
              id="mensagem" 
              name="mensagem" 
              rows="5" 
              value={formData.mensagem} 
              onChange={handleChange} 
              required 
              style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff', resize: 'vertical' }}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="btn-cv" 
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', cursor: 'pointer', border: 'none' }}
          >
            <Send size={18} /> Enviar Mensagem
          </button>
        </form>
      )}
    </section>
  );
}