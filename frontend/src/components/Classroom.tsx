import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { ClassroomData } from "../types/classrooms";
import classrooms from "../services/classrooms";
import login from "../services/login";
import { Button } from "@mui/material";
import { ThumbDown, ThumbDownOffAlt, ThumbUp, ThumbUpOffAlt } from "@mui/icons-material";
import { useClassroomStore } from "../classroomStore";
import uhardcito from "../assets/uhardcito.png";


const Classroom = () => {
    const { id } = useParams();
    const [liked, setLiked] = useState<boolean>(false);
    const [disliked, setDisliked] = useState<boolean>(false);
    const [classroom, setClassroom] = useState<ClassroomData | null>(null);
    const { user, setUser, setToast } = useClassroomStore();

    useEffect(() => {
        const init = async () => {
            if (id) {
                classrooms.getClassroom(id)
                    .then(classroom => setClassroom(classroom));
                setUser(await login.restoreLogin());
                if (user && classroom) {
                    setLiked(classroom?.likes.includes(user.id));
                    setDisliked(classroom?.dislikes.includes(user.id));
                }
            }
        };
        init();
    }, [id]);

    const handleLike = async () => {
        if (classroom && user) {
            if (!disliked) {
                if (liked) {
                    setClassroom({ ...classroom, likes: classroom.likes.filter(id => id !== user.id) });
                    await classrooms.removeLike(classroom._id, user.id);
                    setLiked(false);
                } else {
                    setClassroom({ ...classroom, likes: classroom.likes.concat(user.id) });
                    await classrooms.addLike(classroom._id, user.id);
                    setLiked(true);
                }
            } else {
                setToast({ message: 'Ya diste dislike', severity: 'error' });
            }
        }
        else {
            setToast({ message: `Inicia sesión para dar like`, severity: 'error' })
        }
    };

    const handleDislike = async () => {
        if (classroom && user) {
            if (!liked) {
                if (disliked) {
                    setClassroom({ ...classroom, dislikes: classroom.dislikes.filter(id => id !== user.id) });
                    await classrooms.removeDislike(classroom._id, user.id);
                    setDisliked(false);
                } else {
                    setClassroom({ ...classroom, dislikes: classroom.dislikes.concat(user.id) });
                    await classrooms.addDislike(classroom._id, user.id);
                    setDisliked(true);
                }
            } else {
                setToast({ message: 'Ya diste like', severity: 'error' });
            }
        }
        else {
            setToast({ message: `Inicia sesión para dar dislike`, severity: 'error' })
        }
    };


    if (id == "soon") return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px"}}>
            <h1 style={{alignSelf: "flex-end"}}>¡Ups! Esta página aún no está terminada</h1>
            <img src={uhardcito} style={{ width: "300px", height: "auto", alignSelf: "flex-start"}}/>
        </div>
    )
    if (!id || !classroom) return null;
    return (
        <div style={{ marginTop: "30px", padding: "20px" }}>
            <h2 className="search-title">Sala {classroom.name}</h2>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src={classroom.inside_image} width="200" alt={`Interior de ${classroom.name}`} style={{ borderRadius: "8px" }} />
                            <p style={{ marginTop: "8px", fontWeight: "500" }}>Vista interior</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src={classroom.outside_image} width="200" alt={`Exterior de ${classroom.name}`} style={{ borderRadius: "8px" }} />
                            <p style={{ marginTop: "8px", fontWeight: "500" }}>Vista exterior</p>
                        </div>
                    </div>
                </div>
                <div className="classroom">
                    <p>Edificio: {classroom.building}, Zona: {classroom.zone}</p>
                    <p>Piso: {classroom.floor}</p>
                    <p>Capacidad: {classroom.capacity}</p>
                </div>
                <div className="review">
                    <h3>Reseñas</h3>
                    <p>
                        {classroom.likes.length}
                        <Button onClick={handleLike}>{liked ? <ThumbUp /> : <ThumbUpOffAlt />}</Button>
                        <Button onClick={handleDislike}>{disliked ? <ThumbDown /> : <ThumbDownOffAlt />}</Button>
                        {classroom.dislikes.length}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Classroom;