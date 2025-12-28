import { useState } from 'react';
import { View } from '../../domain/models';

export const useHeader = (onViewChange: (view: View) => void) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (view: View) => {
    onViewChange(view);
    setIsMenuOpen(false);
  };

  return {
    isMenuOpen,
    toggleMenu,
    handleLinkClick
  };
};
