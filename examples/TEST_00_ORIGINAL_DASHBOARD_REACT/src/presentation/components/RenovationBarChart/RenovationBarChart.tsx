import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { ChartData } from '../../../domain/models';
import { BAR_CHART_COLORS, CHART_CONFIG } from '../../config/chartConfig';
import './RenovationBarChart.css';

interface RenovationBarChartProps {
  data: ChartData[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const privateData = payload.find((p: any) => p.dataKey === 'total');
    const renovatedData = payload.find((p: any) => p.dataKey === 'renovated');
    if (!privateData || !renovatedData) return null;

    return (
      <div
        className="tooltip-custom"
        style={{
          backgroundColor: BAR_CHART_COLORS.tooltipBg,
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px'
        }}>
        <p className="tooltip-title" style={{ fontWeight: 'bold', marginBottom: '5px' }}>
          {label} Arrondissement
        </p>
        <p className="tooltip-text" style={{ color: BAR_CHART_COLORS.total }}>
          Total: <span>{privateData.value.toLocaleString()}</span>
        </p>
        <p className="tooltip-text" style={{ color: BAR_CHART_COLORS.renovated }}>
          Rénovés: <span>{renovatedData.value.toLocaleString()}</span>
        </p>
      </div>
    );
  }
  return null;
};

export const RenovationBarChart: React.FC<RenovationBarChartProps> = ({ data }) => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 20, left: 10, bottom: 5 }} barGap={2}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={BAR_CHART_COLORS.grid} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: BAR_CHART_COLORS.axis, fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: BAR_CHART_COLORS.axis, fontSize: 12 }}
            width={40}
          />
          <Tooltip cursor={{ fill: BAR_CHART_COLORS.tooltipBg }} content={<CustomTooltip />} />
          <Legend
            wrapperStyle={CHART_CONFIG.legendWrapperStyle}
            iconType="circle"
            formatter={(value) => (
              <span
                style={{
                  color: BAR_CHART_COLORS.legendText,
                  fontWeight: 500,
                  marginLeft: '8px'
                }}>
                {value}
              </span>
            )}
          />
          <Bar
            dataKey="total"
            name="L'ensemble des logements"
            fill={BAR_CHART_COLORS.total}
            radius={CHART_CONFIG.borderRadius}
            barSize={CHART_CONFIG.barSize}
          />
          <Bar
            dataKey="renovated"
            name="Nombre de logements rénovés"
            fill={BAR_CHART_COLORS.renovated}
            radius={CHART_CONFIG.borderRadius}
            barSize={CHART_CONFIG.barSize}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
