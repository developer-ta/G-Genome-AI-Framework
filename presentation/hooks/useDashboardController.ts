import { useMemo } from 'react';
import { YearFilter } from '../../domain/models';
import * as RenovationService from '../../application/services/RenovationService';

export const useDashboardController = (yearFilter: YearFilter) => {
  const dashboardData = useMemo(() => {
    return RenovationService.getDashboardData(yearFilter);
  }, [yearFilter]);

  const filterLabel = yearFilter === 'ALL' ? 'Toutes les années' : yearFilter.toString();

  return {
    ...dashboardData,
    filterLabel
  };
};