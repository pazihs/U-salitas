import axios from "axios";
import axiosSecure from "../utils/axiosSecure";

const baseUrl = process.env.NODE_ENV === "development"
    ? "/api/users"
    : "http://localhost:3001/api/users";

type Credentials = {
    username: string;
    email: string;
    password: string;
};

const getAllUsers = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

const getUser = async (id: string) => {
    const response = await axiosSecure.get(`${baseUrl}/${id}`);
    return response.data;
};

const register = async (credentials: Credentials) => {
    const response = await axios.post(baseUrl, credentials);
    return response.data;
};

export default { getAllUsers, getUser, register };