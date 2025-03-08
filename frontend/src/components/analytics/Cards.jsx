import React from 'react'
import Card from './Card'

function Cards({data}) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4   mx-auto xl:mx-0'>
            <Card data={data.companiesVisited} title={"Companies visited"} />
            <Card data={data.totalPlaced} title={"Total Students Placed"} />
            <Card data={data.placementPercentage} title={"Placement Percentage"} />
            <Card data={data.interships} title={"Internships"} />
        </div>
    )
}

export default Cards
