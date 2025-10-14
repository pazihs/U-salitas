import { test, after, beforeEach, describe } from "node:test";
import mongoose from "mongoose";
import supertest from "supertest";
import app from "../../src/app";
import assert from "node:assert";
import Classroom from "../../src/models/classrooms";
import helper from "./test_utils";

const { initialClassrooms } = helper;
const api = supertest(app);

describe("when there is initially some classrooms saved", () => {
  beforeEach(async () => {
    await Classroom.deleteMany({});
    await Classroom.insertMany(initialClassrooms);
  });

  test("classrooms are returned as json", async () => {
    await api
      .get("/api/classrooms")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("all classrooms are returned", async () => {
    const response = await api.get("/api/classrooms");

    assert.strictEqual(response.body.length, initialClassrooms.length);
  });

  test("a specific classroom is within the returned classrooms", async () => {
    const response = await api.get("/api/classrooms");

    const names = response.body.map((e: { name: string }) => e.name);
    assert.strictEqual(names.includes("B01"), true);
  });

  test("a valid classroom can be added ", async () => {
    const newClassroom = {
      name: "B03",
      floor: -1,
      building: "851",
      zone: "Oriente",
      capacity: 100,
    };

    await api
      .post("/api/classrooms")
      .send(newClassroom)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const classrooms = await helper.classroomsInDb();

    const names = classrooms.map((c: { name: string }) => c.name);

    assert.strictEqual(classrooms.length, initialClassrooms.length + 1);

    assert(names.includes("B03"));
  });

  test("classroom without name is not added", async () => {
    const newClassroom = {
      building: "851",
      floor: -1,
      zone: "Oriente",
      capacity: 100,
    };

    await api.post("/api/classrooms").send(newClassroom).expect(400);

    const classrooms = await helper.classroomsInDb();

    assert.strictEqual(classrooms.length, initialClassrooms.length);
  });

  describe("viewing a specific classroom", () => {
    test("a specific classroom can be viewed", async () => {
      const classroomsAtStart = await helper.classroomsInDb();
      const classroomToView = classroomsAtStart[0];

      const resultClassroom = await api
        .get(`/api/classrooms/${classroomToView.id}`)
        .expect(200)
        .expect("Content-Type", /application\/json/);

      assert.deepStrictEqual(resultClassroom.body, classroomToView);
    });

    test("a classroom can be deleted", async () => {
      const classroomsAtStart = await helper.classroomsInDb();
      const classroomToDelete = classroomsAtStart[0];

      await api.delete(`/api/classrooms/${classroomToDelete.id}`).expect(204);

      const classroomsAtEnd = await helper.classroomsInDb();

      const names = classroomsAtEnd.map((c: { name: string }) => c.name);
      assert(!names.includes(classroomToDelete.name));

      assert.strictEqual(classroomsAtEnd.length, helper.initialClassrooms.length - 1);
    });
  });
});
after(async () => {
  await mongoose.connection.close();
});