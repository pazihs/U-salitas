import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const classroomSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        required: true
    },
    floor: { type: Number, required: true },
    building: { type: String, required: true, enum: ['850', '851'] },
    zone: { type: String, required: true },
    capacity: { type: Number, required: true, },
    likes: { type: Number, default: 0, },
    dislikes: { type: Number, default: 0, },
});

const Classroom = mongoose.model("Classroom", classroomSchema);

classroomSchema.set("toJSON", {
  transform: (
    document,
    returnedObject: { id?: string; _id?: mongoose.Types.ObjectId; __v?: number }
  ) => {
    returnedObject.id = returnedObject._id?.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default Classroom;