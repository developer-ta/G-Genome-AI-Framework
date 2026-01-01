import { IRenovationRepository, RenovationStatsResult } from '../../application/ports/IRenovationRepository';
import { ChartData, YearFilter } from '../../domain/models';
import rawStats from '../../data/dtos/renovation_stats.dto.json';

// [RÔLE] Mock implementation of the repository that reads from a static JSON file
// [SYNTAXE] Implements the Interface defined in the Application layer
export class MockRenovationAdapter implements IRenovationRepository {
  
  async getRenovationStats(year: YearFilter): Promise<RenovationStatsResult> {
    // [SYNTAXE] Simulate network delay (500ms)
    await new Promise(resolve => setTimeout(resolve, 500));

    // [RÔLE] Map the raw JSON DTOs to the Domain Model (ChartData)
    // We maintain the distinction between "Private" and "Social" housing here
    const privateData: ChartData[] = rawStats.map(dto => ({
      name: this.formatDistrictName(dto.district),
      total: this.applyYearFactor(dto.private_total, year),
      renovated: this.applyYearFactor(dto.private_renovated, year)
    }));

    const socialData: ChartData[] = rawStats.map(dto => ({
      name: this.formatDistrictName(dto.district),
      total: this.applyYearFactor(dto.social_total, year),
      renovated: this.applyYearFactor(dto.social_renovated, year)
    }));

    return {
      private: privateData,
      social: socialData
    };
  }

  // [SYNTAXE] Helper to format "1" to "1er" or "2" to "2e"
  private formatDistrictName(district: number): string {
    return district === 1 ? '1er' : `${district}e`;
  }

  // [RÔLE] Simulates data changing over years for the MVP demo
  private applyYearFactor(value: number, year: YearFilter): number {
    if (year === 'ALL') return value;
    // Simple mock logic: older years have less renovations, etc.
    // Just a random-ish stable factor based on the year number
    const factor = 1 + (year % 5) * 0.1; 
    return Math.floor(value * factor);
  }
}
