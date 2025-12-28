import React from 'react';
import { View } from '../../domain/models';
import { PortfolioService } from '../../application/services/PortfolioService';
import Hero from '../sections/Hero';
import ProjectsList from '../sections/ProjectsList';
import ArticlesList from '../sections/ArticlesList';

interface HomePageProps {
  onViewChange: (view: View) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onViewChange }) => {
  const projects = PortfolioService.getAllProjects(); // Getting all for the grid logic
  const articles = PortfolioService.getLatestArticles();

  return (
    <>
      <Hero onViewChange={onViewChange} />
      <ProjectsList projects={projects} onViewChange={onViewChange} />
      <ArticlesList articles={articles} />
    </>
  );
};

export default HomePage;