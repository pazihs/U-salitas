import express from "express";
import mongoose from "mongoose";
import config from "./utils/config";
import logger from "./utils/logger";
import middleware from "./utils/middleware";
import classroomsRouter from "./controllers/classrooms";
import usersRouter from "./controllers/users";
import loginRouter from "./controllers/login";
import reviewRouter from "./controllers/reviews";
import testingRouter from "./controllers/testing";
import cors from "cors";
import cookieParser from "cookie-parser";
import { seedClassrooms } from "./utils/initDb";
import path from "path"

const app = express();

mongoose.set("strictQuery", false);

if (config.MONGODB_URI) {
  mongoose.connect(config.MONGODB_URI)
  .then(async () => {
    console.log("connected to MongoDB");
    await seedClassrooms();
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });
}


app.use(express.static("dist"));
app.use(express.json());
app.use(cookieParser());
app.use(middleware.requestLogger);

app.use("/api/classrooms", classroomsRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/reviews", reviewRouter);

if (process.env.NODE_ENV === "test") {
  app.use("/api/testing", testingRouter);
}

app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;