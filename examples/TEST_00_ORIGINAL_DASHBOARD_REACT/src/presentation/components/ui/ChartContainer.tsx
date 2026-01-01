import React from 'react';
import { ResponsiveContainer } from 'recharts';

interface ChartContainerProps {
  children: React.ReactElement;
  width?: string | number;
  height?: string | number;
  className?: string; // Add className prop just in case
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ 
  children, 
  width = "100%", 
  height = "100%",
  className
}) => {
  return (
    <div style={{ width: '100%', height: '100%' }} className={className}>
      <ResponsiveContainer width={width} height={height}>
        {children}
      </ResponsiveContainer>
    </div>
  );
};
