import * as React from "react";
import { Chart } from "react-google-charts";

const ExampleChart = (props) => {
  return (
    <Chart
    chartType="PieChart"
    loader={<div>Loading Chart</div>}
    data={props.data}
    options={{
      title: 'My Daily Activities',
      // Just add this option
      pieHole: 0.4,
    }}
    rootProps={{ 'data-testid': '3' }}
  />
  );
};
export default ExampleChart;