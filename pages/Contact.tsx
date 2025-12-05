import React, { useState } from 'react';
import { Send, MessageCircle, AlertCircle } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'emagrecimento'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', phone: '', goal: 'emagrecimento' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="overflow-hidden bg-brand-950">
      <section className="bg-brand-900 py-24 text-center relative">
        <div className="absolute inset-0 bg-brand-950/50"></div>
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-950 to-transparent"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Agende sua Avaliação</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              O primeiro passo para a sua transformação começa aqui. Sem compromisso.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 bg-brand-950 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-0 bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              
              {/* Left Side: Contact Info & Urgency */}
              <div className="p-12 flex flex-col justify-between bg-gradient-to-br from-brand-900/40 to-black relative">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Vamos conversar?</h3>
                  <p className="text-gray-300 mb-10 leading-relaxed">
                    Preencha o formulário e eu entrarei em contato em até 24 horas para entendermos seus objetivos e desenharmos um plano para você.
                  </p>
                  
                  <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-2xl mb-10 backdrop-blur-sm">
                    <div className="flex items-center text-red-500 mb-3">
                      <AlertCircle className="h-5 w-5 mr-3" />
                      <span className="font-bold uppercase text-xs tracking-widest">Aviso Importante</span>
                    </div>
                    <p className="text-red-200 text-sm">
                      Restam apenas <strong>3 vagas</strong> para consultoria online este mês. Garanta a sua agora mesmo.
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-4">Prefere falar direto?</p>
                  <a 
                    href="#" 
                    className="flex items-center justify-center w-full py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-[#25D366]/20"
                  >
                    <MessageCircle className="h-5 w-5 mr-3" />
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="p-12 bg-black">
                {isSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-brand-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(132,204,22,0.4)]">
                      <Send className="h-8 w-8 text-brand-950" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Mensagem Enviada!</h3>
                    <p className="text-gray-400 mb-8 max-w-xs mx-auto">Entrarei em contato em breve pelo WhatsApp ou E-mail informado.</p>
                    <button onClick={() => setIsSuccess(false)} className="text-brand-500 hover:text-brand-400 text-sm font-bold underline underline-offset-4">
                      Enviar nova mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 ml-1">Nome Completo</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-brand-900/20 border border-brand-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 ml-1">E-mail</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-brand-900/20 border border-brand-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2 ml-1">WhatsApp (com DDD)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full bg-brand-900/20 border border-brand-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label htmlFor="goal" className="block text-sm font-medium text-gray-400 mb-2 ml-1">Qual seu objetivo principal?</label>
                      <div className="relative">
                        <select
                          id="goal"
                          name="goal"
                          value={formState.goal}
                          onChange={handleChange}
                          className="w-full bg-brand-900/20 border border-brand-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all appearance-none cursor-pointer"
                        >
                          <option value="emagrecimento" className="bg-brand-950 text-white">Emagrecimento</option>
                          <option value="hipertrofia" className="bg-brand-950 text-white">Ganho de Massa Muscular</option>
                          <option value="saude" className="bg-brand-950 text-white">Saúde e Qualidade de Vida</option>
                          <option value="performance" className="bg-brand-950 text-white">Performance Esportiva</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                          <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-500 text-brand-950 font-bold py-5 rounded-xl hover:bg-brand-400 transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-brand-500/20 mt-4 text-lg"
                    >
                      {isSubmitting ? 'Enviando...' : 'SOLICITAR ORÇAMENTO'}
                    </button>
                    
                    <p className="text-xs text-center text-gray-500 mt-6">
                      Seus dados estão protegidos.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </RevealOnScroll>
        </div>
        {/* Bottom Fade to blend into Footer (Black) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Contact;