import { getRenovationData } from '../../infrastructure/data/renovationData';
import { YearFilter } from '../../domain/models';

/**
 * In a larger app, this service would contain more complex business logic,
 * data aggregation from multiple sources, caching strategies, etc.
 * It defines the "use cases" of the application.
 */
export const getDashboardData = (year: YearFilter) => {
  // For now, it's a simple pass-through to the infrastructure layer's data source.
  return getRenovationData(year);
};