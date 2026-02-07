import bcrypt from "bcrypt";
import express from "express";
import User from "../models/users";

const router = express.Router();

router.get("/", async (request, response) => {
  const users = await User.find({});
  response.json(users);
});

router.get("/:id", async (request, response, next) => {
  const id = request.params.id;
  const user = await User.findById(id);
  if (user) {
    response.json(user);
  } else {
    response.status(404).end();
  }
});

router.post("/", async (request, response) => {
  const { username, email, password } = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    email,
    passwordHash,
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});

export default router;