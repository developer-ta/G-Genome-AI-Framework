import React, { useState } from 'react';
import { LayoutDashboard, Building2, Wrench, Zap, Settings, Briefcase, ChevronDown, ChevronRight } from 'lucide-react';
import { View, YearFilter } from '../types';

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

  return (
    <aside className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-slate-200 flex flex-col overflow-y-auto z-20 shadow-sm">
      <div className="p-6 pb-2">
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="bg-blue-100 rounded-full p-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
          </div>
          <h1 className="font-bold text-lg text-slate-800">RenovÉnergie</h1>
        </div>

        <nav className="space-y-2 font-medium">
          {/* Main Dashboard Link */}
          <button
            onClick={() => onChangeView(View.DASHBOARD)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              currentView === View.DASHBOARD && !isRenovationOpen && !isTypeOpen && !isDpeOpen
                ? 'bg-slate-100 text-slate-800'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </button>

          {/* Renovated Buildings Section (Collapsible) */}
          <div className="space-y-1">
            <button 
              onClick={() => setIsRenovationOpen(!isRenovationOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all shadow-sm ${
                isRenovationOpen
                  ? 'bg-blue-100 text-blue-900' // Active parent style
                  : 'bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Building2 className={`w-5 h-5 ${isRenovationOpen ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className={isRenovationOpen ? 'font-semibold' : ''}>Bâtiments Rénovés</span>
              </div>
              {isRenovationOpen ? (
                <ChevronDown className="w-4 h-4 text-blue-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>
            
            {/* Year List Submenu */}
            {isRenovationOpen && (
              <div className="pl-4 space-y-1 mt-1 mb-4">
                <button
                  onClick={() => handleYearClick('ALL')}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center ${
                    yearFilter === 'ALL' && currentView === View.DASHBOARD
                      ? 'bg-[#E0E7FF] text-indigo-700 font-semibold' // Selected style
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                  }`}
                >
                  Toutes les années
                </button>
                
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => handleYearClick(year)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center ${
                      yearFilter === year && currentView === View.DASHBOARD
                        ? 'bg-[#E0E7FF] text-indigo-700 font-semibold' // Selected style
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                    }`}
                  >
                    {year}
                  </button>
                ))}
                
                <button className="w-full text-left px-4 py-2 mt-2 text-sm text-blue-500 font-medium hover:text-blue-600 transition-colors">
                  Afficher tout
                </button>
              </div>
            )}
          </div>

          {/* Types de Rénovation (Collapsible) */}
          <div className="space-y-1">
            <button 
              onClick={() => setIsTypeOpen(!isTypeOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all shadow-sm ${
                isTypeOpen
                  ? 'bg-blue-100 text-blue-900' 
                  : 'bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Wrench className={`w-5 h-5 ${isTypeOpen ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className={isTypeOpen ? 'font-semibold' : ''}>Types de Rénovation</span>
              </div>
              {isTypeOpen ? (
                <ChevronDown className="w-4 h-4 text-blue-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>
            
            {isTypeOpen && (
              <div className="pl-4 space-y-1 mt-1 mb-4">
                {renovationTypes.map((type) => (
                  <button
                    key={type}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                  >
                    {type}
                  </button>
                ))}
                 <button className="w-full text-left px-4 py-2 mt-2 text-sm text-blue-500 font-medium hover:text-blue-600 transition-colors">
                  Afficher tout
                </button>
              </div>
            )}
          </div>

          {/* Classe DPE (Collapsible) */}
          <div className="space-y-1">
            <button 
              onClick={() => setIsDpeOpen(!isDpeOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all shadow-sm ${
                isDpeOpen
                  ? 'bg-blue-100 text-blue-900' 
                  : 'bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Zap className={`w-5 h-5 ${isDpeOpen ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className={isDpeOpen ? 'font-semibold' : ''}>Classe DPE</span>
              </div>
              {isDpeOpen ? (
                <ChevronDown className="w-4 h-4 text-blue-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>
            
            {isDpeOpen && (
              <div className="pl-4 space-y-1 mt-1 mb-4">
                {dpeClasses.map((dpe) => (
                  <button
                    key={dpe}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                  >
                    {dpe}
                  </button>
                ))}
                 <button className="w-full text-left px-4 py-2 mt-2 text-sm text-blue-500 font-medium hover:text-blue-600 transition-colors">
                  Afficher tout
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-slate-100">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all font-medium">
          <Settings className="w-5 h-5" />
          Paramètres
        </button>
      </div>
    </aside>
  );
};