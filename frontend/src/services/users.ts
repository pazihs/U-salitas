import axios from "axios";
import axiosSecure from "../utils/axiosSecure";

type Credentials = {
    username: string;
    email: string;
    password: string;
};

const getAllUsers = async () => {
    const response = await axios.get("/api/users");
    return response.data;
};

const getUser = async (id: string) => {
    const response = await axiosSecure.get(`/api/users/${id}`);
    return response.data;
};

const register = async (credentials: Credentials) => {
    const response = await axios.post("/api/users", credentials);
    return response.data;
};

export default { getAllUsers, getUser, register };