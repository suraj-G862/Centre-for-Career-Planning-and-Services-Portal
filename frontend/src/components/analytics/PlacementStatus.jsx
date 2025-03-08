import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';


function PlacementStatus({ placementStats = {} }) {
  const data = Object.entries(placementStats).map(([key, value]) => ({
    year: key,
    TotalPlacement: value[0],
    Placed: value[1],
    Unplaced: value[2],
    TotalHigherStudies: value[3],
    HigherStudiesSelected: value[4],
    HigherStudiesNotSelected: value[5]
  }))
  return (
    <div className='bg-white rounded-xl p-4 w-[600px]  shadow-lg transition-transform hover:scale-105 duration-300 mb-16'>
      <h3 className='text-2xl font-semibold mb-5'>Placement Status</h3>
      <BarChart
        dataset={data}
        series={addLabels([
          { dataKey: 'Placed', stack: 'TotalPlacement' },
          { dataKey: 'Unplaced', stack: 'TotalPlacement' },
          { dataKey: 'HigherStudiesSelected', stack: 'TotalHigherStudies' },
          { dataKey: 'HigherStudiesNotSelected', stack: 'TotalHigherStudies' }
        ])}
        xAxis={[{ scaleType: 'band', dataKey: 'year' }]}
        slotProps={{ legend: { hidden: true } }}
        width={600}
        height={350}
        colors={['#7ffad5', '#ff7e67', '#7ffad5', '#ff7e67']}
      />
    </div>
  )
}

export default PlacementStatus


const translations = {
  TotalPlacement: 'Total Student for Placement',
  Placed: 'Placed',
  Unplaced: 'Unplaced',
  TotalHigherStudies: 'Total Higher Studies',
  HigherStudiesSelected: 'Higher Studies Selected',
  HigherStudiesNotSelected: 'Higher Studies Not Selected',
}

function addLabels(series) {
  return series.map((item) => ({
    ...item,
    label: translations[item.dataKey],
    valueFormatter: (v) => (v ? `${v.toLocaleString()}` : '-'),
  }));
}
