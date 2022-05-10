import React from 'react';
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = props => {
  const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMax = Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
};

export default Chart;
