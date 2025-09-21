
import { useEffect, useState } from "react";
import type { ClassroomData } from "../types/classrooms";
import { search } from "../services/search";
import classroomService from "../services/classrooms";

type SearchProps = {
    setClassrooms: React.Dispatch<React.SetStateAction<ClassroomData[]>>;
    setQ: React.Dispatch<React.SetStateAction<string>>;
};

function Search({ setClassrooms, setQ }: SearchProps) {
    const [error, setError] = useState<Error | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<ClassroomData[]>([]);
    const [query, setQuery] = useState("");

    // Base de datos temporal (ahora mismo es local)
    const c: Omit<ClassroomData, 'id' | 'image'>[] = [
        { "name": "BO1", "floor": -1, "building": "850", "zone": "oriente", "capacity": 100, "likes": 5, "dislikes": 8 },
        { "name": "BO2", "floor": -1, "building": "850", "zone": "oriente", "capacity": 100, "likes": 10, "dislikes": 2 },
        { "name": "BO3", "floor": -1, "building": "850", "zone": "oriente", "capacity": 100, "likes": 7, "dislikes": 3 }
    ];

    // Campos a buscar
    const [searchParam] = useState(["name", "zone", "capacity", "building"]);

    useEffect(() => {
        c.map((classroom) => {
            classroomService.create(classroom);
        })
        classroomService.getAll().then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
                console.log("items");
                console.log(result);
            },
            (error) => {
                console.log("a")
                setIsLoaded(true);
                setError(error);
            }
        );
    }, [])

    if (error instanceof Error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Cargando...</div>;
    } else {
        return (
            <div className="wrapper" style={{ marginLeft: "auto", marginRight: "30px" }}>
                <div className="search-wrapper">
                    <label htmlFor="search-form">
                        <span className="sr-only">Busca tu sala aquí </span>
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="Sala, edificio, zona..."
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                                setQ(e.target.value);
                                setClassrooms(search(items, e.target.value, searchParam));
                            }}
                        />
                    </label>
                </div>
            </div>
        );
    }
}

export default Search;