import { useNavigate, useLocation } from "react-router-dom";
import type { ClassroomData } from "../types/classrooms";
import Search from "./Search";
import { useEffect, useState } from "react";
import type { UserData } from "../types/users";
import loginService from "../services/login";


type NavBarProps = {
    setClassrooms: React.Dispatch<React.SetStateAction<ClassroomData[]>>;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const NavBar = ({ setClassrooms, setQuery }: NavBarProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState<UserData | null>(null);
    
    useEffect(() => {
        const init = async () => {
            const user = await loginService.restoreLogin();
            setUser(user);
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
            <Search setClassrooms={setClassrooms} setQ={setQuery} />
            {isLoggedIn ? (
                <button style={{ marginRight: "15px" }} onClick={() => {
                    loginService.logout();
                    setUser(null);
                    navigate("/", { replace: true });
                    }}>
                    Cerrar sesión
                </button>
            ) : (
                <button style={{ marginRight: "15px" }} onClick={() => navigate("/login")}>
                    Entrar
                </button>
            )}
            <button style={{ marginRight: "30px" }} onClick={() => navigate("/")}>Inicio</button>
        </nav>
    );
};

export default NavBar;