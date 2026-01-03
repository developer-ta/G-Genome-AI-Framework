import React from 'react';
import { PieChart, Pie, Cell, Tooltip, LabelList } from 'recharts';
import { PieData } from '../../../domain/models';
import { ChartContainer } from '../../components/ui/ChartContainer';
import './RenovationPieChart.css';

interface RenovationPieChartProps {
  data: PieData[];
  centerText: string;
}

const RADIAN = Math.PI / 180;

const renderOuterLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name }: any) => {
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

// [SYNTAXE] Custom renderer for inner percentage labels
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

// [RÔLE] Reusable Pie Chart component for displaying renovation volumes
export const RenovationPieChart: React.FC<RenovationPieChartProps> = ({ data, centerText }) => {
  return (
    <div className="chart-section">
      <ChartContainer>
        <PieChart margin={{ top: 20, right: 40, bottom: 20, left: 40 }}>
          <Pie
            data={data}
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
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill || entry.color} />
            ))}
            <LabelList 
              position="inside" 
              content={renderInnerLabel}
            />
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ChartContainer>
      <div className="chart-center-label">
          <div className="chart-center-text">{centerText}</div>
      </div>
    </div>
  );
};
