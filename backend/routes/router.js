//importing all the necessary dependencies 
import express from "express";
import {jobCreate,jobUpdate,jobRelevanceScoreUpvote,jobRelevanceScoreDownvote,jobDelete,jobList} from "../controllers/jobs.controllers.js"
import { alumniList } from "../controllers/alumni.controller.js";
import { ViewRes ,updateProfile , deleteOffCampus ,addOffCampus,updateStatus  } from "../controllers/studentview.js";

//using the router
const router = express.Router();

//making the routes
router.route("").get();
router.post("/jobs",jobCreate)
router.put("/jobs/:id",jobUpdate)
router.delete("/jobs/:id",jobDelete)
router.get('/jobs', jobList);
router.get('/jobs/upvote/:id',jobRelevanceScoreUpvote)
router.get('/jobs/downvote/:id',jobRelevanceScoreDownvote)

// getting student view
router.get('/student/:ID', ViewRes);
router.update('/student/:ID', updateProfile);
router.delete('/student/:ID', deleteOffCampus);
router.update('/student/:ID', addOffCampus);
router.update('/student/:ID', updateStatus);


//alumni routes
router.get("/alumni", alumniList);

//exporting the router
export default router;
