import axios from "axios";

const axiosSecure = axios.create({
    withCredentials: true,
});


axiosSecure.interceptors.request.use((config) => {
    const csrfToken = localStorage.getItem("csrfToken");
    if (csrfToken) {
        config.headers["x-csrf-token"] = csrfToken;
    }
    return config;
});

export default axiosSecure;