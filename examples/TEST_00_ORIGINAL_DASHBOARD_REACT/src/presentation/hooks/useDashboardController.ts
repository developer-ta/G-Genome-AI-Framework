import { useState, useEffect, useMemo } from 'react';
import { YearFilter, ChartData, PieData } from '../../domain/models';
import * as RenovationService from '../../application/services/RenovationService';
import { MockRenovationAdapter } from '../../infrastructure/mock/MockRenovationAdapter';

// [RÔLE] Controller Hook: Manages state and data fetching lifecycle
export const useDashboardController = (yearFilter: YearFilter) => {
  // [SYNTAXE] Initialize with safe empty defaults to prevent UI crashes
  const [dashboardData, setDashboardData] = useState<{
    dataPrivate: ChartData[];
    dataSocial: ChartData[];
    pieDataPrivate: PieData[];
    pieDataSocial: PieData[];
  }>({
    dataPrivate: [],
    dataSocial: [],
    pieDataPrivate: [],
    pieDataSocial: []
  });

  const [loading, setLoading] = useState(true);

  // [RÔLE] Dependency Injection: Select the Adapter (Mock for now)
  const repository = useMemo(() => new MockRenovationAdapter(), []);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    // [SYNTAXE] Call the async UseCase
    RenovationService.getDashboardData(repository, yearFilter)
      .then((data) => {
        if (isMounted) {
          setDashboardData(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch dashboard data', err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [yearFilter, repository]);

  const filterLabel = yearFilter === 'ALL' ? 'Toutes les années' : yearFilter.toString();

  return {
    ...dashboardData,
    filterLabel,
    loading // Expose loading state for UI
  };
};
