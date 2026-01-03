import { ChartData, YearFilter } from '../../domain/models';

/**
 * Mock data source - simulates fetching data from a server
 * In production, this would be replaced with actual API calls
 */

// This function simulates fetching data that could be filtered by year on a server
const generateDataForYear = (year: YearFilter): { private: ChartData[]; social: ChartData[] } => {
  // A simple seed to make "random" data consistent for a given year
  const seed = year === 'ALL' ? 1 : year;
  const seededRandom = (min: number, max: number, index: number) => {
    const x = Math.sin(seed + index) * 10000;
    const rand = x - Math.floor(x);
    return Math.floor(rand * (max - min + 1)) + min;
  };

  const dataPrivate: ChartData[] = Array.from({ length: 20 }, (_, i) => ({
    name: `${i + 1}${i === 0 ? 'er' : 'e'}`,
    total: seededRandom(20000, 50000, i),
    renovated: seededRandom(5000, 20000, i)
  }));

  const dataSocial: ChartData[] = Array.from({ length: 20 }, (_, i) => ({
    name: `${i + 1}${i === 0 ? 'er' : 'e'}`,
    total: seededRandom(5000, 10000, i * 2),
    renovated: seededRandom(1000, 4000, i * 2)
  }));

  return { private: dataPrivate, social: dataSocial };
};

/**
 * Public API: Get renovation data filtered by year
 * Returns raw business data (ChartData format)
 */
export const getRenovationData = (year: YearFilter) => {
  return generateDataForYear(year);
};
