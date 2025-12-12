import React, { useState } from 'react';
import { Sidebar } from './presentation/sections/Sidebar/Sidebar';
import { Topbar } from './presentation/sections/Topbar/Topbar';
import { DashboardPage } from './presentation/pages/DashboardPage/DashboardPage';
import { View, YearFilter } from './domain/models';
import './presentation/layouts/DashboardLayout.css';

function App() {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);
  const [yearFilter, setYearFilter] = useState<YearFilter>('ALL');

  const renderContent = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return <DashboardPage yearFilter={yearFilter} />;
      // Add other views like SETTINGS here
      default:
        return <DashboardPage yearFilter={yearFilter} />;
    }
  };

  const getTitle = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return 'Bâtiments Rénovés';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar 
        currentView={currentView} 
        onChangeView={setCurrentView}
        yearFilter={yearFilter}
        onYearFilterChange={setYearFilter}
      />
      
      <main className="main-content">
        <Topbar title={getTitle()} />
        <div className="content-area">
          {renderContent()}
        </div>
        
        <footer className="footer">
          © 2024 RenovÉnergie. Tous droits réservés.
        </footer>
      </main>
    </div>
  );
}

export default App;