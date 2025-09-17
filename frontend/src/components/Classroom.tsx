import type { ClassroomData } from "../types/classrooms";

interface ClassroomProps {
  classroom: ClassroomData;
}

const Classroom = ({ classroom }: ClassroomProps) => (
  <div className="classroom">
    <h2>{classroom.name}</h2>
    <p>Edificio: {classroom.building}, Zona: {classroom.zone}</p>
    <p>Piso: {classroom.floor}</p>
    <p>Capacidad: {classroom.capacity}</p>
  </div>
);

export default Classroom;