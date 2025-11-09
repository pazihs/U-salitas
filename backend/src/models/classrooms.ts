import mongoose from "mongoose";

export interface ClassroomData {
  id: string;
  name: string;
  floor: number;
  building: "850" | "851";
  zone: string;
  capacity: number;
  likes?: number;
  dislikes?: number;
  inside_image?: string;
  outside_image?: string;
  reviews: mongoose.Types.ObjectId[];
}

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
  inside_image: { type: String, default: "https://ingenieria.uchile.cl/dam/jcr:bde4ac78-1861-446f-ab70-23cea6d8b5ec/q10-n.jpg" },
  outside_image: { type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZIgXeoQeCczLd0LYl-7ejVnuU_8_IB-E6Q&s" },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

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

const Classroom = mongoose.model("Classroom", classroomSchema);

export default Classroom;