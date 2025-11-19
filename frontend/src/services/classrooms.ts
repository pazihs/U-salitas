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

export default {
    getAll,
    getClassroom,
    create,
    update,
};