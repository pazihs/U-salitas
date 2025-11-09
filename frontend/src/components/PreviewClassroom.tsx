import type { ClassroomData } from "../types/classrooms";

interface ClassroomProps {
  classroom: ClassroomData;
}

const PreviewClassroom = ({ classroom }: ClassroomProps) => (
  <div className="classroom">
    <div style={{
      marginRight: '10px',
      position: "relative",
    }}>
      <img src={classroom.inside_image} width="150" alt={classroom.name} />
    </div>
    <div style={{ padding: '10px' }}>
      <h2>{classroom.name}</h2>
      <p>Edificio: {classroom.building}, Zona: {classroom.zone}</p>
      <p>Piso: {classroom.floor}</p>
      <p>Capacidad: {classroom.capacity}</p>
      <div style={{ textAlign: "right", marginLeft: '60px', display: "flex", gap: "20px"  }}>
        <a href={"/classroom/"+classroom.id}>Más información</a>
        <a href="">Ver en el mapa</a>
      </div>
    </div>
  </div>
);

export default PreviewClassroom;