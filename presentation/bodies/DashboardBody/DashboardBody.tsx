import React from 'react';
import { ChartData, PieData } from '../../../domain/models';
import { RenovationStats } from '../../sections/RenovationStats/RenovationStats';
import { RenovationVolume } from '../../sections/RenovationVolume/RenovationVolume';
import './DashboardBody.css';

interface DashboardBodyProps {
  dataPrivate: ChartData[];
  dataSocial: ChartData[];
  pieDataPrivate: PieData[];
  pieDataSocial: PieData[];
  filterLabel: string;
}

export const DashboardBody: React.FC<DashboardBodyProps> = ({
  dataPrivate,
  dataSocial,
  pieDataPrivate,
  pieDataSocial,
  filterLabel
}) => {
  return (
    <div className="dashboard-body">
      {/* Section 1: Statistiques Générales (Bar Charts) */}
      <RenovationStats 
        dataPrivate={dataPrivate} 
        dataSocial={dataSocial} 
        filterLabel={filterLabel} 
      />
      
      {/* Section 2: Volume de Rénovation (Pie Charts + Listes) */}
      <RenovationVolume 
        pieDataPrivate={pieDataPrivate}
        pieDataSocial={pieDataSocial}
        filterLabel={filterLabel}
      />
    </div>
  );
};