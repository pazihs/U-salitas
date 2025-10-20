import type { ClassroomData } from "../types/classrooms";

interface ClassroomProps {
  classroom: ClassroomData;
}

const Classroom = ({ classroom }: ClassroomProps) => (
  <div className="classroom">
    <div style={{
      marginRight: '10px',
      position: "relative",
    }}>
      <img src={classroom.image} width="150" alt={classroom.name} />
    </div>
    <div style={{ padding: '10px' }}>
      <h2>{classroom.name}</h2>
      <p>Edificio: {classroom.building}, Zona: {classroom.zone}</p>
      <p>Piso: {classroom.floor}</p>
      <p>Capacidad: {classroom.capacity}</p>
    </div>
  </div>
);

export default Classroom;