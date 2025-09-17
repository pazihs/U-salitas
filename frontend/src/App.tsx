import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import type { ClassroomData } from './types/classrooms';
import Classroom from './components/Classroom';

function App() {
  const [classrooms, setClassrooms] = useState<ClassroomData[]>([]);

  return (
    <div>
      <NavBar setClassrooms={setClassrooms} />
      <div className="card">
        <ul className="card-grid">
          {classrooms.length > 0 ? classrooms.map((item) => (
            <li key={item.id}>
              <Classroom classroom={item} />
            </li>
          )) : (
            <h3>No se encontraron resultados</h3>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App