import { useState } from "react";
import usersService from "../services/users";
import './Form.css';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await usersService.register({
                username,
                email,
                password,
            });
            setUsername("");
            setPassword("");
            setEmail("");
        } catch (exception) {
            setErrorMessage("Falta rellenar algún campo o el usuario ya existe");
            setTimeout(() => {
                setErrorMessage(null);
            }, 5000);
        }
    };

    return (
        <div style={{ marginTop: 70, alignItems: "center", display: "flex", flexDirection: "column" }}>
            <h1 style={{ textAlign: "center" }}>Registrar nuevo usuario</h1>
            <p style={{ color: "red" }}>{errorMessage}</p>
            <form style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 600 }} onSubmit={handleRegister}>
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

                    <label>Correo electrónico</label>
                    <input
                        className="form-input"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Your email.."
                        value={email} onChange={({ target }) => setEmail(target.value)}>
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

                <button className="register-button" type="submit">Registrar</button>
                <button className="to-login-button" onClick={() => navigate("/login")}>Ya tengo cuenta</button>
            </form>
        </div>
    );
};

export default Register;