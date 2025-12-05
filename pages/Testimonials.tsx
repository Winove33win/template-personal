import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { useContent } from '../context/ContentContext';

const Testimonials: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="overflow-hidden bg-brand-950">
      <section className="bg-brand-900 py-24 text-center relative">
        <div className="absolute inset-0 bg-brand-950/50"></div>
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-950 to-transparent"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">{content.testimonials.heroTitle}</h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              {content.testimonials.heroSubtitle}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* BEFORE & AFTER GRID */}
      <section className="py-20 bg-brand-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-white mb-16 text-center uppercase tracking-widest text-sm opacity-80">Transformações</h2>
          </RevealOnScroll>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.testimonials.transformations.map((item, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150} className="h-full">
                <div className="bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 group transition-all duration-300 hover:border-brand-500/50 hover:shadow-[0_20px_50px_-20px_rgba(132,204,22,0.15)] hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 flex">
                       <div className="w-1/2 relative border-r border-brand-900/50">
                        <img src={item.imgBefore} alt="Antes" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out" />
                        <span className="absolute bottom-3 left-3 bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm border border-white/10 z-10">ANTES</span>
                       </div>
                       <div className="w-1/2 relative">
                        <img src={item.imgAfter} alt="Depois" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                        <span className="absolute bottom-3 right-3 bg-brand-500 text-brand-950 font-bold text-[10px] px-2 py-1 rounded shadow-lg z-10">DEPOIS</span>
                       </div>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col relative">
                    <div className="mb-4">
                      <h3 className="text-white font-bold text-lg group-hover:text-brand-100 transition-colors">{item.name}, <span className="text-gray-500 text-sm font-normal">{item.age}</span></h3>
                      <p className="text-brand-500 text-sm font-bold uppercase tracking-wide mt-1">{item.result}</p>
                    </div>
                    <p className="text-gray-400 text-sm italic leading-relaxed group-hover:text-gray-300 transition-colors">"{item.quote}"</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
        {/* Bottom Fade to blend into Black section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </section>

      {/* TEXT TESTIMONIALS */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {content.testimonials.reviews.map((review, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="bg-brand-900/10 p-10 rounded-2xl relative border border-white/5 transition-all duration-300 hover:bg-brand-900/20 hover:border-brand-500/20 hover:-translate-y-1 hover:shadow-lg h-full">
                  <Quote className="absolute top-8 right-8 h-10 w-10 text-brand-500/10" />
                  <div className="flex text-brand-500 mb-6">
                    {[...Array(5)].map((_, n) => <Star key={n} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-gray-300 italic mb-8 leading-relaxed text-lg">
                    "{review.text}"
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="h-12 w-12 bg-gray-800 rounded-full mr-4 overflow-hidden ring-2 ring-brand-900 group-hover:ring-brand-500 transition-all">
                       <img src={`https://picsum.photos/seed/avatar${i}/100`} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{review.author}</p>
                      <p className="text-brand-500/80 text-xs uppercase tracking-wide">{review.tag}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
        {/* Bottom Fade to blend into brand-950 section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-950 to-transparent pointer-events-none"></div>
      </section>

      <section className="py-24 text-center bg-brand-950 relative">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold text-white mb-8">Você será o próximo?</h2>
          <Link to="/contato" className="inline-block bg-brand-500 text-brand-950 font-bold py-4 px-12 rounded-full hover:bg-brand-400 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(132,204,22,0.3)] hover:shadow-[0_0_50px_rgba(132,204,22,0.5)]">
            Quero Construir Minha História
          </Link>
        </RevealOnScroll>
      </section>
    </div>
  );
};

export default Testimonials;