import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Link } from 'react-router-dom';
import { Save, RotateCcw, Lock, Eye, Check, Image as ImageIcon, Video, Trash2, Plus } from 'lucide-react';

const Admin: React.FC = () => {
  const { content, updateContent, resetContent } = useContent();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'geral' | 'home' | 'sobre' | 'servicos' | 'depoimentos'>('geral');
  const [tempContent, setTempContent] = useState(content);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved'>('idle');

  // Simple auth simulation
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setTempContent(content); // Sync on login
    } else {
      alert('Senha incorreta (Dica: admin123)');
    }
  };

  const handleSave = () => {
    updateContent(tempContent);
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus('idle'), 2000);
  };

  const handleChange = (section: keyof typeof content, field: string, value: any) => {
    setTempContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleArrayChange = (section: any, arrayName: string, index: number, field: string, value: string) => {
    const newArray = [...(tempContent as any)[section][arrayName]];
    newArray[index] = { ...newArray[index], [field]: value };
    
    setTempContent(prev => ({
      ...prev,
      [section]: {
        ...(prev as any)[section],
        [arrayName]: newArray
      }
    }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-950 p-4">
        <form onSubmit={handleLogin} className="bg-black p-8 rounded-2xl border border-brand-900 shadow-2xl max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-brand-500 rounded-full">
              <Lock className="h-8 w-8 text-brand-950" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-white mb-6">Acesso Administrativo</h2>
          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite a senha (admin123)"
              className="w-full bg-brand-900/20 border border-brand-800 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:outline-none"
            />
          </div>
          <button type="submit" className="w-full bg-brand-500 text-brand-950 font-bold py-3 rounded-lg hover:bg-brand-400 transition-colors">
            Entrar no Painel
          </button>
          <Link to="/" className="block text-center text-gray-500 text-sm mt-4 hover:text-white">
            Voltar ao site
          </Link>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-950 flex flex-col">
      {/* Header */}
      <header className="bg-black border-b border-brand-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white flex items-center">
            <span className="text-brand-500 mr-2">EliteForm</span> CMS
          </h1>
          <div className="flex items-center space-x-4">
            <Link to="/" target="_blank" className="flex items-center text-gray-400 hover:text-brand-500 text-sm">
              <Eye className="h-4 w-4 mr-2" /> Ver Site
            </Link>
            <button 
              onClick={handleSave}
              className={`flex items-center px-6 py-2 rounded-full font-bold transition-all ${
                saveStatus === 'saved' 
                ? 'bg-green-500 text-white' 
                : 'bg-brand-500 text-brand-950 hover:bg-brand-400'
              }`}
            >
              {saveStatus === 'saved' ? <><Check className="h-4 w-4 mr-2" /> Salvo!</> : <><Save className="h-4 w-4 mr-2" /> Salvar Alterações</>}
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-7xl mx-auto w-full">
        {/* Sidebar */}
        <aside className="w-64 hidden md:block border-r border-brand-900 bg-black/50 p-6">
          <nav className="space-y-2">
            {[
              { id: 'geral', label: 'Geral & Contato' },
              { id: 'home', label: 'Página Inicial' },
              { id: 'sobre', label: 'Sobre Mim' },
              { id: 'servicos', label: 'Serviços' },
              { id: 'depoimentos', label: 'Resultados & Depoimentos' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-brand-900/50 text-brand-400 border border-brand-500/20' 
                    : 'text-gray-400 hover:bg-brand-900/20 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          
          <div className="mt-12 pt-6 border-t border-brand-900">
             <button 
              onClick={() => { resetContent(); setTempContent(useContent().content); }} // Reset calls confirm inside context
              className="flex items-center text-red-400 text-sm hover:text-red-300 transition-colors px-4"
            >
              <RotateCcw className="h-4 w-4 mr-2" /> Resetar Padrões
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          
          {/* GERAL */}
          {activeTab === 'geral' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <h2 className="text-2xl font-bold text-white mb-6">Informações Globais</h2>
              
              <div className="grid gap-6">
                <InputGroup label="WhatsApp (Apenas números)" value={tempContent.global.whatsapp} onChange={(v) => handleChange('global', 'whatsapp', v)} />
                <InputGroup label="E-mail de Contato" value={tempContent.global.email} onChange={(v) => handleChange('global', 'email', v)} />
                <InputGroup label="Endereço Físico" value={tempContent.global.address} onChange={(v) => handleChange('global', 'address', v)} />
                <InputGroup label="Link Instagram" value={tempContent.global.instagramUrl} onChange={(v) => handleChange('global', 'instagramUrl', v)} />
                <InputGroup label="Link Facebook" value={tempContent.global.facebookUrl} onChange={(v) => handleChange('global', 'facebookUrl', v)} />
              </div>
            </div>
          )}

          {/* HOME */}
          {activeTab === 'home' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <h2 className="text-2xl font-bold text-white mb-6">Editar Home</h2>
              
              <SectionTitle title="Hero Section (Capa)" />
              <div className="grid gap-6">
                <InputGroup label="Tag Superior (ex: Vagas Limitadas)" value={tempContent.home.heroTag} onChange={(v) => handleChange('home', 'heroTag', v)} />
                <InputGroup label="Título - Prefixo" value={tempContent.home.heroTitlePrefix} onChange={(v) => handleChange('home', 'heroTitlePrefix', v)} />
                <InputGroup label="Título - Destaque (Colorido)" value={tempContent.home.heroTitleHighlight} onChange={(v) => handleChange('home', 'heroTitleHighlight', v)} />
                <InputGroup label="Título - Sufixo" value={tempContent.home.heroTitleSuffix} onChange={(v) => handleChange('home', 'heroTitleSuffix', v)} />
                <TextAreaGroup label="Subtítulo Principal" value={tempContent.home.heroSubtitle} onChange={(v) => handleChange('home', 'heroSubtitle', v)} />
                <InputGroup label="URL da Imagem de Fundo (Hero)" value={tempContent.home.heroBg} onChange={(v) => handleChange('home', 'heroBg', v)} icon={<ImageIcon className="h-4 w-4 mr-1"/>} />
              </div>

              <SectionTitle title="Estatísticas" />
              <div className="grid grid-cols-2 gap-4">
                {tempContent.home.stats.map((stat, idx) => (
                  <div key={idx} className="bg-brand-900/20 p-4 rounded-lg border border-brand-900">
                    <InputGroup label={`Valor ${idx+1}`} value={stat.val} onChange={(v) => handleArrayChange('home', 'stats', idx, 'val', v)} />
                    <InputGroup label={`Label ${idx+1}`} value={stat.label} onChange={(v) => handleArrayChange('home', 'stats', idx, 'label', v)} />
                  </div>
                ))}
              </div>

              <SectionTitle title="Vídeo de Apresentação" />
              <div className="grid gap-6">
                <InputGroup label="Título do Vídeo" value={tempContent.home.videoTitle} onChange={(v) => handleChange('home', 'videoTitle', v)} />
                <TextAreaGroup label="Descrição do Vídeo" value={tempContent.home.videoDesc} onChange={(v) => handleChange('home', 'videoDesc', v)} />
                <InputGroup label="URL da Imagem de Capa do Vídeo" value={tempContent.home.videoCover} onChange={(v) => handleChange('home', 'videoCover', v)} icon={<ImageIcon className="h-4 w-4 mr-1"/>} />
                <InputGroup label="Link do Vídeo (Youtube/Vimeo)" value={tempContent.home.videoUrl} onChange={(v) => handleChange('home', 'videoUrl', v)} icon={<Video className="h-4 w-4 mr-1"/>} />
              </div>

              <SectionTitle title="Seção Problema (Treino)" />
              <InputGroup label="URL da Imagem de Destaque" value={tempContent.home.problemImg} onChange={(v) => handleChange('home', 'problemImg', v)} icon={<ImageIcon className="h-4 w-4 mr-1"/>} />

              <SectionTitle title="Call to Action Final" />
              <InputGroup label="Título" value={tempContent.home.finalCtaTitle} onChange={(v) => handleChange('home', 'finalCtaTitle', v)} />
              <TextAreaGroup label="Subtítulo" value={tempContent.home.finalCtaSubtitle} onChange={(v) => handleChange('home', 'finalCtaSubtitle', v)} />
            </div>
          )}

          {/* SOBRE */}
          {activeTab === 'sobre' && (
            <div className="space-y-8 animate-in fade-in duration-500">
               <h2 className="text-2xl font-bold text-white mb-6">Editar Sobre</h2>
               <InputGroup label="Título Hero" value={tempContent.about.heroTitle} onChange={(v) => handleChange('about', 'heroTitle', v)} />
               <TextAreaGroup label="Subtítulo Hero" value={tempContent.about.heroSubtitle} onChange={(v) => handleChange('about', 'heroSubtitle', v)} />
               
               <SectionTitle title="Minha História" />
               <div className="grid grid-cols-2 gap-4 mb-4">
                 <InputGroup label="URL Foto 1" value={tempContent.about.storyImg1} onChange={(v) => handleChange('about', 'storyImg1', v)} icon={<ImageIcon className="h-4 w-4 mr-1"/>} />
                 <InputGroup label="URL Foto 2" value={tempContent.about.storyImg2} onChange={(v) => handleChange('about', 'storyImg2', v)} icon={<ImageIcon className="h-4 w-4 mr-1"/>} />
               </div>
               <TextAreaGroup label="Parágrafo 1" value={tempContent.about.storyText1} onChange={(v) => handleChange('about', 'storyText1', v)} rows={3} />
               <TextAreaGroup label="Parágrafo 2" value={tempContent.about.storyText2} onChange={(v) => handleChange('about', 'storyText2', v)} rows={3} />
               <TextAreaGroup label="Parágrafo 3" value={tempContent.about.storyText3} onChange={(v) => handleChange('about', 'storyText3', v)} rows={3} />

               <SectionTitle title="Credenciais" />
               {tempContent.about.credentials.map((cred, idx) => (
                  <div key={idx} className="bg-brand-900/20 p-4 rounded-lg border border-brand-900 mb-2">
                    <InputGroup label={`Título Credencial ${idx+1}`} value={cred.title} onChange={(v) => handleArrayChange('about', 'credentials', idx, 'title', v)} />
                    <InputGroup label={`Subtítulo Credencial ${idx+1}`} value={cred.subtitle} onChange={(v) => handleArrayChange('about', 'credentials', idx, 'subtitle', v)} />
                  </div>
                ))}
            </div>
          )}

          {/* SERVICOS */}
          {activeTab === 'servicos' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <h2 className="text-2xl font-bold text-white mb-6">Editar Planos</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map(num => (
                  <div key={num} className="bg-brand-900/20 p-6 rounded-xl border border-brand-900">
                    <h3 className="font-bold text-brand-500 mb-4">Plano {num}</h3>
                    <InputGroup label="Nome" value={(tempContent.services as any)[`plan${num}Name`]} onChange={(v) => handleChange('services', `plan${num}Name`, v)} />
                    <InputGroup label="Preço" value={(tempContent.services as any)[`plan${num}Price`]} onChange={(v) => handleChange('services', `plan${num}Price`, v)} />
                    <TextAreaGroup label="Descrição Curta" value={(tempContent.services as any)[`plan${num}Desc`]} onChange={(v) => handleChange('services', `plan${num}Desc`, v)} rows={2} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DEPOIMENTOS */}
          {activeTab === 'depoimentos' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <h2 className="text-2xl font-bold text-white mb-6">Editar Depoimentos</h2>
              <InputGroup label="Título Principal" value={tempContent.testimonials.heroTitle} onChange={(v) => handleChange('testimonials', 'heroTitle', v)} />
              <TextAreaGroup label="Subtítulo" value={tempContent.testimonials.heroSubtitle} onChange={(v) => handleChange('testimonials', 'heroSubtitle', v)} />

              <SectionTitle title="Transformações (Antes e Depois)" />
              <div className="space-y-6">
                {tempContent.testimonials.transformations.map((item, idx) => (
                  <div key={idx} className="bg-brand-900/20 p-6 rounded-xl border border-brand-900 relative">
                    <div className="absolute top-4 right-4 bg-brand-900 text-xs px-2 py-1 rounded">Item {idx + 1}</div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <InputGroup label="Nome" value={item.name} onChange={(v) => handleArrayChange('testimonials', 'transformations', idx, 'name', v)} />
                      <InputGroup label="Idade" value={item.age} onChange={(v) => handleArrayChange('testimonials', 'transformations', idx, 'age', v)} />
                      <InputGroup label="Resultado (Destaque)" value={item.result} onChange={(v) => handleArrayChange('testimonials', 'transformations', idx, 'result', v)} />
                      <InputGroup label="Citação Curta" value={item.quote} onChange={(v) => handleArrayChange('testimonials', 'transformations', idx, 'quote', v)} />
                      <InputGroup label="URL Imagem Antes" value={item.imgBefore} onChange={(v) => handleArrayChange('testimonials', 'transformations', idx, 'imgBefore', v)} icon={<ImageIcon className="h-4 w-4 mr-1"/>} />
                      <InputGroup label="URL Imagem Depois" value={item.imgAfter} onChange={(v) => handleArrayChange('testimonials', 'transformations', idx, 'imgAfter', v)} icon={<ImageIcon className="h-4 w-4 mr-1"/>} />
                    </div>
                  </div>
                ))}
              </div>

              <SectionTitle title="Depoimentos em Texto" />
              <div className="grid md:grid-cols-2 gap-6">
                {tempContent.testimonials.reviews.map((review, idx) => (
                  <div key={idx} className="bg-brand-900/20 p-6 rounded-xl border border-brand-900">
                    <TextAreaGroup label="Texto do Depoimento" value={review.text} onChange={(v) => handleArrayChange('testimonials', 'reviews', idx, 'text', v)} rows={4} />
                    <InputGroup label="Nome do Aluno" value={review.author} onChange={(v) => handleArrayChange('testimonials', 'reviews', idx, 'author', v)} />
                    <InputGroup label="Tag (ex: Plano Start)" value={review.tag} onChange={(v) => handleArrayChange('testimonials', 'reviews', idx, 'tag', v)} />
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

// UI Components for Admin
const InputGroup = ({ label, value, onChange, type = "text", icon }: any) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-400 mb-1 flex items-center">
      {icon && <span className="text-brand-500 mr-2">{icon}</span>}
      {label}
    </label>
    <input 
      type={type} 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-black border border-brand-900 rounded-lg px-4 py-2 text-white focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
    />
  </div>
);

const TextAreaGroup = ({ label, value, onChange, rows = 3 }: any) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
    <textarea 
      rows={rows}
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-black border border-brand-900 rounded-lg px-4 py-2 text-white focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
    />
  </div>
);

const SectionTitle = ({ title }: { title: string }) => (
  <h3 className="text-lg font-bold text-brand-400 border-b border-brand-900 pb-2 mb-4 mt-8">{title}</h3>
);

export default Admin;