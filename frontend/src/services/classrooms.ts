import axios from "axios";
import type { ClassroomData } from "../types/classrooms";

const baseUrl = process.env.NODE_ENV === "development"
    ? "/api/classrooms"
    : "http://localhost:3001/api/classrooms";

const getAll = async () => {
    const request = await axios.get(baseUrl);
    return request.data;
};

const getClassroom = async (id: string) => {
    const request = await axios.get<ClassroomData>(`${baseUrl}/${id}`)
    return request.data;
};

const create = async (newObject: ClassroomData) => {
    const request = await axios.post(baseUrl, newObject);
    return request.data;
};

const update = async (id: string, newObject: ClassroomData) => {
    const request = await axios
        .put(`${baseUrl}/${id}`, newObject);
    return request.data;
};

const addLike = async (classroomId: string, userId: string) => {
    const newObject = await getClassroom(classroomId);
    update(classroomId, { ...newObject, likes: newObject.likes.concat(userId) });
};

const addDislike = async (classroomId: string, userId: string) => {
    const newObject = await getClassroom(classroomId);
    update(classroomId, { ...newObject, likes: newObject.dislikes.concat(userId) });
};

const removeLike = async (classroomId: string, userId: string) => {
    const newObject = await getClassroom(classroomId);
    const index = newObject.likes.indexOf(userId);
    update(classroomId, { ...newObject, likes: newObject.likes.splice(index, 1) });
};

const removeDislike = async (classroomId: string, userId: string) => {
    const newObject = await getClassroom(classroomId);
    const index = newObject.likes.indexOf(userId);
    update(classroomId, { ...newObject, likes: newObject.dislikes.splice(index, 1) });
};

export default {
    getAll,
    getClassroom,
    create,
    update,
    addLike,
    addDislike,
    removeLike,
    removeDislike
};