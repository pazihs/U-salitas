import express from "express";
import Review from "../models/reviews";
import User from "../models/users";
import { withUser } from "../utils/middleware";

const router = express.Router();

router.get("/", async (request, response) => {
    const reviews = await Review.find({}).populate("user", { username: 1 });
    response.json(reviews);
});

router.get("/:id", async (request, response, next) => {
    const id = request.params.id;
    const review = await Review.findById(id);
    if (review) {
        response.json(review);
    } else {
        response.status(404).end();
    }
});

router.delete("/:id", withUser, async (request, response, next) => {
    const id = request.params.id;
    await Review.findByIdAndDelete(id);
    response.status(204).end();
});

router.post("/", withUser, async (request, response, next) => {
    const body = request.body;
    const user = await User.findById(request.userId);

    if (!user) {
        response.status(400).json({
            error: "user not found",
        });
    } else if (!body.content) {
        response.status(400).json({
            error: "content missing",
        });
    } else {
        const review = {
            content: body.content,
            user: user.id,
            classroom: body.classroomId,
        };

        const savedReview = await new Review(review).save();

        user.reviews = user.reviews.concat(savedReview.id);
        await user.save();
        response.status(201).json(savedReview);
    }

});

router.put("/:id", withUser, async (request, response, next) => {
    const { content, userId, classroomId } = request.body;

    const review = await Review.findById(request.params.id);

    if (review) {
        review.content = content;
        review.userId = userId;
        review.classroomId = classroomId;

        review.save().then((updatedReview) => {
            response.json(updatedReview);
        });
    } else {
        response.status(404).end();
    }
});

export default router;