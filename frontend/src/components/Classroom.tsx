import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import classrooms from "../services/classrooms";
import type { ClassroomData } from "../types/classrooms";

const Classroom = () => {
    const { id } = useParams();
    const [classroom, setClassroom] = useState<ClassroomData | null>(null);

    useEffect(() => {
        if (id) {
            classrooms.getClassroom(id)
                .then(classroom => setClassroom(classroom));
        }
    }, [id]);

    if (!id || !classroom) return null;

    return (
        <div style={{ display: "flex", marginTop: "30px"}}>
            <h2>Sala {classroom.name}</h2>
            <div>
                <img src={classroom.inside_image} width="150" alt={classroom.name} />
            </div>
            <div className="classroom">
                <p>Edificio: {classroom.building}, Zona: {classroom.zone}</p>
                <p>Piso: {classroom.floor}</p>
                <p>Capacidad: {classroom.capacity}</p>
            </div>
        </div>
    );
};

export default Classroom;