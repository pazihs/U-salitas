import { useState } from "react";
import usersService from "../services/users";
import './form.css';
import { useNavigate } from "react-router-dom";
import { useUtilsStore } from "../utilsStore";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();
    const { setToast } = useUtilsStore();

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await usersService.register({
                username,
                email,
                password,
            });
            setToast({ message: "Usuario creado correctamente", severity: "success" })
            setUsername("");
            setPassword("");
            setEmail("");
            navigate("/login");
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
                    <label htmlFor="username" style={{ textAlign: "center" }}>Nombre de usuario</label>
                    <input
                        className="form-input"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Tu usuario"
                        value={username}
                        required
                        onChange={({ target }) => setUsername(target.value)}>
                    </input>

                    <label htmlFor="email" style={{ textAlign: "center" }}>Correo electrónico</label>
                    <input
                        className="form-input"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Tu email"
                        required
                        value={email} onChange={({ target }) => setEmail(target.value)}>
                    </input>

                    <label htmlFor="password" style={{ textAlign: "center" }}>Contraseña</label>
                    <input
                        className="form-input"
                        type="password"
                        style={{ borderRadius: 10, borderColor: "rgba(69, 25, 25, 0.87)" }}
                        id="password"
                        name="password"
                        placeholder="Tu contraseña"
                        required
                        value={password} onChange={({ target }) => setPassword(target.value)}>
                    </input>
                </div>

                <button data-testid="register" className="register-button" name="register-button" type="submit">Registrar</button>
                <button className="to-login-button" type="button" onClick={() => navigate("/login")}>Ya tengo cuenta</button>
            </form>
        </div>
    );
};

export default Register;