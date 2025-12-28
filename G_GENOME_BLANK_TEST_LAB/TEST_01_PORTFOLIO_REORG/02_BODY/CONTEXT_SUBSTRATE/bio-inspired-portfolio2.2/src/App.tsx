
import React, { useState, useEffect } from 'react';
import { View } from './domain/models';
import MainLayout from './presentation/layouts/MainLayout';
import HomePage from './presentation/pages/HomePage';
import ProjectsPage from './presentation/pages/ProjectsPage';
import ContactPage from './presentation/pages/ContactPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.ACCUEIL);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const renderView = () => {
    switch (currentView) {
      case View.ACCUEIL:
        return <HomePage onViewChange={setCurrentView} />;
      case View.PROJETS:
        return <ProjectsPage />;
      case View.A_PROPOS:
        // For simplicity in this demo, redirect to Home or show placeholder
        return <HomePage onViewChange={setCurrentView} />;
      case View.CONTACT:
        return <ContactPage />;
      default:
        return <HomePage onViewChange={setCurrentView} />;
    }
  };

  return (
    <MainLayout 
      currentView={currentView} 
      onViewChange={setCurrentView}
      theme={theme}
      toggleTheme={toggleTheme}
    >
      {renderView()}
    </MainLayout>
  );
};

export default App;
