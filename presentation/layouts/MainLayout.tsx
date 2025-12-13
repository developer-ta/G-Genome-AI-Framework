import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../sections/Sidebar/Sidebar';
import { Topbar } from '../sections/Topbar/Topbar';
import { View, YearFilter } from '../../domain/models';
import './DashboardLayout.css';

export const MainLayout: React.FC = () => {
  const [yearFilter, setYearFilter] = useState<YearFilter>('ALL');
  const location = useLocation();

  // Déterminer la vue actuelle en fonction de l'URL
  const getCurrentView = (): View => {
    switch (location.pathname) {
      case '/':
        return View.DASHBOARD;
      // case '/settings': return View.SETTINGS;
      default:
        return View.DASHBOARD;
    }
  };

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Bâtiments Rénovés';
      default:
        return 'Dashboard';
    }
  };

  // Fonction factice onChangeView car c'est le Link du router qui changera l'URL maintenant
  // Mais la Sidebar attend peut-être cette prop. Idéalement on modifiera Sidebar pour utiliser des <Link>
  const handleViewChange = (view: View) => {
    console.log('Navigation requested via Sidebar to:', view);
    // Ici on pourrait faire une navigation impérative si besoin
  };

  return (
    <div className="dashboard-layout">
      <Sidebar
        currentView={getCurrentView()}
        onChangeView={handleViewChange}
        yearFilter={yearFilter}
        onYearFilterChange={setYearFilter}
      />

      <main className="main-content">
        <Topbar title={getTitle()} />
        <div className="content-area">
          {/* Outlet affichera le composant de la route active (ex: DashboardPage) */}
          {/* On passe le yearFilter via le contexte de l'Outlet accessible par les pages */}
          <Outlet context={{ yearFilter }} />
        </div>

        <footer className="footer">© 2024 RenovÉnergie. Tous droits réservés.</footer>
      </main>
    </div>
  );
};
