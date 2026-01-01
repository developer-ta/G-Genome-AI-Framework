import { ChartData, YearFilter } from '../../domain/models';

// [RÔLE] Defines the shape of the data returned by the repository
export interface RenovationStatsResult {
  private: ChartData[];
  social: ChartData[];
}

// [RÔLE] The Port (Contract) that the Infrastructure layer must implement
export interface IRenovationRepository {
  // [SYNTAXE] Returns a Promise to handle both sync (Mock) and async (API) implementations
  getRenovationStats(year: YearFilter): Promise<RenovationStatsResult>;
}
