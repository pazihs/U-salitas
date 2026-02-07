import Classroom from '../models/classrooms';
import { classrooms } from './classrooms';

export const seedClassrooms = async () => {
    const count = await Classroom.countDocuments();

    if (count === 0) {
        classrooms.forEach(async classroom => await Classroom.create(classroom));
    }
};