import type { ClassroomData } from "../types/classrooms";
import Search from "./Search";


const NavBar = ({ setClassrooms }: { setClassrooms: React.Dispatch<React.SetStateAction<ClassroomData[]>> }) => {
    return (
        <nav className="navbar">
            {/* <h1>Gestor de Salas</h1> */}
            <Search setClassrooms={setClassrooms} />
            <button style={{ marginRight: "30px" }}>Iniciar sesión</button>
        </nav>
    );
};

export default NavBar;