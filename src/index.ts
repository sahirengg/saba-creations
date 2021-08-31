/**
 * Required External Modules
 */
 import * as dotenv from "dotenv";
 import express from "express";
 import mongoose from 'mongoose';
 import cors from "cors";
 import helmet from "helmet";
 import { categoryRouter } from "./routes/apis/catRoute";
 import { UserRouter } from "./routes/apis/usersRoute";
import {AuthRouter} from "./routes/apis/auth";
import {profileRouter} from "./routes/apis/profilesRoute";

 import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";
// global.Categories = Categories;
import connectDB from '../config/db';



 dotenv.config();


//connect database
 connectDB()

/**
 * App Variables
 */
 if (!process.env.PORT) {
    process.exit(1);
 }
 const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();



/**
 *  App Configuration
 */
const obj:any = {extended:false}
 app.use(helmet());
 app.use(cors());
 app.use(express.json(obj));
 
 app.use("/api/menu/items", categoryRouter);
 app.use("/api", UserRouter);
 app.use("/api", AuthRouter);
 app.use("/api",profileRouter)

 
app.use(errorHandler);
app.use(notFoundHandler);
 
//     }
    

 



/**
 * Server Activation
 * 
 */
 app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });