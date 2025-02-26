import React from 'react'

import Sectors from './Sectors';
import BestCompany from './BestCompany';
import PlacementStatus from './PlacementStatus';
import AnnualData from './AnnualData';

function CollegeInsights( {data} ) {
    return (
        <div className="grid 2xl:grid-cols-2 w-full grid-cols-1 p-2 -mt-[500px] -ml-[14%] md:mt-0 md:ml-0 md:p-16 scale-[40%] md:scale-100">
            <Sectors sectors={data.sectors} />
            <BestCompany bestCompanies={data.bestCompanies} />
            <PlacementStatus placementStats={data.placementStats} />
            <AnnualData collegePerformance={data.collegePerformance} />
        </div>
    )
}

export default CollegeInsights
