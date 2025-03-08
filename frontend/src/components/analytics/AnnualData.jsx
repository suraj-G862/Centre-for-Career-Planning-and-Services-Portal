import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';


const AnnualData = ({collegePerformance={}}) => {
  const NumberOfCandidates = Object.values(collegePerformance);
  const years = Object.keys(collegePerformance);  
  return (
    <div className='p-4 w-[600px] bg-white rounded-xl shadow-lg transition-transform hover:scale-105 duration-300 mb-16'>
      <h3 className='text-2xl font-semibold mb-10'>College Performance</h3>
      <LineChart
        width={600}
        height={300}
        series={[
          { curve: "linear", data: NumberOfCandidates, label: 'Candidates Hired'  },
        ]}
        colors={['#7ffad5']}
        xAxis={[{ scaleType: 'point', data: years }]}
      />
    </div>
  );
}

export default AnnualData;