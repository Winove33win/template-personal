import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Heart } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import { useContent } from '../context/ContentContext';

const About: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="overflow-hidden bg-brand-950">
      {/* HEADER */}
      <section className="bg-brand-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-950/50 pattern-grid-lg opacity-10"></div>
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-950 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">{content.about.heroTitle}</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {content.about.heroSubtitle}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* STORY CONTENT */}
      <section className="py-20 bg-brand-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Grid */}
            <RevealOnScroll className="grid grid-cols-2 gap-4">
              <img 
                src={content.about.storyImg1} 
                className="rounded-2xl shadow-2xl mt-8 ring-1 ring-white/5 transform hover:-translate-y-2 transition-transform duration-500 hover:shadow-brand-500/20 aspect-[3/4] object-cover" 
                alt="Personal treinando aluno" 
              />
              <img 
                src={content.about.storyImg2} 
                className="rounded-2xl shadow-2xl ring-1 ring-white/5 transform hover:-translate-y-2 transition-transform duration-500 delay-100 hover:shadow-brand-500/20 aspect-[3/4] object-cover" 
                alt="Retrato na academia" 
              />
            </RevealOnScroll>

            {/* Text */}
            <div>
              <RevealOnScroll delay={200}>
                <h2 className="text-3xl font-bold text-white mb-6">{content.about.storyTitle}</h2>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {content.about.storyText1}
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {content.about.storyText2}
                </p>
                <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                  {content.about.storyText3}
                </p>
              </RevealOnScroll>

              {/* Credentials */}
              <div className="space-y-4 mb-10">
                {content.about.credentials.map((cred, idx) => (
                  <RevealOnScroll key={idx} delay={300 + (idx * 100)}>
                    <div className="flex items-center p-6 bg-brand-900/20 rounded-xl border border-white/5 hover:border-brand-500/30 transition-all hover:-translate-y-1 hover:shadow-lg">
                      <div className="bg-brand-950 p-3 rounded-lg mr-4 text-brand-500">
                        {idx === 0 ? <Award className="h-8 w-8" /> : <BookOpen className="h-8 w-8" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{cred.title}</h4>
                        <span className="text-sm text-gray-400">{cred.subtitle}</span>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>

              <RevealOnScroll delay={500}>
                <Link to="/contato" className="inline-block bg-brand-500 text-brand-950 font-bold py-4 px-10 rounded-full hover:bg-brand-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-brand-500/30">
                  Agendar com Especialista
                </Link>
              </RevealOnScroll>
            </div>
          </div>
        </div>
        
        {/* Bottom fade to blend with next section (Black) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white">Pilares do Meu Trabalho</h2>
            </div>
          </RevealOnScroll>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Ciência", icon: BookOpen, text: "Nada de 'achismo'. Todo treino é prescrito com base em evidências científicas atuais." },
              { title: "Empatia", icon: Heart, text: "Entendo suas dificuldades, seus dias ruins e adapto o plano para que você não desista." },
              { title: "Excelência", icon: Award, text: "Busca incessante pela execução perfeita para garantir segurança e longevidade." }
            ].map((val, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150} className="h-full">
                <div className="bg-brand-900/10 p-10 rounded-2xl text-center border border-white/5 h-full group transition-all duration-300 hover:bg-brand-900/20 hover:border-brand-500/20 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(132,204,22,0.1)]">
                  <val.icon className="h-12 w-12 text-brand-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-[0_0_15px_rgba(132,204,22,0.4)]" />
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-100 transition-colors">{val.title}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{val.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;