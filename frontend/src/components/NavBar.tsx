import { useNavigate } from "react-router-dom";
import Search from "./Search";
import { useEffect } from "react";
import loginService from "../services/login";
import { useClassroomStore } from "../classroomStore";
import { useUtilsStore } from "../utilsStore";


const NavBar = () => {
    const navigate = useNavigate();

    const { setQuery } = useClassroomStore();
    const { user, setUser } = useUtilsStore();

    useEffect(() => {
        const init = async () => {
            const user = await loginService.restoreLogin();
            setUser(user);
            setQuery('');
        };
        init();
    }, []);

    console.log("User in NavBar:", user);
    return (
        <nav className="navbar">
            <button className="usalitas-button" onClick={() => navigate("/")} />
            <Search />
            {user ? (
                <button style={{ marginRight: "30px" }} onClick={async () => {
                    await loginService.logout();
                    setUser(null);
                    navigate("/", { replace: true });
                }}>
                    Cerrar sesión
                </button>
            ) : (
                <button style={{ marginRight: "30px" }} onClick={() => navigate("/login")}>
                    Entrar
                </button>
            )}
        </nav>
    );
};

export default NavBar;