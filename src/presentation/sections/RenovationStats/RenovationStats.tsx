import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card } from "../../components/Card/Card";
import { ChartData } from "../../../domain/models";
import { CHART_COLORS, CHART_CONFIG } from "./Data/chartConfig";
import "./RenovationStats.css";

interface RenovationStatsProps {
  dataPrivate: ChartData[];
  dataSocial: ChartData[];
  filterLabel: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const privateData = payload.find((p: any) => p.dataKey === "total");
    const renovatedData = payload.find((p: any) => p.dataKey === "renovated");
    if (!privateData || !renovatedData) return null;

    return (
      <div className="tooltip-custom">
        <p className="tooltip-title">{label} Arrondissement</p>
        <p className="tooltip-text text-blue">
          Total: <span>{privateData.value.toLocaleString()}</span>
        </p>
        <p className="tooltip-text text-purple">
          Rénovés: <span>{renovatedData.value.toLocaleString()}</span>
        </p>
      </div>
    );
  }
  return null;
};

export const RenovationStats: React.FC<RenovationStatsProps> = ({
  dataPrivate,
  dataSocial,
  filterLabel,
}) => {
  return (
    <div className="stats-grid">
      <Card title={`Logement Privé par Arrondissement (${filterLabel})`}>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={dataPrivate}
              margin={{ top: 20, right: 20, left: 10, bottom: 5 }}
              barGap={2}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke={CHART_COLORS.grid}
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: CHART_COLORS.axis, fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: CHART_COLORS.axis, fontSize: 12 }}
                width={40}
              />
              <Tooltip
                cursor={{ fill: CHART_COLORS.tooltipBg }}
                content={<CustomTooltip />}
              />
              <Legend
                wrapperStyle={CHART_CONFIG.legendWrapperStyle}
                iconType="circle"
                formatter={(value) => (
                  <span
                    style={{
                      color: CHART_COLORS.legendText,
                      fontWeight: 500,
                      marginLeft: "8px",
                    }}
                  >
                    {value}
                  </span>
                )}
              />
              <Bar
                dataKey="total"
                name="L'ensemble des logements"
                fill={CHART_COLORS.total}
                radius={CHART_CONFIG.borderRadius}
                barSize={CHART_CONFIG.barSize}
              />
              <Bar
                dataKey="renovated"
                name="Nombre de logements rénovés"
                fill={CHART_COLORS.renovated}
                radius={CHART_CONFIG.borderRadius}
                barSize={CHART_CONFIG.barSize}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
      <Card title={`Logement Social (HLM) par Arrondissement (${filterLabel})`}>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={dataSocial}
              margin={{ top: 20, right: 20, left: 10, bottom: 5 }}
              barGap={2}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke={CHART_COLORS.grid}
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: CHART_COLORS.axis, fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: CHART_COLORS.axis, fontSize: 12 }}
                width={40}
              />
              <Tooltip
                cursor={{ fill: CHART_COLORS.tooltipBg }}
                content={<CustomTooltip />}
              />
              <Legend
                wrapperStyle={CHART_CONFIG.legendWrapperStyle}
                iconType="circle"
                formatter={(value) => (
                  <span
                    style={{
                      color: CHART_COLORS.legendText,
                      fontWeight: 500,
                      marginLeft: "8px",
                    }}
                  >
                    {value}
                  </span>
                )}
              />
              <Bar
                dataKey="total"
                name="L'ensemble des logements"
                fill={CHART_COLORS.total}
                radius={CHART_CONFIG.borderRadius}
                barSize={CHART_CONFIG.barSize}
              />
              <Bar
                dataKey="renovated"
                name="Nombre de logements rénovés"
                fill={CHART_COLORS.renovated}
                radius={CHART_CONFIG.borderRadius}
                barSize={CHART_CONFIG.barSize}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};
