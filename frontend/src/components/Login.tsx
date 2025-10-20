import { useEffect, useState } from "react";
import loginService from "../services/login";
import type { UserData } from "../types/users";
import './Form.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState<UserData | null>(null);

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
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
            console.log("Logged in user:", user);
            window.dispatchEvent(new Event('userChanged'));
            navigate("/", { replace: true });
        } catch (exception) {
            setErrorMessage("Wrong credentials");
            setTimeout(() => {
                setErrorMessage(null);
            }, 5000);
        }
    };

    const handleLogout = () => {
        loginService.logout();
        setUser(null);
    };

    return (
        <div style={{ marginTop: 70, alignItems: "center", display: "flex", flexDirection: "column" }}>
            <h1 style={{ textAlign: "center" }}>Iniciar sesión</h1>
            <p style={{ color: "red" }}>{errorMessage}</p>
            {!user ?
                (<form style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 600 }} onSubmit={handleLogin}>
                    <div>
                        <label>Nombre de usuario</label>
                        <input
                            className="form-input"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Your username.."
                            value={username}
                            onChange={({ target }) => setUsername(target.value)}>
                        </input>

                        <label>Contraseña</label>
                        <input
                            className="form-input"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your password.."
                            value={password} onChange={({ target }) => setPassword(target.value)}>
                        </input>
                    </div>
                    <button
                        className="register-button"
                        type="submit"
                        onClick={() => navigate("/", { replace: true })}
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