import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import type { ClassroomData } from './types/classrooms';
import Classroom from './components/Classroom';
import Map from './components/map/Map';

const App = () => {
  const [query, setQuery] = useState<string>('');
  const [classrooms, setClassrooms] = useState<ClassroomData[]>([]);

  return (
    <div>
      <NavBar setClassrooms={setClassrooms} setQuery={setQuery} />
      {query.length > 0 ? (
        <div className="search-results-container">
          <div className="search-title">
            <h2>Resultados de búsqueda</h2>
          </div>
          <div className="classrooms-list">
            <div className="card-grid">
              {classrooms.length > 0 ? classrooms.map((item) => (
                <div key={item.id}>
                  <Classroom classroom={item} />
                </div>
              )) : (
                <h3>No se encontraron resultados</h3>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Map />
      )}
    </div>
  );
}

export default App;