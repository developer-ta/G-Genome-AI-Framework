import React from 'react';
import { Card } from '../../components/Card/Card';
import { PieData } from '../../../domain/models';
import { RenovationPieChart } from '../../components/RenovationPieChart/RenovationPieChart';
import { RenovationVolumeList } from '../../components/RenovationVolumeList/RenovationVolumeList';
import './RenovationVolume.css';

interface RenovationVolumeProps {
  pieDataPrivate: PieData[];
  pieDataSocial: PieData[];
  filterLabel: string;
}

export const RenovationVolume: React.FC<RenovationVolumeProps> = ({ pieDataPrivate, pieDataSocial, filterLabel }) => {
  return (
    <div className="volume-grid">
      <Card title={`Volume Rénovation (Privé) - ${filterLabel}`}>
        <div className="volume-card-content">
          <RenovationPieChart data={pieDataPrivate} centerText="Privé" />
          <RenovationVolumeList data={pieDataPrivate} />
        </div>
      </Card>

      <Card title={`Volume Rénovation (Social) - ${filterLabel}`}>
        <div className="volume-card-content">
          <RenovationPieChart data={pieDataSocial} centerText="Social" />
          <RenovationVolumeList data={pieDataSocial} />
        </div>
      </Card>
    </div>
  );
};