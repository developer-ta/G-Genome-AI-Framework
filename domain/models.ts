import React from 'react';

export enum View {
  DASHBOARD = 'DASHBOARD',
  AI_STUDIO = 'AI_STUDIO',
  SETTINGS = 'SETTINGS'
}

export type YearFilter = number | 'ALL';

export interface ChartData {
  name: string;
  total: number;
  renovated: number;
}

// Add index signature to satisfy Recharts data requirements
export interface PieData {
  name: string;
  value: number;
  color: string;
  fill?: string;
  [key: string]: any;
}

export interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  view?: View;
}
