import Classroom, { ClassroomData } from "../../src/models/classrooms";
import User from "../../src/models/users";


const initialClassrooms = [
  {
    name: "B01",
    floor: -1,
    building: "851",
    zone: "Oriente",
    capacity: 100,
  },
  {
    name: "B02",
    floor: -1,
    building: "851",
    zone: "Oriente",
    capacity: 100,
  },
  {
    name: "QO",
    floor: 2,
    building: "850",
    zone: "Química",
    capacity: 30,
  },
];

const nonExistingId = async () => {
  const classroom = new Classroom({ name: "willremovethissoon", floor: 0, building: "850", zone: "", capacity: 0 });
  await classroom.save();
  await classroom.deleteOne();

  return classroom._id.toString();
};

const classroomsInDb = async (): Promise<ClassroomData[]> => {
  const classrooms = await Classroom.find({});
  return classrooms.map((classroom) => classroom.toJSON() as unknown as ClassroomData);
};

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((u) => u.toJSON());
};

export default { initialClassrooms, nonExistingId, classroomsInDb, usersInDb };