import React from 'react';
import { YearFilter } from '../../../domain/models';
import { useDashboardController } from '../../hooks/useDashboardController';
import { DashboardBody } from '../../bodies/DashboardBody/DashboardBody';
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
      <DashboardBody
        dataPrivate={dataPrivate}
        dataSocial={dataSocial}
        pieDataPrivate={pieDataPrivate}
        pieDataSocial={pieDataSocial}
        filterLabel={filterLabel}
      />
    </div>
  );
};