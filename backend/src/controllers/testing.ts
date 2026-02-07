import express from "express";
import Review from "../models/reviews";
import User from "../models/users";
import Classroom from "../models/classrooms";

const router = express.Router();

router.post("/reset", async (request, response) => {
    await Review.deleteMany({});
    await User.deleteMany({});
    await Classroom.deleteMany({});

    response.status(204).end();
});

export default router;