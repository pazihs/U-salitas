import { useClassroomStore } from "../classroomStore";
import PreviewClassroom from "./PreviewClassroom";


const SearchResult = () => {
    const { classrooms } = useClassroomStore();
    return (
        <div className="search-results-container">
            <div className="search-title">
                <h2>Resultados de búsqueda</h2>
            </div>
            <div className="classrooms-list">
                <div className="card-grid">
                    {classrooms.length > 0 ? classrooms.map((item) => (
                        <div key={item._id}>
                            <PreviewClassroom classroom={item} />
                        </div>
                    )) : (
                        <h3>No se encontraron resultados</h3>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchResult;