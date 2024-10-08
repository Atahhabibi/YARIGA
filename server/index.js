import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./monogdb/connect.js";

dotenv.config();
const app = express();

app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send({ message: "salam" });
});

const startServer = async () => {
  try {
    //connnet to the database
    connectDB(process.env.MONGODB_URL);

    app.listen(8080, () => {
      console.log("Server has started on port: 8080");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
