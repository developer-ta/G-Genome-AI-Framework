import React from 'react';
import { PieData } from '../../../../domain/models';

interface VolumeListProps {
  data: PieData[];
}

const getArrNumber = (name: string) => parseInt(name.replace(/\D/g, ''));

export const VolumeList: React.FC<VolumeListProps> = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const sortedList = [...data].sort((a, b) => getArrNumber(a.name) - getArrNumber(b.name));
  const firstHalf = sortedList.slice(0, 10);
  const secondHalf = sortedList.slice(10, 20);

  const renderRow = (item: PieData) => {
      const percent = total > 0 ? ((item.value / total) * 100).toFixed(1) : 0;
      return (
          <div key={item.name} className="list-row">
              <div className="dot" style={{ backgroundColor: item.fill || item.color }} />
              <div className="row-content">
                  <span className="row-name">{item.name} Arr.</span>
                  <span className="row-percent">{percent}%</span>
              </div>
          </div>
      );
  };

  return (
    <div className="list-section">
      <div className="split-list-container">
        <div className="list-column">
             {firstHalf.map(item => renderRow(item))}
        </div>
        <div className="list-column">
             {secondHalf.map(item => renderRow(item))}
        </div>
      </div>
    </div>
  );
};