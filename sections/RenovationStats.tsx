import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card } from '../components/Card';
import { ChartData } from '../types';
import './RenovationStats.css';

interface RenovationStatsProps {
  dataPrivate: ChartData[];
  dataSocial: ChartData[];
  filterLabel: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length === 2) {
    return (
      <div className="tooltip-custom">
        <p className="tooltip-title">{label} Arrondissement</p>
        <p className="tooltip-text text-blue">
          Total: <span>{payload[0].value.toLocaleString()}</span>
        </p>
        <p className="tooltip-text text-purple">
          Rénovés: <span>{payload[1].value.toLocaleString()}</span>
        </p>
      </div>
    );
  }
  return null;
};

export const RenovationStats: React.FC<RenovationStatsProps> = ({ dataPrivate, dataSocial, filterLabel }) => {
  return (
    <div className="stats-grid">
      {/* Chart 1: Logement Privé */}
      <Card title={`Logement Privé par Arrondissement (${filterLabel})`}>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={dataPrivate}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barGap={2}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748B', fontSize: 12 }} 
                dy={10}
              />
              <Tooltip cursor={{ fill: '#F1F5F9' }} content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="circle"
                formatter={(value) => <span style={{ color: '#475569', fontWeight: 500, marginLeft: '8px' }}>{value}</span>}
              />
              <Bar 
                dataKey="total" 
                name="L'ensemble des logements" 
                fill="#87CEEB" 
                radius={[4, 4, 4, 4]} 
                barSize={12}
              />
              <Bar 
                dataKey="renovated" 
                name="Nombre de logements rénovés" 
                fill="#C4B5FD" 
                radius={[4, 4, 4, 4]}
                barSize={12}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Chart 2: Logement Social */}
      <Card title={`Logement Social (HLM) par Arrondissement (${filterLabel})`}>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={dataSocial}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barGap={2}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748B', fontSize: 12 }} 
                dy={10}
              />
              <Tooltip cursor={{ fill: '#F1F5F9' }} content={<CustomTooltip />} />
              <Legend 
                 wrapperStyle={{ paddingTop: '20px' }}
                 iconType="circle"
                 formatter={(value) => <span style={{ color: '#475569', fontWeight: 500, marginLeft: '8px' }}>{value}</span>}
              />
              <Bar 
                dataKey="total" 
                name="L'ensemble des logements" 
                fill="#87CEEB" 
                radius={[4, 4, 4, 4]} 
                barSize={12}
              />
              <Bar 
                dataKey="renovated" 
                name="Nombre de logements rénovés" 
                fill="#C4B5FD" 
                radius={[4, 4, 4, 4]}
                barSize={12}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};