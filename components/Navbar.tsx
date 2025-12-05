import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre Mim', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Resultados', path: '/depoimentos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-brand-950/95 backdrop-blur-sm border-b border-brand-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-brand-500 p-2 rounded-lg group-hover:bg-brand-400 transition-colors">
              <Dumbbell className="h-6 w-6 text-brand-950" />
            </div>
            <span className="text-xl font-extrabold tracking-tighter text-white">
              ELITE<span className="text-brand-500">FORM</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-brand-400 ${
                  isActive(link.path) ? 'text-brand-500' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link
              to="/contato"
              className="bg-brand-500 hover:bg-brand-400 text-brand-950 font-bold py-2.5 px-6 rounded-full transition-all transform hover:scale-105 shadow-md shadow-brand-500/20"
            >
              Agendar Avaliação
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-brand-900 border-b border-brand-800 animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-brand-400 bg-brand-950/50'
                    : 'text-gray-300 hover:text-white hover:bg-brand-950/30'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-brand-500 text-brand-950 font-bold py-3 rounded-lg shadow-lg hover:bg-brand-400"
            >
              AGENDAR AVALIAÇÃO GRÁTIS
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;