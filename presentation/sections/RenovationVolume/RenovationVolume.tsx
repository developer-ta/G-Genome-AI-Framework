import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { Card } from '../../components/Card/Card';
import { PieData } from '../../../domain/models';
import './RenovationVolume.css';

interface RenovationVolumeProps {
  pieDataPrivate: PieData[];
  pieDataSocial: PieData[];
  filterLabel: string;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload[0]?.payload) {
     const data = payload[0].payload;
      return (
          <div className="tooltip-radial">
            <p className="tooltip-radial-title">{data.name} Arrondissement</p>
            <p className="tooltip-radial-text">
              Logements Rénovés: <span className="tooltip-radial-val">{data.value.toLocaleString()}</span>
            </p>
          </div>
      );
  }
  return null;
};

// Helper to parse arrondissement number for sorting the list numerically
const getArrNumber = (name: string) => parseInt(name.replace(/\D/g, ''));

const RADIAN = Math.PI / 180;

// Function to render the Arrondissement Name outside the chart
const renderOuterLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, value }: any) => {
  const radius = outerRadius * 1.15; 
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#5c5c7b"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={11}
      fontWeight={600}
      fontFamily="inherit"
    >
      {name}
    </text>
  );
};

// Function to render the Percentage inside the slice
const renderInnerLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  if (percent < 0.03) return null;

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={10}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const RenovationVolume: React.FC<RenovationVolumeProps> = ({ pieDataPrivate, pieDataSocial, filterLabel }) => {
  const totalPrivate = pieDataPrivate.reduce((sum, item) => sum + item.value, 0);
  const totalSocial = pieDataSocial.reduce((sum, item) => sum + item.value, 0);

  const renderSplitList = (data: PieData[], total: number) => {
    const sortedList = [...data].sort((a, b) => getArrNumber(a.name) - getArrNumber(b.name));
    const firstHalf = sortedList.slice(0, 10);
    const secondHalf = sortedList.slice(10, 20);

    const renderRow = (item: PieData, index: number) => {
        const percent = ((item.value / total) * 100).toFixed(1);
        return (
            <div key={index} className="list-row">
                <div className="dot" style={{ backgroundColor: item.fill || item.color }} />
                <div className="row-content">
                    <span className="row-name">{item.name} Arr.</span>
                    <span className="row-percent">{percent}%</span>
                </div>
            </div>
        );
    };

    return (
      <div className="split-list-container">
        <div className="list-column">
             {firstHalf.map((item, i) => renderRow(item, i))}
        </div>
        <div className="list-column">
             {secondHalf.map((item, i) => renderRow(item, i))}
        </div>
      </div>
    );
  };

  return (
    <div className="volume-grid">
      <Card title={`Volume Rénovation (Privé) - ${filterLabel}`}>
        <div className="volume-card-content">
          <div className="chart-section">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart margin={{ top: 20, right: 40, bottom: 20, left: 40 }}>
                <Pie
                  data={pieDataPrivate}
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="80%" 
                  paddingAngle={4}
                  cornerRadius={8}
                  dataKey="value"
                  stroke="none"
                  label={renderOuterLabel}
                  labelLine={false}
                >
                  {pieDataPrivate.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill || entry.color} />
                  ))}
                  <LabelList 
                    position="inside" 
                    content={renderInnerLabel}
                  />
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="chart-center-label">
                <div className="chart-center-text">Privé</div>
            </div>
          </div>
          <div className="list-section">
             {renderSplitList(pieDataPrivate, totalPrivate)}
          </div>
        </div>
      </Card>
      <Card title={`Volume Rénovation (Social) - ${filterLabel}`}>
        <div className="volume-card-content">
          <div className="chart-section">
              <ResponsiveContainer width="100%" height="100%">
              <PieChart margin={{ top: 20, right: 40, bottom: 20, left: 40 }}>
                <Pie
                  data={pieDataSocial}
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="80%"
                  paddingAngle={4}
                  cornerRadius={8}
                  dataKey="value"
                  stroke="none"
                  label={renderOuterLabel}
                  labelLine={false}
                >
                  {pieDataSocial.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill || entry.color} />
                  ))}
                  <LabelList 
                    position="inside" 
                    content={renderInnerLabel}
                  />
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
              <div className="chart-center-label">
                <div className="chart-center-text">Social</div>
            </div>
          </div>
           <div className="list-section">
             {renderSplitList(pieDataSocial, totalSocial)}
          </div>
        </div>
      </Card>
    </div>
  );
};