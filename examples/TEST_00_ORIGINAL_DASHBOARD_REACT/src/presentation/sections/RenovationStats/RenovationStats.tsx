import React from 'react';
import { Card } from '../../components/Card/Card';
import { ChartData } from '../../../domain/models';
import { RenovationBarChart } from '../../components/RenovationBarChart/RenovationBarChart';
import './RenovationStats.css';

interface RenovationStatsProps {
  dataPrivate: ChartData[];
  dataSocial: ChartData[];
  filterLabel: string;
}

export const RenovationStats: React.FC<RenovationStatsProps> = ({
  dataPrivate,
  dataSocial,
  filterLabel
}) => {
  return (
    <div className="stats-grid">
      <Card title={`Logement Privé par Arrondissement (${filterLabel})`}>
        <div className="chart-container">
          <RenovationBarChart data={dataPrivate} />
        </div>
      </Card>
      <Card title={`Logement Social (HLM) par Arrondissement (${filterLabel})`}>
        <div className="chart-container">
          <RenovationBarChart data={dataSocial} />
        </div>
      </Card>
    </div>
  );
};
