import React from 'react';
import { ChartData, YearFilter } from '../types';
import { RenovationStats } from '../sections/RenovationStats';
import { RenovationVolume } from '../sections/RenovationVolume';
import './DashboardPage.css';

// ---------------- Data Logic ---------------- //
// (Moved from old Dashboard.tsx)

const dataPrivate: ChartData[] = Array.from({ length: 20 }, (_, i) => ({
  name: `${i + 1}${i === 0 ? 'er' : 'e'}`,
  total: Math.floor(Math.random() * 50000) + 20000,
  renovated: Math.floor(Math.random() * 20000) + 5000,
}));

const dataSocial: ChartData[] = Array.from({ length: 20 }, (_, i) => ({
  name: `${i + 1}${i === 0 ? 'er' : 'e'}`,
  total: Math.floor(Math.random() * 10000) + 5000,
  renovated: Math.floor(Math.random() * 4000) + 1000,
}));

// 20 Distinct colors for the 20 arrondissements
const COLORS = [
  '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', 
  '#ec4899', '#6366f1', '#14b8a6', '#f97316', '#06b6d4',
  '#84cc16', '#a855f7', '#fbbf24', '#f43f5e', '#64748b',
  '#22d3ee', '#d946ef', '#eab308', '#34d399', '#60a5fa'
];

// Add fill color directly to data for RadialBarChart
const pieDataPrivate = dataPrivate.map((d, i) => ({
  name: d.name,
  value: d.renovated,
  color: COLORS[i % COLORS.length],
  fill: COLORS[i % COLORS.length]
})).sort((a, b) => b.value - a.value);

const pieDataSocial = dataSocial.map((d, i) => ({
  name: d.name,
  value: d.renovated,
  color: COLORS[i % COLORS.length],
  fill: COLORS[i % COLORS.length]
})).sort((a, b) => b.value - a.value);

// ---------------- Component ---------------- //

interface DashboardPageProps {
  yearFilter?: YearFilter;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ yearFilter = 'ALL' }) => {
  const filterLabel = yearFilter === 'ALL' ? 'Toutes les années' : yearFilter.toString();

  return (
    <div className="dashboard-page">
      <RenovationStats 
        dataPrivate={dataPrivate} 
        dataSocial={dataSocial} 
        filterLabel={filterLabel} 
      />
      
      <RenovationVolume 
        pieDataPrivate={pieDataPrivate}
        pieDataSocial={pieDataSocial}
        filterLabel={filterLabel}
      />
    </div>
  );
};