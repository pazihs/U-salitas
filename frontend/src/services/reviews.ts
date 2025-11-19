import axios from "axios";
import type { ReviewData } from "../types/reviews";
import axiosSecure from "../utils/axiosSecure";

const baseUrl = process.env.NODE_ENV === "development"
    ? "/api/reviews"
    : "http://localhost:3001/api/reviews";

const getAll = () => {
    //   const request = axios.get(baseUrl);
    //   const nonExisting = {
    //     id: 10000,
    //     content: "This review is not saved to server",
    //     userId: "unknown",
    //     classroomId: "unknown",
    //   };

    //   return request.then((response) => response.data.concat(nonExisting));
    return axios.get(baseUrl).then((request) => request.data);
};

const create = (newObject: Omit<ReviewData, "id">) => {
    return axiosSecure.post(baseUrl, newObject).then((request) => request.data);
};

const update = (id: string, newObject: ReviewData) => {
    return axiosSecure
        .put(`${baseUrl}/${id}`, newObject)
        .then((request) => request.data);
};

export default {
    getAll,
    create,
    update,
};