import express from 'express';
import { getThreads, createThread, createComment, upvote, downvote } from '../controllers/thread.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get("/getThreads", protectRoute, getThreads);
router.post("/createThread", protectRoute, createThread);

router.post("/createComment/:threadId", protectRoute, createComment);

router.post("/upvote/:threadId", protectRoute, upvote);
router.post("/downvote/:threadId", protectRoute, downvote);


export default router;