import { Project, TechSkill, Article } from '../../domain/models';

// Mise à jour pour correspondre aux couleurs dominantes des logos officiels
// Les textes prendront ces couleurs pour s'harmoniser avec l'icône
export const skills: TechSkill[] = [
  { name: 'IA & DATA', iconKey: 'ai', color: 'text-[#38bdf8]' }, // Sky Blue
  { name: 'DEEP LEARNING', iconKey: 'deeplearning', color: 'text-[#3b82f6]' }, // Blue 500
  { name: 'PYTHON', iconKey: 'python', color: 'text-[#3776AB]' }, // Official Python Blue (Dominant color)
  { name: 'REACT', iconKey: 'react', color: 'text-[#61DAFB]' }, // Official React Cyan
  { name: 'C#', iconKey: 'csharp', color: 'text-[#A179DC]' }, // Lightened Purple to look good on dark mode (Logo is #512BD4)
];

export const workflowTools: TechSkill[] = [
    { name: 'GIT', iconKey: 'git', color: 'text-[#F05032]' }, // Official Git Orange
    { name: 'CLI & TERMINAL', iconKey: 'terminal', color: 'text-gray-400' },
    { name: 'DOCKER', iconKey: 'docker', color: 'text-[#2496ED]' } // Docker Blue
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'NeuroSpike Architecture',
    description: 'Framework open-source pour la simulation de réseaux de neurones à impulsion avec une consommation énergétique optimisée pour l\'embarqué.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Abstract Blue/Dark lines
    color: 'brand-indigo',
    tags: ['PyTorch'],
    isFeatured: true,
    layout: 'standard',
    alignment: 'left',
    linkText: 'En savoir plus',
    link: '#'
  },
  {
    id: 'p2',
    title: 'EthoVis 3D',
    description: 'Visualiseur de données comportementales en temps réel avec rendu volumétrique.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Green technology
    color: 'brand-green',
    tags: ['Three.js'],
    isFeatured: true,
    layout: 'standard',
    alignment: 'left',
    linkText: 'Démo live',
    link: '#'
  },
  {
    id: 'p3',
    title: 'Bio-Inspired UI Framework',
    description: 'Bibliothèque de composants Web adaptatifs inspirés par les systèmes biologiques pour des interfaces dynamiques.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Orange Abstract
    color: 'brand-orange',
    tags: ['React'],
    isFeatured: true,
    layout: 'standard',
    alignment: 'left',
    linkText: 'En savoir plus',
    link: '#'
  },
  {
    id: 'p4',
    title: 'Computer Vision for Robotics',
    description: 'Système de vision en temps réel pour la navigation autonome et la reconnaissance d\'objets.',
    imageUrl: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Main: Glowing Blue Cybernetic Eye
    gallery: [
        'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&q=80', // Lens / Optical Glass (Replacing Robot Arm)
        'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=400&q=80'  // Code/Data
    ],
    color: 'brand-cyan',
    tags: ['OpenCV'],
    isFeatured: true,
    layout: 'standard',
    alignment: 'left',
    linkText: 'En savoir plus',
    link: '#'
  },
  {
    id: 'p5',
    title: 'Data Visualization Dashboard',
    description: 'Plateforme Web pour l\'analyse et la visualisation interactive de grands ensembles de données scientifiques.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Data dashboard
    color: 'brand-purple',
    tags: ['D3.js'],
    isFeatured: true,
    layout: 'standard',
    alignment: 'left',
    linkText: 'Démo live',
    link: '#'
  },
  {
    id: 'p6',
    title: 'Generative Art with AI',
    description: 'Projet explorant la création artistique visuelle et sonore à l\'aide de réseaux génératifs antagonistes (GANs).',
    imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Neon fluids
    color: 'brand-orange',
    tags: ['TensorFlow'],
    isFeatured: true,
    layout: 'standard',
    alignment: 'left',
    linkText: 'En savoir plus',
    link: '#'
  },
  {
    id: 'p7',
    title: 'Synthetic Synapse',
    description: 'Interface neuronale permettant la communication bidirectionnelle entre systèmes biologiques et numériques via WebUSB.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Matrix code / cyber
    color: 'brand-indigo',
    tags: ['Python', 'BCI'],
    isFeatured: true,
    layout: 'standard',
    alignment: 'left',
    linkText: 'En savoir plus',
    link: '#'
  },
  {
    id: 'p8',
    title: 'Eco-System Simulator',
    description: 'Moteur de simulation environnementale complexe pour prédire l\'évolution de la biodiversité sous contraintes.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Earth / Network
    color: 'brand-green',
    tags: ['Rust', 'WASM'],
    isFeatured: true,
    layout: 'standard',
    alignment: 'left',
    linkText: 'Démo live',
    link: '#'
  }
];

export const articles: Article[] = [
    // --- FEATURED (Top 3 Layout) ---
    {
        id: 'a1',
        title: 'Optimisation des réseaux de neurones',
        excerpt: "Exploration des méthodes d'apprentissage Hebbien pour les architectures non supervisées au-delà de la Backpropagation classique.",
        iconKey: 'network',
        color: 'brand-purple',
        layout: 'standard'
    },
    {
        id: 'a2',
        title: 'Git & Infographie',
        excerpt: "Le guide essentiel pour gérer efficacement vos assets graphiques et fichiers volumineux (LFS).",
        iconKey: 'git-merge',
        color: 'brand-orange',
        layout: 'standard'
    },
    {
        id: 'a3',
        title: "Assistant d'Explication Git avec IA",
        excerpt: "Vous avez une commande complexe ? Découvrez comment intégrer un assistant CLI local pour expliquer vos commandes Git en temps réel.",
        iconKey: 'terminal',
        color: 'brand-cyan',
        layout: 'standard'
    },
    // --- MORE CONTENT (2 Columns Layout) ---
    {
        id: 'a4',
        title: "Architecture Hexagonale en Frontend",
        excerpt: "Comment découpler votre logique métier de React pour créer des applications maintenables et testables sur le long terme.",
        iconKey: 'ui',
        color: 'brand-indigo',
    },
    {
        id: 'a5',
        title: "WebAssembly & Rust",
        excerpt: "Booster les performances des calculs scientifiques dans le navigateur : Cas pratique de simulation de fluides.",
        iconKey: 'csharp', // Using csharp icon as generic code/bracket icon
        color: 'brand-orange',
    },
    {
        id: 'a6',
        title: "UX Bio-inspirée",
        excerpt: "Ce que les modèles de croissance des plantes peuvent nous apprendre sur les interfaces utilisateur progressives.",
        iconKey: 'deeplearning',
        color: 'brand-green',
    },
    {
        id: 'a7',
        title: "Docker pour la Data Science",
        excerpt: "Créer des environnements reproductibles pour vos modèles de Machine Learning, du développement à la production.",
        iconKey: 'docker',
        color: 'brand-cyan',
    },
    {
        id: 'a8',
        title: "Micro-interactions et attention",
        excerpt: "Analyse psychologique : comment les animations subtiles guident l'utilisateur sans surcharge cognitive.",
        iconKey: 'vision',
        color: 'brand-purple',
    },
    {
        id: 'a9',
        title: "L'éthique des algorithmes",
        excerpt: "Réflexion sur les biais inhérents aux datasets d'entraînement et stratégies pour les atténuer.",
        iconKey: 'ai',
        color: 'text-red-400', // Custom styling
    }
];