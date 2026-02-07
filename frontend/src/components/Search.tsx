
import { useEffect, useState } from "react";
import type { ClassroomData } from "../types/classrooms";
import { TextField, InputAdornment } from "@mui/material";
import { search } from "../services/search";
import classrooms from "../services/classrooms";
import { useClassroomStore } from "../classroomStore";
import { useLocation } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    const [error, setError] = useState<Error | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<ClassroomData[]>([]);
    const [q, setQ] = useState("");
    const location = useLocation();

    const { setClassrooms, setQuery } = useClassroomStore();

    // Campos a buscar
    const [searchParam] = useState(["name", "zone", "capacity", "building"]);

    useEffect(() => {
        classrooms.getAll().then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }, []);

    useEffect(() => {
        setQ('');
    }, [location])

    if (error instanceof Error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Cargando...</div>;
    } else {
        return (
            <div className="wrapper" style={{ marginLeft: "auto", marginRight: "30px" }}>
                <div className="search-wrapper">
                    <div className="search-row">

                        <TextField
                            placeholder="Busca una sala, edificio, zona..."
                            variant="outlined"
                            size="small"
                            value={q}
                            onChange={(e) => {
                                setQ(e.target.value);
                                setQuery(e.target.value);
                                setClassrooms(search(items, e.target.value, searchParam));
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon sx={{ color: "#5d3537"}}/>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                width: "300px",
                                bgcolor: "#ffffea",
                                borderRadius: "8px",
                                borderColor: "#5d3537" }}
                        />

                    </div>
                </div>
            </div>
        );
    }
}

export default Search;