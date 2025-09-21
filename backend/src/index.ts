import dotenv from "dotenv";
dotenv.config();

import express, { NextFunction, Request, Response } from "express";
import Classroom from "./models/classrooms";
import mongoose from "mongoose";

const url = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/classroomsdb";

mongoose.set("strictQuery", false);
if (url) {
    console.log("connecting to", url);
    mongoose.connect(url)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.log("error connecting to MongoDB:", error.message);
        });
}

const app = express();
app.use(express.json());
app.use(express.static("dist"));

const requestLogger = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    console.log("Method:", request.method);
    console.log("Path: ", request.path);
    console.log("Body: ", request.body);
    console.log("---");
    next();
};
app.use(requestLogger);

app.get("/", (request, response) => {
    response.send("<h1>Hello World!</h1>");
});

app.get("/api/classrooms", (request, response) => {
    Classroom.find({}).then((classrooms) => {
        response.json(classrooms);
    });
});

app.get("/api/classrooms/:id", (request, response, next) => {
    const id = Number(request.params.id);
    Classroom.findById(id)
        .then((classroom) => {
            if (classroom) {
                response.json(classroom);
            } else {
                response.status(404).end();
            }
        })
        .catch((error) => {
            next(error);
        });
});

app.delete("/api/classrooms/:id", (request, response, next) => {
    const id = request.params.id;
    Classroom.findByIdAndDelete(id)
        .then(() => {
            response.status(204).end();
        })
        .catch((error) => {
            next(error);
        });
});

app.post("/api/classrooms", (request, response, next) => {
    const body = request.body;
    if (!body.name || !body.floor || !body.building || !body.zone || !body.capacity) {
        response.status(400).json({
            error: "parameter missing",
        });
    } else {
        const classroom = {
            name: body.name,
            floor: body.floor,
            building: body.building,
            zone: body.zone,
            capacity: body.capacity,
            likes: body.likes || 0,
            dislikes: body.dislikes || 0,
            image: body.image || "https://ingenieria.uchile.cl/dam/jcr:bde4ac78-1861-446f-ab70-23cea6d8b5ec/q10-n.jpg",
        };

        const classroomDocument = new Classroom(classroom);
        classroomDocument
            .save()
            .then((savedClassroom) => {
                response.status(201).json(savedClassroom);
            })
            .catch((error) => next(error));
    }
});

const errorHandler = (
    error: { name: string; message: string },
    request: Request,
    response: Response,
    next: NextFunction
) => {
    console.error(error.message);

    console.error(error.name);
    if (error.name === "CastError") {
        response.status(400).send({ error: "malformatted id" });
    } else if (error.name === "ValidationError") {
        response.status(400).json({ error: error.message });
    }
    next(error);
};
app.use(errorHandler);

const unknownEndpoint = (request: Request, response: Response) => {
    response.status(404).send({ error: "unknown endpoint" });
};
app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});