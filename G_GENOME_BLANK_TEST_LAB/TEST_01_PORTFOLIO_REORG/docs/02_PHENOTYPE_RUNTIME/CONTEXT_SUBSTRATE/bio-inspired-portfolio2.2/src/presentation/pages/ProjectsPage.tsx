
import React, { useState } from 'react';
import { PortfolioService } from '../../application/services/PortfolioService';
import { Icon } from '../components/Icons';

const ProjectsPage: React.FC = () => {
  const allProjects = PortfolioService.getAllProjects();
  const skills = PortfolioService.getAllSkills();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const displayedProjects = activeFilter 
    ? PortfolioService.getProjectsBySkill(activeFilter) 
    : allProjects;

  const getContainerClass = (colorName: string) => {
    if (colorName.includes('orange')) return 'border-brand-orange/40 hover:border-brand-orange dark:hover:shadow-glow-orange';
    if (colorName.includes('green')) return 'border-brand-green/40 hover:border-brand-green dark:hover:shadow-glow-green';
    if (colorName.includes('purple')) return 'border-brand-purple/40 hover:border-brand-purple dark:hover:shadow-glow-purple';
    if (colorName.includes('indigo')) return 'border-brand-indigo/40 hover:border-brand-indigo dark:hover:shadow-glow-indigo';
    return 'border-brand-cyan/40 hover:border-brand-cyan dark:hover:shadow-glow-cyan';
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-brand-orange to-brand-cyan bg-clip-text text-transparent drop-shadow-sm">
        Tous les Projets
      </h1>
      
      {/* Filter controls */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <button 
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 rounded-full border transition-all shadow-md ${!activeFilter ? 'bg-slate-800 dark:bg-white/10 border-slate-700 dark:border-white text-white dark:shadow-brand-cyan/20' : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-medium-text hover:border-slate-400 dark:hover:border-white/50 backdrop-blur-sm'}`}
        >
            Tous
        </button>
        {skills.map(skill => (
            <button
                key={skill.name}
                onClick={() => setActiveFilter(skill.name)}
                className={`px-4 py-2 rounded-full border transition-all flex items-center gap-2 shadow-md ${activeFilter === skill.name ? 'bg-slate-800 dark:bg-white/10 border-slate-700 dark:border-white text-white dark:shadow-brand-cyan/20' : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-medium-text hover:border-slate-400 dark:hover:border-white/50 backdrop-blur-sm'}`}
            >
                <Icon name={skill.iconKey} className={`w-4 h-4 ${skill.color}`} />
                {skill.name}
            </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {displayedProjects.map((project) => {
             const hasGallery = project.gallery && project.gallery.length > 0;
             return (
             <div 
                key={project.id}
                className={`
                    bg-white dark:bg-[#1E293B]/60 backdrop-blur-md rounded-xl overflow-hidden 
                    hover:-translate-y-2 transition-transform duration-300 
                    shadow-lg dark:shadow-xl shadow-slate-300/70 dark:shadow-black/30 border-[1.5px] p-4 flex flex-col group
                    ${getContainerClass(project.color)}
                `}
             >
                <div className="h-48 w-full relative rounded-[5px] overflow-hidden">
                    {hasGallery ? (
                        <div className="grid grid-cols-3 gap-1 h-full w-full">
                            <div className="col-span-2 h-full relative overflow-hidden">
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="col-span-1 flex flex-col gap-1 h-full">
                                {project.gallery?.slice(0, 2).map((imgUrl, idx) => (
                                    <div key={idx} className="h-1/2 w-full relative overflow-hidden">
                                        <img src={imgUrl} alt="Detail" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <img 
                            src={project.imageUrl} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 dark:from-[#1E293B]/50 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                </div>
                
                <div className="pt-5 pb-2 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-light-text group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{project.title}</h3>
                    <p className="text-slate-600 dark:text-medium-text mb-6 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                    </p>
                    
                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-medium-text border border-slate-200 dark:border-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <a href={project.link || "#"} className={`font-semibold hover:underline text-sm uppercase tracking-wide flex items-center gap-1 ${project.color.includes('orange') ? 'text-brand-orange' : project.color.includes('green') ? 'text-brand-green' : 'text-brand-cyan'}`}>
                            {project.linkText || 'Voir le projet'} <span className="transition-transform group-hover:translate-x-1">→</span>
                        </a>
                    </div>
                </div>
             </div>
        )})}
      </div>
      
      {displayedProjects.length === 0 && (
        <p className="text-center text-slate-500 dark:text-medium-text py-20">Aucun projet trouvé pour ce filtre.</p>
      )}
    </div>
  );
};

export default ProjectsPage;
