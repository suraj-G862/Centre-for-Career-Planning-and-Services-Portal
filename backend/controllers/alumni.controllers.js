import Alumni from '../models/Alumni.model.js';

//issue nummber 34
export const alumniList = async (req, res) => {
    try {
        const alumni = await Alumni.find();
        res.json(alumni);
    } catch (error) {
        res.json({ message: error });
    }
}   