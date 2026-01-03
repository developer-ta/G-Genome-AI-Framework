import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
// import { AIStudioPage } from '../pages/AIStudioPage/AIStudioPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      }
      /* 
      {
        path: 'ai-studio',
        element: <AIStudioPage />
      } 
      */
    ]
  }
]);
