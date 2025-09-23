import { useNavigate } from "react-router-dom";
import type { ClassroomData } from "../types/classrooms";
import Search from "./Search";

type NavBarProps = {
    setClassrooms: React.Dispatch<React.SetStateAction<ClassroomData[]>>;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const NavBar = ({ setClassrooms, setQuery }: NavBarProps) => {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <Search setClassrooms={setClassrooms} setQ={setQuery} />
            <button style={{ marginRight: "15px" }}>Iniciar sesión</button>
            <button style={{ marginRight: "30px" }} onClick={() => navigate("/")}>Inicio</button>
        </nav>
    );
};

export default NavBar;