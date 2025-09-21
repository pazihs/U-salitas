import axios from "axios";
import type { ClassroomData } from "../types/classrooms";
const baseUrl = "/api/classrooms";

const getAll = async () => {
    const request = await axios.get(baseUrl);
    console.log("request", request);

    return request.data;
};

const create = async (newObject: Omit<ClassroomData, "id" | "image">) => {
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
    create,
    update,
};