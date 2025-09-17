import type { ClassroomData } from "../types/classrooms";
import Search from "./Search";

type NavBarProps = {
    setClassrooms: React.Dispatch<React.SetStateAction<ClassroomData[]>>;
};

const NavBar = ({ setClassrooms }: NavBarProps) => {
    return (
        <nav className="navbar">
            <Search setClassrooms={setClassrooms} />
            <button style={{ marginRight: "30px" }}>Iniciar sesión</button>
        </nav>
    );
};

export default NavBar;