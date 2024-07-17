// import express
import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records"
import cors from "cors";

// disini tipe data express
const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// config mongo db, ini diambil dari connect personal tracker
const mongoURI: string =
  "mongodb+srv://lonewolf9887:e9krr54MGe0NcIRF@personalfinancetracker.el90jt7.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected To Mongo DB"))
  .catch((err) => console.error("Failed to Connect to Mongo DB", err));

    // nah disini dia makai financial-records
    app.use("/financial-records", financialRecordRouter)

//   dia nge listen ke mana
  app.listen(port, () => {
    console.log(`Server Listening on Port ${port}`);
      
  })