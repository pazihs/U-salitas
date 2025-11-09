import Classroom from '../models/classrooms';
import { classrooms } from './classrooms';

export const seedClassrooms = async () => {
    const count = await Classroom.countDocuments();

    await Classroom.deleteMany({}); // Opcional: limpia antes de insertar
    await Classroom.insertMany(classrooms);

    //   if (count === 0) {
    //     await Classroom.insertMany(initialClassrooms);
    //     console.log('Base de datos inicializada con salas de clase');
    //   }
};