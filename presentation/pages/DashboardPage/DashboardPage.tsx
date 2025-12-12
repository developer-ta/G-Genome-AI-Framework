import React from 'react';
import { YearFilter } from '../../../domain/models';
import { useDashboardController } from '../../hooks/useDashboardController';
import { RenovationStats } from '../../sections/RenovationStats/RenovationStats';
import { RenovationVolume } from '../../sections/RenovationVolume/RenovationVolume';
import './DashboardPage.css';

interface DashboardPageProps {
  yearFilter: YearFilter;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ yearFilter }) => {
  const { 
    dataPrivate, 
    dataSocial, 
    pieDataPrivate, 
    pieDataSocial, 
    filterLabel 
  } = useDashboardController(yearFilter);

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