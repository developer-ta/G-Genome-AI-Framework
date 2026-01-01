
import React from 'react';
import { Article } from '../../domain/models';
import { Icon } from '../components/Icons';

interface ArticlesListProps {
  articles: Article[];
}

const ArticlesList: React.FC<ArticlesListProps> = ({ articles }) => {
    
  const getGlowClass = (colorName: string) => {
      if (colorName.includes('orange')) return 'dark:shadow-glow-orange';
      if (colorName.includes('cyan')) return 'dark:shadow-glow-cyan';
      if (colorName.includes('purple')) return 'dark:shadow-glow-purple';
      if (colorName.includes('green')) return 'dark:shadow-glow-green';
      if (colorName.includes('indigo')) return 'dark:shadow-glow-indigo';
      return '';
  };

  const getColorClass = (colorName: string) => {
       if (colorName.includes('orange')) return 'text-brand-orange';
       if (colorName.includes('cyan')) return 'text-brand-cyan';
       if (colorName.includes('purple')) return 'text-brand-purple';
       if (colorName.includes('green')) return 'text-brand-green';
       if (colorName.includes('indigo')) return 'text-brand-indigo';
       if (colorName.includes('text-')) return colorName; 
       return 'text-brand-cyan';
  };

  const featuredArticles = articles.slice(0, 3);
  const moreArticles = articles.slice(3);

  return (
    <section className="py-20" id="articles">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 mb-12 text-slate-900 dark:text-light-text">
            <span className="w-1 h-8 bg-brand-orange block"></span> 
            Derniers Articles & Tutoriels
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredArticles.map((article, index) => {
                let gridSpan = '';
                let layoutClasses = '';
                
                if (index === 0) {
                    gridSpan = 'lg:col-span-2';
                    layoutClasses = 'flex flex-col md:flex-row items-center gap-8';
                } else if (index === 1) {
                    gridSpan = '';
                    layoutClasses = 'flex flex-col items-center text-center';
                } else if (index === 2) {
                    gridSpan = 'lg:col-span-3';
                    layoutClasses = 'flex flex-col md:flex-row items-center gap-8';
                }

                return (
                    <div 
                        key={article.id}
                        className={`bg-white dark:bg-dark-card rounded-xl p-8 h-full hover:-translate-y-1 transition-transform duration-300 border border-slate-200 dark:border-white/5 shadow-lg ${gridSpan} ${layoutClasses} ${getGlowClass(article.color)}`}
                    >
                        <div className={index === 1 ? 'mb-6' : 'flex-shrink-0'}>
                             <Icon 
                                name={article.iconKey} 
                                className={`${index === 1 ? 'w-24 h-24' : 'w-32 h-32'} opacity-80 ${getColorClass(article.color)}`} 
                            />
                        </div>
                        
                        <div className={`${index === 1 ? 'flex-grow flex flex-col' : 'flex-grow'}`}>
                            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-light-text">{article.title}</h3>
                            <p className="text-slate-600 dark:text-medium-text mb-4 text-sm leading-relaxed">{article.excerpt}</p>
                            <a href="#" className={`font-semibold hover:underline ${index === 1 ? 'mt-auto' : ''} ${getColorClass(article.color)}`}>
                                Lire l'article →
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>

        {moreArticles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {moreArticles.map((article) => (
                    <div 
                        key={article.id}
                        className={`
                            bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm rounded-lg p-6 
                            border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-dark-card
                            transition-all duration-300 flex items-start gap-5 group
                        `}
                    >
                        <div className={`mt-1 p-3 rounded-lg bg-slate-200 dark:bg-white/5 group-hover:bg-slate-300/70 dark:group-hover:bg-white/10 transition-colors ${getColorClass(article.color)}`}>
                            <Icon name={article.iconKey} className="w-8 h-8" />
                        </div>
                        
                        <div className="flex-grow">
                            <h4 className="text-lg font-bold text-slate-800 dark:text-gray-200 group-hover:text-slate-900 dark:group-hover:text-white mb-2 leading-tight">
                                {article.title}
                            </h4>
                            <p className="text-slate-600 dark:text-medium-text text-sm leading-relaxed mb-3 line-clamp-2">
                                {article.excerpt}
                            </p>
                            <a href="#" className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${getColorClass(article.color)}`}>
                                Lire <span className="transition-transform group-hover:translate-x-1">→</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        )}

        <div className="text-center mt-16">
            <a href="#" className="inline-block px-8 py-3 rounded-full bg-white dark:bg-dark-card border border-slate-300 dark:border-white/20 text-slate-800 dark:text-light-text font-medium hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/40 transform transition-all duration-300 shadow-lg">
                Voir les archives
            </a>
        </div>
      </div>
    </section>
  );
};

export default ArticlesList;
