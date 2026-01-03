
import React from 'react';
import { Icon } from '../components/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-white/10" id="main-footer">
      <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-sm text-slate-500 dark:text-medium-text mb-4 sm:mb-0">
          © 2028 [VOTRE NOM]. Tous droits réservés.
        </p>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-slate-500 dark:text-medium-text hover:text-slate-900 dark:hover:text-white transition-colors" title="GitHub">
            <Icon name="github" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
