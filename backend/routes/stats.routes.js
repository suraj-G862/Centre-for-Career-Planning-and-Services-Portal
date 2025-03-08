import express from 'express';
import {getAllData , updateData} from '../controllers/stats.controller.js';
const router = express.Router();

router.get('/', getAllData);
router.put('/', updateData);

export default router;