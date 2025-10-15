import { useState } from "react";
import loginService from "../services/login";
import type { UserData } from "../types/users";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState<UserData | null>(null);

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // useEffect(() => {
    //     const init = async () => {
    //         const user = await loginService.restoreLogin();
    //         setUser(user);
    //     };
    //     init();
    // }, []);

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
        <div style={{ margin: 20 }}>
            <h1>Iniciar sesión</h1>
            <p style={{ color: "red" }}>{errorMessage}</p>
            {!user ?
                (<form onSubmit={handleLogin}>
                    <div>
                        username
                        <TextField type="text" value={username} name="Nombre de usuario"
                            onChange={({ target }) => setUsername(target.value)}
                        />
                    </div>
                    <div>
                        password
                        <TextField type="password" value={password} name="Contraseña"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                    </div>
                    <Button type="submit">login</Button>
                </form>) :
                (<p>{user.username} logged-in <button onClick={handleLogout}>logout</button>
                </p>)}
        </div>
    );
};

export default Login;