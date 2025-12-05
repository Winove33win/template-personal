import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

const Footer: React.FC = () => {
  const { content } = useContent();

  return (
    <footer className="bg-black border-t border-brand-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-extrabold tracking-tighter text-white">
              ELITE<span className="text-brand-500">FORM</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando vidas através do movimento inteligente e nutrição estratégica. Seu resultado é a nossa missão.
            </p>
            <div className="flex space-x-4">
              <a href={content.global.instagramUrl} className="text-gray-400 hover:text-brand-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href={content.global.facebookUrl} className="text-gray-400 hover:text-brand-500 transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-brand-500 text-sm">Início</Link></li>
              <li><Link to="/sobre" className="text-gray-400 hover:text-brand-500 text-sm">Sobre o Personal</Link></li>
              <li><Link to="/servicos" className="text-gray-400 hover:text-brand-500 text-sm">Planos e Serviços</Link></li>
              <li><Link to="/depoimentos" className="text-gray-400 hover:text-brand-500 text-sm">Resultados Reais</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-brand-500 shrink-0" />
                <span>{content.global.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="h-5 w-5 text-brand-500 shrink-0" />
                <span>{content.global.whatsapp}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="h-5 w-5 text-brand-500 shrink-0" />
                <span>{content.global.email}</span>
              </li>
            </ul>
          </div>

          {/* CTA Footer */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Comece Agora</h3>
            <p className="text-gray-400 text-sm mb-4">
              Não deixe para amanhã o corpo que você pode começar a construir hoje.
            </p>
            <Link to="/contato" className="inline-block w-full text-center bg-brand-900 border border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-brand-950 font-bold py-2 rounded transition-all">
              Agendar Consultoria
            </Link>
          </div>
        </div>

        <div className="border-t border-brand-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} EliteForm Personal Trainer. Todos os direitos reservados.
          </p>
          <Link to="/admin" className="group flex items-center text-brand-900/50 hover:text-brand-900 transition-colors text-xs">
             <Settings className="h-3 w-3 mr-1 transition-transform duration-500 group-hover:rotate-180" /> Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;