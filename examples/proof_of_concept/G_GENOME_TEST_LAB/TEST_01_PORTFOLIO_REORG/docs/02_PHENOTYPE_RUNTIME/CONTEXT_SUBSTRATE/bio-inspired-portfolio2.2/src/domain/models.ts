
export enum View {
  ACCUEIL = 'ACCUEIL',
  PROJETS = 'PROJETS',
  A_PROPOS = 'A_PROPOS',
  CONTACT = 'CONTACT',
}

export interface TechSkill {
  name: string;
  iconKey: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Remplacement de l'icône par une image
  gallery?: string[]; // Images additionnelles (optionnel)
  color: string;
  tags: string[];
  isFeatured: boolean;
  link?: string;
  linkText?: string; // Pour gérer "En savoir plus" vs "Démo live"
  layout?: 'standard' | 'wide' | 'tall';
  alignment?: 'left' | 'center';
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  iconKey: string;
  color: string;
  layout?: 'standard' | 'wide';
}
