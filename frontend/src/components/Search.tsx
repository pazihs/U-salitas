
import { useEffect, useState } from "react";
import type { ClassroomData } from "../types/classrooms";
import { search } from "../services/search";

type SearchProps = {
    setClassrooms: React.Dispatch<React.SetStateAction<ClassroomData[]>>;
};

function Search({ setClassrooms }: SearchProps) {
    // const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<ClassroomData[]>([]);
    const [query, setQuery] = useState("");

    // Campos a buscar
    const [searchParam] = useState(["name", "zone", "capacity", "building"]);

    useEffect(() => {
        // Temporal
        setItems([
            { id: '1', name: 'B01', floor: -1, building: '851', zone: 'oriente', capacity: 100, likes: 10, dislikes: 2 },
            { id: '2', name: 'B02', floor: -1, building: '851', zone: 'oriente', capacity: 80, likes: 5, dislikes: 1 },
            { id: '3', name: 'QO', floor: 2, building: '850', zone: 'química', capacity: 80, likes: 3, dislikes: 10 },
        ])
        setIsLoaded(true);
        // fetch("https://api.example.com/items")
        //   .then(res => res.json())
        //   .then(
        //     (result) => {
        //       setIsLoaded(true);
        //       setItems(result);
        //     },
        //     //Nota: es importante manejar los errores aquí
        //     //en vez de un bloque catch() para evitar tragarnos
        //     // excepciones de errores en los componentes.
        //     (error) => {
        //       setIsLoaded(true);
        //       setError(error);
        //     }
        //   )
    }, [])

    //   if (error) {
    //     return <div>Error: {error.message}</div>;
    //   } else
    if (!isLoaded) {
        return <div>Loading...</div>;
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