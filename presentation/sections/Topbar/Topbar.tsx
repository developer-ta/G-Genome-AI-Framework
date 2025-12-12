import React from 'react';
import { Search } from 'lucide-react';
import './Topbar.css';

interface TopbarProps {
  title: string;
}

export const Topbar: React.FC<TopbarProps> = ({ title }) => {
  return (
    <header className="topbar">
      <h2 className="topbar-title">{title}</h2>
      
      <div className="topbar-actions">
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search resources..." 
            className="search-input"
          />
        </div>
        
        <div className="user-avatar" />
      </div>
    </header>
  );
};
