import Stats from "../models/stats.model.js";

export const getAllData = async (req, res) => {
    try {
        const stats = await Stats.find();
        res.json(stats);
    }
    catch (error) {
        res.json({ message: error });
    }
}

export const updateData = async (req, res) => {
    try {
        const { sectors, bestCompanies, collegePerformance, placementStats, companiesVisited, totalPlaced, placementPercentage, interships } = req.body;
        await Stats.deleteMany({});
        const newStats = await Stats.create({
            sectors,
            bestCompanies,
            collegePerformance,
            placementStats,
            companiesVisited,
            totalPlaced,
            placementPercentage,
            interships
        });
        res.status(200).json({ message: "Data updated successfully", data: newStats });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};