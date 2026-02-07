import mongoose from "mongoose";

mongoose.set("strictQuery", false);

interface ReviewData {
  id: string;
  content: string;
  userId?: string;
  classroomId?: string;
}

const reviewSchema = new mongoose.Schema<ReviewData>({
  content: {
    type: String,
    minLength: 5,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  classroomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classroom",
  },
});

const Review = mongoose.model("Review", reviewSchema);

reviewSchema.set("toJSON", {
  transform: (
    document,
    returnedObject: { id?: string; _id?: mongoose.Types.ObjectId; __v?: number }
  ) => {
    returnedObject.id = returnedObject._id?.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default Review;