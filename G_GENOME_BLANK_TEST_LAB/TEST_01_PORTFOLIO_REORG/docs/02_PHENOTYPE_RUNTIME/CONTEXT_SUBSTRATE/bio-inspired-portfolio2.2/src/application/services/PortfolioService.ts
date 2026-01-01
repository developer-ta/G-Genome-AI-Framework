import { projects, skills, workflowTools, articles } from '../../infrastructure/data/portfolioData';

export const PortfolioService = {
  getAllProjects: () => projects,
  
  getFeaturedProjects: () => projects.filter(p => p.isFeatured),
  
  getProjectsBySkill: (skillName: string) => {
    if (!skillName) return projects;
    return projects.filter(p => p.tags.includes(skillName));
  },

  getAllSkills: () => skills,

  getWorkflowTools: () => workflowTools,

  getLatestArticles: () => articles
};