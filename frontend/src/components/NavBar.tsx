import type { ClassroomData } from "../types/classrooms";
import Search from "./Search";

type NavBarProps = {
    setClassrooms: React.Dispatch<React.SetStateAction<ClassroomData[]>>;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const NavBar = ({ setClassrooms, setQuery }: NavBarProps) => {
    return (
        <nav className="navbar">
            <Search setClassrooms={setClassrooms} setQ={setQuery} />
            <button style={{ marginRight: "30px" }}>Iniciar sesión</button>
        </nav>
    );
};

export default NavBar;