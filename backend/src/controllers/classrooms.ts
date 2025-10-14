import express from "express";
import Classroom from "../models/classrooms";


const router = express.Router();

router.get("/", async (request, response) => {
  const classrooms = await Classroom.find({});
  response.json(classrooms);
});

router.get("/:id", async (request, response, next) => {
  const id = request.params.id;
  const classroom = await Classroom.findById(id);
  if (classroom) {
    response.json(classroom);
  } else {
    response.status(404).end();
  }
});

router.delete("/:id", async (request, response, next) => {
  const id = request.params.id;
  await Classroom.findByIdAndDelete(id);
  response.status(204).end();
});

router.post("/", async (request, response, next) => {
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
    const savedClassroom = await classroomDocument.save();
    response.status(201).json(savedClassroom);
  }
});

// router.put("/:id", async (request, response, next) => {
//   const { name, floor, building, zone, capacity, likes, dislikes, image } = request.body;

//   const classroom = await Classroom.findById(request.params.id);

//   if (classroom) {
//     classroom.name = name;
//     classroom.floor = floor;
//     classroom.building = building;
//     classroom.zone = zone;
//     classroom.capacity = capacity;
//     classroom.likes = likes;
//     classroom.dislikes = dislikes;
//     classroom.image = image;

//     classroom.save().then((updatedClassroom) => {
//       response.json(updatedClassroom);
//     });
//   } else {
//     response.status(404).end();
//   }
// });

export default router;