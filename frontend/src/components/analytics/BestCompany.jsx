import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

function valueFormatter(value) {
  return `${value}`;
}

const chartSetting = {
  xAxis: [
    {
      label: 'Number of candidates',
    },
  ],
  width: 600,
  height: 350,
};

export default function BestCompany({ bestCompanies = {} }) {
  const data = Object.entries(bestCompanies).map(([key, value]) => ({
    company: key,
    candidates: value
  }));

  return (
    <div className='border border-gray-200 p-4 w-[600px] bg-white rounded-xl shadow-lg transition-transform hover:scale-105 duration-300 mb-16'>
      <h3 className='text-2xl font-semibold'>Best Company</h3>
      <BarChart
        dataset={data}
        yAxis={[{ scaleType: 'band', dataKey: 'company' }]}
        series={[{ dataKey: 'candidates', valueFormatter }]}
        layout="horizontal"
        colors={['#7ffad5']}
        {...chartSetting}
      />
    </div>
  );
}