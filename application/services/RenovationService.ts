import { getRenovationData } from '../../infrastructure/data/renovationData';
import { YearFilter, ChartData, PieData } from '../../domain/models';
import { PIE_CHART_COLORS } from '../../presentation/config/chartConfig';

/**
 * Converts ChartData to PieData format for pie charts
 * This is application logic: transforming domain data to presentation format
 */
const convertToPieData = (data: ChartData[]): PieData[] => {
  return data
    .map((d, i) => ({
      name: d.name,
      value: d.renovated,
      color: PIE_CHART_COLORS[i % PIE_CHART_COLORS.length],
      fill: PIE_CHART_COLORS[i % PIE_CHART_COLORS.length]
    }))
    .sort((a, b) => b.value - a.value);
};

/**
 * In a larger app, this service would contain more complex business logic,
 * data aggregation from multiple sources, caching strategies, etc.
 * It defines the "use cases" of the application.
 */
export const getDashboardData = (year: YearFilter) => {
  // Get raw data from infrastructure layer
  const { private: dataPrivate, social: dataSocial } = getRenovationData(year);

  // Transform to presentation formats
  const pieDataPrivate = convertToPieData(dataPrivate);
  const pieDataSocial = convertToPieData(dataSocial);

  return {
    dataPrivate,
    dataSocial,
    pieDataPrivate,
    pieDataSocial
  };
};;