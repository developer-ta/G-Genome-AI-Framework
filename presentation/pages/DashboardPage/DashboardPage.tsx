import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { YearFilter } from '../../../domain/models';
import { useDashboardController } from '../../hooks/useDashboardController';
import { DashboardBody } from '../../bodies/DashboardBody/DashboardBody';
import './DashboardPage.css';

export const DashboardPage: React.FC = () => {
  const { yearFilter } = useOutletContext<{ yearFilter: YearFilter }>();

  const { dataPrivate, dataSocial, pieDataPrivate, pieDataSocial, filterLabel } =
    useDashboardController(yearFilter);

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
