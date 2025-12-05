import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import { useContent } from '../context/ContentContext';

const Services: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="overflow-hidden bg-brand-950">
      <section className="bg-brand-900 py-24 text-center relative">
        <div className="absolute inset-0 bg-brand-950/50"></div>
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-950 to-transparent"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">{content.services.heroTitle}</h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              {content.services.heroSubtitle}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 bg-brand-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Comparison Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            
            {/* PLAN 1: Basic */}
            <RevealOnScroll delay={100} className="h-full">
              <div className="bg-brand-900/10 rounded-3xl p-8 border border-white/5 flex flex-col transition-all duration-300 h-full hover:border-brand-500/30 hover:bg-brand-900/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-900/20">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-brand-400 uppercase tracking-widest mb-2">{content.services.plan1Name}</h3>
                  <p className="text-gray-400 text-sm h-10">{content.services.plan1Desc}</p>
                </div>
                <div className="mb-8 flex items-baseline">
                  <span className="text-4xl font-extrabold text-white">R$ {content.services.plan1Price}</span>
                  <span className="text-gray-500 ml-2">/mês</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-500 mr-3 shrink-0" /><span className="text-gray-300 text-sm">Ficha de treino personalizada (App)</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-500 mr-3 shrink-0" /><span className="text-gray-300 text-sm">Troca de treino a cada 45 dias</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-500 mr-3 shrink-0" /><span className="text-gray-300 text-sm">Vídeos explicativos dos exercícios</span></li>
                  <li className="flex items-start opacity-40"><Check className="h-5 w-5 text-gray-600 mr-3 shrink-0" /><span className="text-gray-600 text-sm line-through">Suporte WhatsApp diário</span></li>
                </ul>
                <Link to="/contato" className="block w-full py-3 px-6 text-center rounded-xl border border-brand-500 text-brand-500 font-bold hover:bg-brand-500 hover:text-brand-950 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/10">
                  Começar Agora
                </Link>
              </div>
            </RevealOnScroll>

            {/* PLAN 2: Premium (Featured) */}
            <RevealOnScroll className="h-full relative lg:-mt-4">
              <div className="bg-brand-900/30 rounded-3xl p-10 border-2 border-brand-500 flex flex-col relative shadow-2xl z-10 h-full transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(132,204,22,0.25)]">
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <span className="bg-brand-500 text-brand-950 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Recomendado
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-brand-400 uppercase tracking-widest mb-2">{content.services.plan2Name}</h3>
                  <p className="text-gray-400 text-sm h-10">{content.services.plan2Desc}</p>
                </div>
                <div className="mb-8 flex items-baseline">
                  <span className="text-5xl font-extrabold text-white">R$ {content.services.plan2Price}</span>
                  <span className="text-gray-500 ml-2">/mês</span>
                </div>
                <ul className="space-y-5 mb-10 flex-1">
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-500 mr-3 shrink-0" /><span className="text-white font-medium text-sm">Ficha de treino 100% individualizada</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-500 mr-3 shrink-0" /><span className="text-white font-medium text-sm">Troca de treino mensal</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-500 mr-3 shrink-0" /><span className="text-white font-medium text-sm">Análise de vídeos de execução</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-500 mr-3 shrink-0" /><span className="text-white font-medium text-sm">Suporte WhatsApp ilimitado (24h)</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-500 mr-3 shrink-0" /><span className="text-white font-medium text-sm">Orientação Nutricional Básica</span></li>
                </ul>
                <Link to="/contato" className="block w-full py-4 px-6 text-center rounded-xl bg-brand-500 text-brand-950 font-bold hover:bg-brand-400 transition-all duration-300 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-1">
                  Quero o {content.services.plan2Name}
                </Link>
              </div>
            </RevealOnScroll>

            {/* PLAN 3: Presencial */}
            <RevealOnScroll delay={200} className="h-full">
              <div className="bg-brand-900/10 rounded-3xl p-8 border border-white/5 flex flex-col transition-all duration-300 h-full hover:border-brand-500/30 hover:bg-brand-900/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-900/20">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-brand-400 uppercase tracking-widest mb-2">{content.services.plan3Name}</h3>
                  <p className="text-gray-400 text-sm h-10">{content.services.plan3Desc}</p>
                </div>
                <div className="mb-8 flex items-baseline">
                  <span className="text-2xl font-bold text-white">{content.services.plan3Price}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-500 mr-3 shrink-0" /><span className="text-gray-300 text-sm">Atendimento 1:1 na academia</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-500 mr-3 shrink-0" /><span className="text-gray-300 text-sm">Correção postural em tempo real</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-500 mr-3 shrink-0" /><span className="text-gray-300 text-sm">Motivação e "Spotter"</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-500 mr-3 shrink-0" /><span className="text-gray-300 text-sm">Avaliação física completa mensal</span></li>
                </ul>
                <Link to="/contato" className="block w-full py-3 px-6 text-center rounded-xl border border-brand-500 text-brand-500 font-bold hover:bg-brand-500 hover:text-brand-950 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/10">
                  Verificar Disponibilidade
                </Link>
              </div>
            </RevealOnScroll>

          </div>
        </div>
        {/* Bottom Fade to blend into Black section (FAQ) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-black relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Dúvidas Frequentes</h2>
          </RevealOnScroll>
          <div className="space-y-6">
            {[
              {
                q: "Como funciona a consultoria online?",
                a: "Você recebe acesso a um aplicativo exclusivo onde seu treino estará montado com vídeos, séries e cargas. Eu monitoro seu progresso pelo app."
              },
              {
                q: "Preciso treinar em academia?",
                a: "Não necessariamente. Posso montar treinos para fazer em casa, no parque ou no condomínio, adaptado aos equipamentos que você tiver."
              },
              {
                q: "Em quanto tempo vejo resultados?",
                a: "Meus alunos relatam mudanças visíveis de disposição na primeira semana e estética a partir de 30 dias, seguindo o plano 100%."
              }
            ].map((faq, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="bg-brand-900/10 p-8 rounded-2xl border border-white/5 transition-all duration-300 hover:bg-brand-900/20 hover:border-brand-500/20 hover:-translate-y-1 hover:shadow-lg">
                  <h4 className="font-bold text-white mb-3 text-lg">{faq.q}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;