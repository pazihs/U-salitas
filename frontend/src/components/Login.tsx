import { useEffect, useState } from "react";
import loginService from "../services/login";
import './form.css';
import { useNavigate } from "react-router-dom";
import { useClassroomStore } from "../classroomStore";
import { useUtilsStore } from "../utilsStore";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { user, setUser, setToast } = useUtilsStore();
    const { setQuery } = useClassroomStore();
    const navigate = useNavigate();

    useEffect(() => {
        const init = async () => {
            const user = await loginService.restoreLogin();
            setUser(user);
        };
        init();
    }, []);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const user = await loginService.login({
                username,
                password,
            });
            setUser(user);
            setUsername("");
            setPassword("");
            setQuery(""); // Limpiar búsqueda al hacer login
            console.log("Logged in user:", user);
            navigate("/", { replace: true });
        } catch (exception) {
            setToast({ message: 'Error al iniciar sesión: credenciales inválidas', severity: 'error' })
        }
    };

    const handleLogout = () => {
        loginService.logout();
        setUser(null);
    };

    return (
        <div style={{ marginTop: 70, alignItems: "center", display: "flex", flexDirection: "column" }}>
            <h1 style={{ textAlign: "center" }}>Iniciar sesión</h1>
            {!user ?
                (<form style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 600 }} onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="username" style={{ textAlign: "center" }}>Nombre de usuario</label>
                        <input
                            className="form-input"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Tu usuario"
                            value={username}
                            onChange={({ target }) => setUsername(target.value)}>
                        </input>

                        <label htmlFor="password" style={{ textAlign: "center" }}>Contraseña</label>
                        <input
                            className="form-input"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu contraseña"
                            value={password} onChange={({ target }) => setPassword(target.value)}>
                        </input>
                    </div>
                    <button
                        className="register-button"
                        name="login-button"
                        type="submit"
                    >
                        Iniciar Sesión
                    </button>
                    <button className="to-login-button" onClick={() => navigate("/register")}>Crear cuenta</button>
                </form>) :
                (<p>{user.username} logged-in <button className="register-button" onClick={handleLogout}>logout</button>
                </p>)}
        </div>
    );
};

export default Login;