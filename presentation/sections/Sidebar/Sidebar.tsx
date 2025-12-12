import React, { useState } from 'react';
import { LayoutDashboard, Building2, Wrench, Zap, Settings, Briefcase, ChevronDown, ChevronRight } from 'lucide-react';
import { View, YearFilter } from '../../../domain/models';
import './Sidebar.css';

interface SidebarProps {
  currentView: View;
  onChangeView: (view: View) => void;
  yearFilter: YearFilter;
  onYearFilterChange: (year: YearFilter) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  currentView, 
  onChangeView,
  yearFilter,
  onYearFilterChange
}) => {
  const [isRenovationOpen, setIsRenovationOpen] = useState(true);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isDpeOpen, setIsDpeOpen] = useState(false);
  
  const years = Array.from({ length: 10 }, (_, i) => 2026 - i);
  const renovationTypes = ['Isolation', 'Chauffage', 'Ventilation', 'Menuiseries', 'Solaire'];
  const dpeClasses = ['Classe A', 'Classe B', 'Classe C', 'Classe D', 'Classe E', 'Classe F', 'Classe G'];

  const handleYearClick = (year: YearFilter) => {
    onChangeView(View.DASHBOARD);
    onYearFilterChange(year);
  };
  
  const handleViewChange = (view: View) => {
    onChangeView(view);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="brand">
          <div className="brand-icon">
            <Briefcase size={22} strokeWidth={2.5} />
          </div>
          <h1 className="brand-name">RenovÉnergie</h1>
        </div>
      </div>

      <nav className="nav-container">
        {/* Main Dashboard Link */}
        <button
          onClick={() => handleViewChange(View.DASHBOARD)}
          className={`nav-item ${currentView === View.DASHBOARD ? 'active' : ''}`}
        >
          <LayoutDashboard size={20} className={currentView === View.DASHBOARD ? 'icon-active' : 'icon-inactive'}/>
          <span>Dashboard</span>
        </button>
        
        {/* Renovated Buildings Section (Collapsible) */}
        <div>
          <button 
            onClick={() => setIsRenovationOpen(!isRenovationOpen)}
            className={`accordion-btn ${isRenovationOpen ? 'open' : ''}`}
          >
            <div className="accordion-content">
              <Building2 size={20} className={isRenovationOpen ? 'icon-active' : 'icon-inactive'} />
              <span>Bâtiments Rénovés</span>
            </div>
            {isRenovationOpen ? (
              <ChevronDown size={16} className="icon-active" />
            ) : (
              <ChevronRight size={16} className="icon-inactive" />
            )}
          </button>
          
          {isRenovationOpen && (
            <div className="submenu">
              <button
                onClick={() => handleYearClick('ALL')}
                className={`submenu-item ${yearFilter === 'ALL' && currentView === View.DASHBOARD ? 'selected' : ''}`}
              >
                Toutes les années
              </button>
              
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearClick(year)}
                  className={`submenu-item ${yearFilter === year && currentView === View.DASHBOARD ? 'selected' : ''}`}
                >
                  {year}
                </button>
              ))}
               <button className="show-all-btn">
                Afficher tout
              </button>
            </div>
          )}
        </div>

        {/* Types de Rénovation (Collapsible) */}
        <div>
          <button 
            onClick={() => setIsTypeOpen(!isTypeOpen)}
            className={`accordion-btn ${isTypeOpen ? 'open' : ''}`}
          >
            <div className="accordion-content">
              <Wrench size={20} className={isTypeOpen ? 'icon-active' : 'icon-inactive'} />
              <span>Types de Rénovation</span>
            </div>
            {isTypeOpen ? (
              <ChevronDown size={16} className="icon-active" />
            ) : (
              <ChevronRight size={16} className="icon-inactive" />
            )}
          </button>
          
          {isTypeOpen && (
            <div className="submenu">
              {renovationTypes.map((type) => (
                <button key={type} className="submenu-item">
                  {type}
                </button>
              ))}
               <button className="show-all-btn">
                Afficher tout
              </button>
            </div>
          )}
        </div>

        {/* Classe DPE (Collapsible) */}
        <div>
          <button 
            onClick={() => setIsDpeOpen(!isDpeOpen)}
            className={`accordion-btn ${isDpeOpen ? 'open' : ''}`}
          >
            <div className="accordion-content">
              <Zap size={20} className={isDpeOpen ? 'icon-active' : 'icon-inactive'} />
              <span>Classe DPE</span>
            </div>
            {isDpeOpen ? (
              <ChevronDown size={16} className="icon-active" />
            ) : (
              <ChevronRight size={16} className="icon-inactive" />
            )}
          </button>
          
          {isDpeOpen && (
            <div className="submenu">
              {dpeClasses.map((dpe) => (
                <button key={dpe} className="submenu-item">
                  {dpe}
                </button>
              ))}
               <button className="show-all-btn">
                Afficher tout
              </button>
            </div>
          )}
        </div>
      </nav>

      <div className="sidebar-footer">
        <button className="nav-item">
          <Settings size={20} />
          Paramètres
        </button>
      </div>
    </aside>
  );
};