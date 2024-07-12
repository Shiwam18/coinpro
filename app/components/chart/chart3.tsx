import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

interface DoughnutChartProps {
  data: ChartData<'doughnut'>;
  options: ChartOptions<'doughnut'>;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, options }) => {
  return(
<>

<div className="donat-chart">
<Doughnut data={data} options={options} />
<span className='donat-chart-text'>60<small>Greed</small></span>
</div>
</>
  ) 
  
};

export default DoughnutChart;