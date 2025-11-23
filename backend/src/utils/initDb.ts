import Classroom from '../models/classrooms';
import { classrooms } from './classrooms';

export const seedClassrooms = async () => {
    const count = await Classroom.countDocuments();

    // BORRAR CUANDO ENTREGUEMOS
    await Classroom.deleteMany({});
    classrooms.forEach(async classroom => await Classroom.create(classroom));

    // if (count === 0) {
    //     await Classroom.insertMany(classrooms);
    // }
};