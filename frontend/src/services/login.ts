import axios from "axios";
import axiosSecure from "../utils/axiosSecure";

const baseUrl = "/api/login";

type Credentials = {
    username: string;
    password: string;
};

const login = async (credentials: Credentials) => {
    const response = await axios.post(baseUrl, credentials, { withCredentials: true });

    const csrfToken = response.headers["x-csrf-token"];

    if (csrfToken) {
        localStorage.setItem("csrfToken", csrfToken);
    }

    return response.data;
};

const restoreLogin = async () => {
    try {
        const response = await axiosSecure.get(`${baseUrl}/me`);
        return response.data; // Usuario logueado
    } catch {
        return null; // No logueado
    }
};

const logout = async () => {
    await axios.post(`${baseUrl}/logout`);
    localStorage.removeItem("csrfToken");
};

export default { login, restoreLogin, logout };