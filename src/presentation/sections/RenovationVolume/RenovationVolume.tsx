import React from 'react';
import { Card } from '../../components/Card/Card';
import { PieData } from '../../../domain/models';
import { VolumeChart } from './subsections/VolumeChart';
import { VolumeList } from './subsections/VolumeList';
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
          <VolumeChart data={pieDataPrivate} centerText="Privé" />
          <VolumeList data={pieDataPrivate} />
        </div>
      </Card>
      
      <Card title={`Volume Rénovation (Social) - ${filterLabel}`}>
        <div className="volume-card-content">
          <VolumeChart data={pieDataSocial} centerText="Social" />
          <VolumeList data={pieDataSocial} />
        </div>
      </Card>
    </div>
  );
};