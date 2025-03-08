import mongoos from 'mongoose';

const statsSchema = new mongoos.Schema({
    sectors: {
        type:Map,
        of:Number,
    },
    bestCompanies: {
        type:Map,
        of:Number,
    },
    collegePerformance: {
        type:Map,
        of:Number,
    },
    placementStats: {
        type:Map,
        of:{
            type:[Number],
        }
    },
    companiesVisited: {
        type:Number,
        required:true,
    },
    totalPlaced:{
        type:Number,
        required:true,
    },
    placementPercentage:{
        type:Number,
        required:true,
    },
    interships:{
        type:Number,
        required:true,
    }
})

const Stats = mongoos.model("Stats",statsSchema);

export default Stats;