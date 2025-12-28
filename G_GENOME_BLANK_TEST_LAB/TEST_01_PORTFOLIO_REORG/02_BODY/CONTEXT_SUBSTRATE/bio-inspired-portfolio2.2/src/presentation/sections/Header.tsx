import React from 'react';
import { View, TechSkill } from '../../domain/models';
import { Icon } from '../components/Icons';
import { useHeader } from '../hooks/useHeader';

interface HeaderProps {
  currentView: View;
  onViewChange: (view: View) => void;
  skills: TechSkill[];
  tools: TechSkill[];
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  skills,
  tools,
  theme,
  toggleTheme
}) => {
  const { isMenuOpen, toggleMenu, handleLinkClick } = useHeader(onViewChange);

  const navItems = [
    { id: View.ACCUEIL, label: 'Accueil' },
    { id: View.PROJETS, label: 'Projets' },
    { id: View.A_PROPOS, label: 'À Propos' },
    { id: View.CONTACT, label: 'Contact' }
  ];

  return (
    <>
      <header
        className="sticky top-0 z-50 bg-slate-100/80 dark:bg-dark-bg/95 backdrop-blur-md shadow-lg"
        id="main-header">
        {/* Top Row: Main Navigation */}
        <div className="border-b border-slate-200 dark:border-white/5">
          <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 h-24 relative flex items-center justify-between">
            <div className="relative z-10 flex items-center">
              <div
                className="text-2xl font-bold tracking-wider cursor-pointer text-slate-900 dark:text-white hover:text-lime-400 transition-colors truncate"
                onClick={() => onViewChange(View.ACCUEIL)}>
                [VOTRE NOM]
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-12 lg:space-x-20">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`transition-all duration-300 text-[22px] font-bold whitespace-nowrap 
                            ${
                              currentView === item.id
                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-teal-400 dark:drop-shadow-[0_0_10px_rgba(163,230,53,0.5)]'
                                : 'text-slate-500 dark:text-medium-text hover:text-lime-400 dark:hover:drop-shadow-[0_0_8px_rgba(163,230,53,0.4)]'
                            }`}
                  onClick={() => onViewChange(item.id)}>
                  {item.label}
                </button>
              ))}
            </div>

            <div className="relative z-10 flex items-center justify-end space-x-3">
              <a
                href="#"
                className="flex items-center justify-center bg-slate-200 dark:bg-[#1E293B] hover:bg-slate-300 dark:hover:bg-[#334155] border border-slate-300 dark:border-white/10 hover:border-lime-400/50 text-slate-800 dark:text-white px-4 py-2 rounded-md transition-all text-sm font-bold shadow-lg mr-2 whitespace-nowrap">
                CV
              </a>

              <a
                href="#"
                className="hidden lg:flex items-center gap-2 bg-[#0E76A8] hover:bg-[#004182] text-white px-4 py-2 rounded-full transition-colors text-sm font-bold shadow-lg shadow-blue-900/20 whitespace-nowrap"
                title="LinkedIn">
                <Icon name="linkedin" className="w-5 h-5" />
                <span className="hidden xl:inline">Linkedin</span>
              </a>
              <a
                href="#"
                className="hidden lg:flex items-center gap-2 bg-slate-800 dark:bg-[#161B22] border border-slate-300 dark:border-white/10 hover:border-white/30 text-white px-4 py-2 rounded-full transition-colors text-sm font-bold shadow-lg whitespace-nowrap"
                title="GitHub">
                <Icon name="github" className="w-5 h-5 text-brand-orange" />
                <span className="hidden xl:inline">GitHub</span>
              </a>

              <button
                onClick={toggleTheme}
                className="text-slate-500 dark:text-medium-text hover:text-slate-900 dark:hover:text-white transition-colors ml-2 bg-slate-200 dark:bg-white/5 p-2 rounded-full hover:bg-slate-300 dark:hover:bg-white/10 flex-shrink-0"
                title="Changer de thème">
                {theme === 'dark' ? (
                  <Icon name="sun" className="w-6 h-6" />
                ) : (
                  <Icon name="moon" className="w-6 h-6" />
                )}
              </button>

              <div className="ml-4 w-11 h-11 rounded-full overflow-hidden border-2 border-slate-300 dark:border-white/10 hover:border-lime-400 transition-colors cursor-pointer shadow-xl relative group flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib.rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Profil"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* --- Hamburger Menu Button --- */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className="text-slate-600 dark:text-medium-text hover:text-slate-900 dark:hover:text-white p-2"
                  aria-label="Ouvrir le menu"
                  aria-expanded={isMenuOpen}>
                  {isMenuOpen ? (
                    <Icon name="close" className="w-6 h-6" />
                  ) : (
                    <Icon name="menu" className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- Mobile Menu Panel --- */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-100/95 dark:bg-dark-bg/95 backdrop-blur-sm shadow-lg border-b border-slate-200 dark:border-white/5">
            <nav className="px-4 pt-4 pb-6">
              <ul className="flex flex-col gap-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleLinkClick(item.id)}
                      className={`w-full text-left p-4 rounded-lg font-bold text-lg transition-colors ${
                        currentView === item.id
                          ? 'bg-lime-400/10 dark:bg-lime-400/20 text-lime-600 dark:text-lime-400'
                          : 'text-slate-700 dark:text-medium-text hover:bg-slate-200 dark:hover:bg-white/5'
                      }`}>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}

        <div className="bg-slate-200/50 dark:bg-black/40 border-b border-slate-200 dark:border-white/5 relative z-40">
          <div className="container mx-auto px-6 h-16 flex items-center md:justify-center gap-x-8 overflow-x-auto md:overflow-visible no-scrollbar">
            <span className="text-xs font-bold tracking-[0.2em] text-slate-400 dark:text-medium-text/60 whitespace-nowrap uppercase">
              TECH STACK DEMOS:
            </span>

            <div className="flex items-center h-full text-slate-500 dark:text-medium-text">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative h-full flex items-center px-4 border-b-2 border-transparent hover:border-lime-400 transition-all duration-200 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5">
                  <div className="flex items-center gap-3 opacity-90 group-hover:opacity-100">
                    <Icon
                      name={skill.iconKey}
                      className={`w-6 h-6 ${skill.color} dark:group-hover:drop-shadow-glow transition-all duration-300`}
                    />

                    <span
                      className={`text-lg font-bold tracking-tight whitespace-nowrap ${skill.color}`}>
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}

              <div className="group relative h-full flex items-center px-4 border-b-2 border-transparent hover:border-lime-400 transition-all duration-200 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 ml-4">
                <div className="flex items-center gap-2 opacity-90 group-hover:opacity-100">
                  <Icon
                    name="settings"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-slate-800 dark:group-hover:text-white transition-colors"
                  />
                  <span className="text-lg font-bold tracking-tight text-gray-600 dark:text-gray-300 group-hover:text-slate-800 dark:group-hover:text-white">
                    OUTILS
                  </span>
                  <Icon
                    name="chevron-down"
                    className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-slate-800 dark:group-hover:text-white transition-colors"
                  />
                </div>

                <div className="absolute top-full right-0 mt-0 w-60 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-white/10 shadow-2xl rounded-b-lg overflow-hidden hidden group-hover:block animate-in fade-in zoom-in-95 duration-200">
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      Workflow & Tools
                    </div>
                    {tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer">
                        <Icon name={tool.iconKey} className={`w-5 h-5 ${tool.color}`} />
                        <span className={`text-sm font-semibold ${tool.color}`}>{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
