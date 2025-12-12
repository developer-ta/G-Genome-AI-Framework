import { ChartData, PieData, YearFilter } from '../../domain/models';

// This function simulates fetching data that could be filtered by year on a server
const generateDataForYear = (year: YearFilter): { private: ChartData[], social: ChartData[] } => {
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
        renovated: seededRandom(5000, 20000, i),
    }));

    const dataSocial: ChartData[] = Array.from({ length: 20 }, (_, i) => ({
        name: `${i + 1}${i === 0 ? 'er' : 'e'}`,
        total: seededRandom(5000, 10000, i * 2),
        renovated: seededRandom(1000, 4000, i * 2),
    }));

    return { private: dataPrivate, social: dataSocial };
};

const COLORS = [
  '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', 
  '#ec4899', '#6366f1', '#14b8a6', '#f97316', '#06b6d4',
  '#84cc16', '#a855f7', '#fbbf24', '#f43f5e', '#64748b',
  '#22d3ee', '#d946ef', '#eab308', '#34d399', '#60a5fa'
];

const convertToPieData = (data: ChartData[]): PieData[] => {
    return data.map((d, i) => ({
        name: d.name,
        value: d.renovated,
        color: COLORS[i % COLORS.length],
        fill: COLORS[i % COLORS.length]
    })).sort((a, b) => b.value - a.value);
};

export const getRenovationData = (year: YearFilter) => {
    const { private: dataPrivate, social: dataSocial } = generateDataForYear(year);
    const pieDataPrivate = convertToPieData(dataPrivate);
    const pieDataSocial = convertToPieData(dataSocial);
    return { dataPrivate, dataSocial, pieDataPrivate, pieDataSocial };
};
