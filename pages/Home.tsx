import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Clock, Play } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import { useContent } from '../context/ContentContext';

const Home: React.FC = () => {
  const { content } = useContent();

  const handleVideoClick = () => {
    if (content.home.videoUrl) {
      window.open(content.home.videoUrl, '_blank');
    }
  };

  return (
    <div className="flex flex-col bg-brand-950">
      {/* HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden pb-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={content.home.heroBg} 
            alt="Academia Profissional Dark" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
          {/* Gradient Overlay for smooth transition to next section */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-950/70 to-brand-950/30"></div>
          {/* Extra bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-900 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <RevealOnScroll delay={0}>
              <span className="inline-block py-1 px-3 rounded-full bg-brand-500/10 text-brand-400 font-bold text-sm tracking-wide mb-6 border border-brand-500/20 backdrop-blur-sm">
                {content.home.heroTag}
              </span>
            </RevealOnScroll>
            
            <RevealOnScroll delay={100}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
                {content.home.heroTitlePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">{content.home.heroTitleHighlight}</span> {content.home.heroTitleSuffix}
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl drop-shadow-md">
                {content.home.heroSubtitle}
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contato" 
                  className="group flex items-center justify-center bg-brand-500 text-brand-950 font-bold text-lg py-4 px-8 rounded-full hover:bg-brand-400 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)]"
                >
                  {content.home.heroCtaPrimary}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/sobre" 
                  className="flex items-center justify-center bg-transparent border border-white/20 text-white font-bold text-lg py-4 px-8 rounded-full hover:bg-white/5 transition-all duration-300 hover:border-white/40 backdrop-blur-sm"
                >
                  {content.home.heroCtaSecondary}
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* AUTHORITY / STATS SECTION */}
      {/* Seamless transition: Uses bg-brand-900 which matches the bottom fade of Hero */}
      <section className="bg-brand-900 py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {content.home.stats.map((stat, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100} className="group p-4 rounded-xl hover:bg-brand-950/20 transition-all duration-300 hover:-translate-y-1 cursor-default">
                <h3 className="text-4xl md:text-5xl font-black text-brand-500 tracking-tight group-hover:scale-110 group-hover:text-brand-400 transition-all duration-300 drop-shadow-sm">{stat.val}</h3>
                <p className="text-gray-300 font-medium text-sm uppercase tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">{stat.label}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO PRESENTATION SECTION */}
      {/* Background gradient adjusted to flow into brand-950 (Problem Section) */}
      <section className="py-24 bg-gradient-to-b from-brand-900 to-brand-950 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <RevealOnScroll>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {content.home.videoTitle}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                {content.home.videoDesc}
              </p>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <div 
              onClick={handleVideoClick}
              className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-brand-950 group mx-auto cursor-pointer ring-1 ring-white/10 hover:ring-brand-500/50 hover:shadow-[0_20px_50px_-10px_rgba(132,204,22,0.15)] transition-all duration-500"
            >
               {/* Video Cover Placeholder */}
               <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all duration-500 z-10">
                  <div className="w-24 h-24 bg-brand-500 rounded-full flex items-center justify-center pl-2 shadow-[0_0_30px_rgba(132,204,22,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(132,204,22,0.6)] transition-all duration-300">
                     <Play className="h-10 w-10 text-brand-950 fill-brand-950" />
                  </div>
               </div>
               
               <img 
                 src={content.home.videoCover} 
                 alt="Capa do Vídeo de Apresentação" 
                 className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out"
               />
            </div>
            {content.home.videoUrl && (
              <p className="mt-4 text-xs text-gray-500">Clique para assistir no YouTube</p>
            )}
          </RevealOnScroll>
        </div>
      </section>

      {/* PROBLEM / SOLUTION SECTION */}
      <section className="py-24 bg-brand-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll className="relative">
              <div className="absolute -inset-4 bg-brand-500/10 rounded-2xl blur-2xl"></div>
              <img 
                src={content.home.problemImg} 
                alt="Treino de Força Intenso" 
                className="relative rounded-2xl shadow-2xl ring-1 ring-white/10 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(132,204,22,0.1)] hover:ring-brand-500/30"
              />
            </RevealOnScroll>

            <div>
              <RevealOnScroll delay={200}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{content.home.problemTitle}</h2>
                <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                  {content.home.problemDesc}
                </p>
              </RevealOnScroll>
              
              <ul className="space-y-6 mb-10">
                {[
                  "Treinos adaptados para sua rotina real (30min ou 1h)",
                  "Sem dietas malucas: coma o que gosta com equilíbrio",
                  "Correção de postura e prevenção de lesões",
                  "Monitoramento constante de evolução"
                ].map((item, idx) => (
                  <RevealOnScroll key={idx} delay={300 + (idx * 100)}>
                    <li className="flex items-start group p-3 rounded-lg hover:bg-white/5 transition-colors duration-300 -ml-3">
                      <div className="bg-brand-900/50 p-1 rounded-full mr-4 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-300">
                        <CheckCircle2 className="h-6 w-6 text-brand-500 shrink-0" />
                      </div>
                      <span className="text-gray-200 font-medium pt-1 group-hover:text-white transition-colors">{item}</span>
                    </li>
                  </RevealOnScroll>
                ))}
              </ul>

              <RevealOnScroll delay={600}>
                <Link to="/servicos" className="inline-flex items-center text-brand-400 font-bold text-lg hover:text-brand-300 transition-colors group">
                  Ver Planos Disponíveis 
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </RevealOnScroll>
            </div>
          </div>
        </div>
        {/* Bottom Fade to blend into Black section (Benefits) */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </section>

      {/* BENEFITS CARDS */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 relative z-10">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">{content.home.benefitsTitle}</h2>
          </RevealOnScroll>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: TrendingUp, 
                title: "Metodologia Validada", 
                desc: "Protocolos baseados em ciência para hipertrofia e emagrecimento acelerado." 
              },
              { 
                icon: Users, 
                title: "Acompanhamento Diário", 
                desc: "Você nunca treina sozinho. Dúvidas tiradas via WhatsApp em tempo real." 
              },
              { 
                icon: Clock, 
                title: "Otimização de Tempo", 
                desc: "Resultados máximos no tempo que você tem disponível. Eficiência total." 
              }
            ].map((item, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150} className="h-full">
                <div className="bg-gradient-to-br from-brand-900/20 to-brand-950/10 p-8 rounded-3xl border border-white/5 h-full group transition-all duration-300 hover:bg-brand-900/30 hover:-translate-y-2 hover:border-brand-500/30 hover:shadow-[0_20px_40px_-15px_rgba(132,204,22,0.15)]">
                  <div className="bg-brand-950 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-500 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-black ring-1 ring-brand-900 group-hover:ring-brand-500/50 group-hover:rotate-3">
                    <item.icon className="h-8 w-8 text-brand-500 group-hover:text-brand-950 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-brand-100 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-brand-500 relative overflow-hidden">
        {/* Top Fade to blend from Black section */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/90 to-transparent pointer-events-none z-10"></div>
        
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-20 pt-10">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-6xl font-extrabold text-brand-950 mb-6 tracking-tight">
              {content.home.finalCtaTitle}
            </h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            <p className="text-brand-900/80 text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto">
              {content.home.finalCtaSubtitle}
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <Link 
              to="/contato" 
              className="inline-block bg-brand-950 text-white font-bold py-5 px-12 rounded-full text-lg hover:bg-black transition-all transform hover:scale-105 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:ring-4 hover:ring-brand-950/20"
            >
              {content.home.finalCtaButton}
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Home;