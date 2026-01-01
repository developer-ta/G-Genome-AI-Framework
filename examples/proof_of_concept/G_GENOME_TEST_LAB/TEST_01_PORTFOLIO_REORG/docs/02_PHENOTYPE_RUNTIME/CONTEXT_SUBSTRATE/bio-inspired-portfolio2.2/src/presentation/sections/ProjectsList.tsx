
import React from 'react';
import { Project, View } from '../../domain/models';

interface ProjectsListProps {
  projects: Project[];
  title?: string;
  showAllLink?: boolean;
  onViewChange: (view: View) => void;
  }

  const ProjectsList: React.FC<ProjectsListProps> = ({ projects, title = "Projets Phares", showAllLink = true, onViewChange }) => {

  const getThemeStyles = (colorName: string) => {
       if (colorName.includes('orange')) return { 
           container: 'border-brand-orange/40 hover:border-brand-orange dark:hover:shadow-glow-orange', 
           text: 'text-brand-orange',
           badge: 'bg-brand-orange dark:shadow-[0_2px_8px_rgba(249,115,22,0.4)]'
       };
       if (colorName.includes('green')) return { 
           container: 'border-brand-green/40 hover:border-brand-green dark:hover:shadow-glow-green', 
           text: 'text-brand-green',
           badge: 'bg-brand-green dark:shadow-[0_2px_8px_rgba(34,197,94,0.4)]'
       };
       if (colorName.includes('purple')) return { 
           container: 'border-brand-purple/40 hover:border-brand-purple dark:hover:shadow-glow-purple', 
           text: 'text-brand-purple',
           badge: 'bg-brand-purple dark:shadow-[0_2px_8px_rgba(138,43,226,0.4)]'
       };
       if (colorName.includes('indigo')) return { 
           container: 'border-brand-indigo/40 hover:border-brand-indigo dark:hover:shadow-glow-indigo', 
           text: 'text-brand-indigo',
           badge: 'bg-brand-indigo dark:shadow-[0_2px_8px_rgba(99,102,241,0.4)]'
       };
       return { 
           container: 'border-brand-cyan/40 hover:border-brand-cyan dark:hover:shadow-glow-cyan', 
           text: 'text-brand-cyan',
           badge: 'bg-brand-cyan dark:shadow-[0_2px_8px_rgba(6,182,212,0.4)]'
       };
  };

  return (
    <section className="pt-4 pb-20" id="projets">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold flex items-center gap-4 text-slate-900 dark:text-light-text">
            <span className="w-1.5 h-8 bg-brand-orange block rounded-sm dark:shadow-[0_0_10px_rgba(249,115,22,0.5)]"></span>
            {title}
          </h2>
          {showAllLink && (
            <button 
                onClick={() => onViewChange(View.PROJETS)}
                className="text-slate-500 dark:text-medium-text hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              Voir tout <span aria-hidden="true">→</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project) => {
             const styles = getThemeStyles(project.color);
             const mainTag = project.tags[0] || 'DEV';
             const hasGallery = project.gallery && project.gallery.length > 0;

             return (
             <article 
                key={project.id}
                className={`
                    group relative flex flex-col bg-white dark:bg-[#1E293B]/60 backdrop-blur-md rounded-xl overflow-hidden 
                    border-[1.5px] transition-all duration-300 shadow-lg dark:shadow-xl shadow-slate-300/70 dark:shadow-black/40
                    p-4
                    ${styles.container} 
                    hover:-translate-y-2
                `}
             >
                <div className="h-48 w-full relative overflow-hidden bg-slate-200 dark:bg-gray-900 rounded-[5px] shadow-inner">
                    {hasGallery ? (
                        <div className="grid grid-cols-3 gap-1 h-full w-full">
                            <div className="col-span-2 h-full relative overflow-hidden">
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="col-span-1 flex flex-col gap-1 h-full">
                                {project.gallery?.slice(0, 2).map((imgUrl, idx) => (
                                    <div key={idx} className="h-1/2 w-full relative overflow-hidden">
                                        <img src={imgUrl} alt="Detail" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <img 
                            src={project.imageUrl} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-[#1E293B]/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                
                    <div className="absolute top-3 right-3 z-10 pointer-events-none">
                        <span className={`
                            px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider 
                            rounded-[4px] backdrop-blur-md
                            ${styles.badge}
                        `}>
                            {mainTag}
                        </span>
                    </div>
                </div>

                <div className="pt-5 pb-2 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-light-text group-hover:text-slate-800 dark:group-hover:text-white transition-colors">
                        {project.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-medium-text text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                        {project.description}
                    </p>

                    <div className="mt-auto">
                        <a 
                            href={project.link || "#"} 
                            className={`inline-flex items-center font-bold text-sm uppercase tracking-wide ${styles.text} hover:brightness-110 transition-all`}
                        >
                            {project.linkText || 'En savoir plus'} 
                            <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                        </a>
                    </div>
                </div>
             </article>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
