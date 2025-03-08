import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import router from "./routes/router.js";
import authRoutes from "./routes/auth.routes.js";


import dotenv from "dotenv";
dotenv.config({});

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true                
}));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//apis
app.use("/api", router);
app.use("/api/auth",authRoutes);

app.listen(port, () => {
  connectDB();
  console.log("Server is running at the port 3000");
});