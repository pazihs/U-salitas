import express from "express";
import mongoose from "mongoose";
import config from "./utils/config";
import logger from "./utils/logger";
import middleware from "./utils/middleware";
import classroomsRouter from "./controllers/classrooms";
import usersRouter from "./controllers/users";
import loginRouter from "./controllers/login";

const app = express();

mongoose.set("strictQuery", false);

if (config.MONGODB_URI) {
  mongoose.connect(config.MONGODB_URI).catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });
}

app.use(express.static("dist"));
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/classrooms", classroomsRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;