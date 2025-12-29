import { useState } from 'react';
import { View } from '../../domain/models';

/**
 * [OBLIGATION G-GENOME : GUIDE_COMMENTAIRES.md]
 */
export const useHeader = (onViewChange: (view: View) => void) => {
  // [SYNTAXE] Déclare un état booléen 'isMenuOpen' initialisé à 'false' via le Hook useState.
  // [RÔLE] Gère l'affichage ou le masquage du menu de navigation sur les appareils mobiles.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // [SYNTAXE] Fonction fléchée inversant la valeur actuelle de 'isMenuOpen'.
  // [RÔLE] Permet à l'utilisateur d'ouvrir et de fermer manuellement le menu via le bouton 'hamburger'.
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // [SYNTAXE] Exécute le callback 'onViewChange' et force 'isMenuOpen' à 'false'.
  // [RÔLE] Redirige l'utilisateur vers une nouvelle page et ferme automatiquement le menu mobile pour libérer l'écran.
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
