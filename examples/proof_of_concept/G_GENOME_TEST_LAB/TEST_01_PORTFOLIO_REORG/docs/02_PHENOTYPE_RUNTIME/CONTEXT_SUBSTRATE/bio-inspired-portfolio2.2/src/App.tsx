
import React, { useState, useEffect } from 'react';
import { View } from './domain/models';
import MainLayout from './presentation/layouts/MainLayout';
import HomePage from './presentation/pages/HomePage';
import ProjectsPage from './presentation/pages/ProjectsPage';
import ContactPage from './presentation/pages/ContactPage';

/**
 * [OBLIGATION G-GENOME : GUIDE_COMMENTAIRES.md]
 */
const App: React.FC = () => {
  // [SYNTAXE] Déclare l'état de la vue actuelle avec l'énumération 'View'.
  // [RÔLE] Pilote la navigation principale de l'application (Single Page Application logic).
  const [currentView, setCurrentView] = useState<View>(View.ACCUEIL);

  // [SYNTAXE] Déclare l'état du thème visuel.
  // [RÔLE] Permet de basculer entre le mode sombre et le mode clair.
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // [SYNTAXE] Hook useEffect synchronisant l'état 'theme' avec la classe CSS de l'élément racine <html>.
  // [RÔLE] Applique physiquement le thème Tailwind/CSS sur l'ensemble du DOM à chaque changement d'état.
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // [SYNTAXE] Fonction de bascule booléenne du thème.
  // [RÔLE] Action déclenchée par l'utilisateur via le bouton de changement de mode.
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // [SYNTAXE] Fonction de rendu conditionnel utilisant un switch sur 'currentView'.
  // [RÔLE] Agit comme le routeur interne de l'application sans utiliser de bibliothèque externe.
  const renderView = () => {
    switch (currentView) {
      case View.ACCUEIL:
        return <HomePage onViewChange={setCurrentView} />;
      case View.PROJETS:
        return <ProjectsPage />;
      case View.A_PROPOS:
        // Pour la démo, redirection vers l'accueil
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
      toggleTheme={toggleTheme}>
      {renderView()}
    </MainLayout>
  );
};

export default App;
