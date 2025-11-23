import { useNavigate, useLocation } from "react-router-dom";
import Search from "./Search";
import { useEffect } from "react";
import loginService from "../services/login";
import { useClassroomStore } from "../classroomStore";


const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { user, setUser, setQuery } = useClassroomStore();

    useEffect(() => {
        const init = async () => {
            const user = await loginService.restoreLogin();
            setUser(user);
            setQuery('');
        };
        init();
        const onUserChanged = async () => {
            const u = await loginService.restoreLogin();
            setUser(u);
        };
        window.addEventListener('userChanged', onUserChanged);
        return () => window.removeEventListener('userChanged', onUserChanged);
    }, [location]);

    const isLoggedIn = user !== null;
    console.log("User in NavBar:", user);
    return (
        <nav className="navbar">
            <button className="usalitas-button" onClick={() => navigate("/")}/>
            <Search />
            {isLoggedIn ? (
                <button style={{ marginRight: "30px" }} onClick={async () => {
                    await loginService.logout();
                    setUser(null);
                    window.dispatchEvent(new Event('userChanged'));
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