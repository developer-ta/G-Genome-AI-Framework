
import React from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import { View } from '../../domain/models';
import { PortfolioService } from '../../application/services/PortfolioService';

interface MainLayoutProps {
  children: React.ReactNode;
  currentView: View;
  onViewChange: (view: View) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, currentView, onViewChange, theme, toggleTheme }) => {
  const skills = PortfolioService.getAllSkills();
  const tools = PortfolioService.getWorkflowTools();

  return (
    <div className="overflow-x-hidden relative min-h-screen font-sans antialiased">
        {/* Background Decorative Element (Visible only in dark mode) */}
        <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none hidden dark:block">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] bg-radial-glow"></div>
        </div>

        <Header 
            currentView={currentView} 
            onViewChange={onViewChange}
            skills={skills} 
            tools={tools}
            theme={theme}
            toggleTheme={toggleTheme}
        />
        
        <main id="main-content">
            {children}
        </main>

        <Footer />
    </div>
  );
};

export default MainLayout;
