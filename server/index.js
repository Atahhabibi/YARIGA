import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./monogdb/connect.js";
import propertyRouter from "./routes/property.routes.js";
import userRouter from "./routes/user.routes.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send({ message: "salam" });
});

app.use("/api/v1/users", userRouter);

app.use("/api/v1/properties", propertyRouter);

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
