import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

function DonutChart({ labels = [], name, series = [] }: Props) {
  return (
    <div className="donut-chart-container">
      <ReactApexChart
        type="donut"
        width={400}
        options={buildPieChartConfig(labels, name)}
        series={series}
        height={400}
      />
    </div>
  );
}

export default DonutChart;
