//importing all the necessary dependencies
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./routes/router.js";
import authRoutes from "./routes/auth.routes.js";


//dotenv configurations
import dotenv from "dotenv";
dotenv.config({});


const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true                
}));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//this is the application


//this is the port number
const port = 3000;

//apis
app.use("/api", router);
app.use("/api/auth",authRoutes);

//listener
app.listen(port, () => {
  connectDB();
  console.log("Server is running at the port 3000");
});
