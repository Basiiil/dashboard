import React from 'react';
import './lineChart.scss';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const LineChart = ({options}) => {

  const data = {
    labels: ['January', 'February', 'March', 'April','May','June'],
    datasets: [{
      label: 'Last 6 Months (Revenue)',
      data: [1200,2100,1000,1600,900,1700],
      borderColor: 'rgb(136, 132, 216)',
      backgroundColor:'rgb(168, 165, 221)',
      tension:0.4,
      borderWidth: 2,
      fill: true,
      pointStyle:'rect'
    }]
  };

  return (
    <div className='chart'>
      <Chart
        type='line'
        data={data}
        options={options}
      />
    </div>
  )
}

export default LineChart