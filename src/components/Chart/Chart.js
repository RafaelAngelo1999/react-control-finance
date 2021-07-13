import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  console.log(props.dataPoints);
  const dataPoinstValue = props.dataPoints.map(
    (dataPoinst) => dataPoinst.value
  );
  const totalMaximum = Math.max(...dataPoinstValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
