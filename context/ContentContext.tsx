import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultContent, ContentType } from '../data/defaultContent';

interface ContentContextType {
  content: ContentType;
  updateContent: (newContent: ContentType) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ContentType>(defaultContent);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('siteContent');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (e) {
        console.error("Erro ao carregar conteúdo", e);
      }
    }
    setIsLoaded(true);
  }, []);

  const updateContent = (newContent: ContentType) => {
    setContent(newContent);
    localStorage.setItem('siteContent', JSON.stringify(newContent));
  };

  const resetContent = () => {
    if (window.confirm("Tem certeza que deseja resetar todo o site para o padrão?")) {
      setContent(defaultContent);
      localStorage.setItem('siteContent', JSON.stringify(defaultContent));
    }
  };

  if (!isLoaded) return null;

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};