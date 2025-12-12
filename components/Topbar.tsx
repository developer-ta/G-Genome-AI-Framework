import React from 'react';
import { Search } from 'lucide-react';

interface TopbarProps {
  title: string;
}

export const Topbar: React.FC<TopbarProps> = ({ title }) => {
  return (
    <header className="h-20 bg-[#F3F6FD] flex items-center justify-between px-8 sticky top-0 z-10">
      <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search resources..." 
            className="pl-10 pr-4 py-2.5 w-64 rounded-full border-none bg-white shadow-sm focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-600"
          />
        </div>
        
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-300 to-yellow-200 border-2 border-white shadow-md cursor-pointer hover:scale-105 transition-transform" />
      </div>
    </header>
  );
};