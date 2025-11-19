import { Routes, Route } from 'react-router-dom';
import type { ClassroomData } from '../types/classrooms';
import PreviewClassroom from './PreviewClassroom';
import Campus850 from './map/campus850';
import Campus851 from './map/campus851';
import Home from './home';
import Layers from './map/Layers';
import Inferiores from './map/inferiores';
import Poniente from './poniente/poniente';
import Norte from './norte/norte';
import Login from './Login';
import Register from './Register';
import Classroom from './Classroom';
import './AppRouter.css';

interface AppRouterProps {
  query: string;
  classrooms: ClassroomData[];
}

const AppRouter = ({ query, classrooms }: AppRouterProps) => {
  return (
    <Routes>
      <Route path="/" element={
        query.length > 0 ? (
          <div className="search-results-container">
            <div className="search-title">
              <h2>Resultados de búsqueda</h2>
            </div>
            <div className="classrooms-list">
              <div className="card-grid">
                {classrooms.length > 0 ? classrooms.map((item) => (
                  <div key={item.id}>
                    <PreviewClassroom classroom={item} />
                  </div>
                )) : (
                  <h3>No se encontraron resultados</h3>
                )}
              </div>
            </div>
          </div>
        ) : (
          <Home />
        )
      } />
      <Route path="/850" element={<Campus850 />} />
      <Route path="/851" element={<Campus851 />} />
      <Route path="/851/pisos-inferiores" element={<Inferiores />} />
      <Route path="/851/poniente" element={<Poniente />} />
      <Route path="/851/norte" element={<Norte />} />
      <Route path="/:zone" element={<Layers />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/classrooms/:id" element={<Classroom />} />
    </Routes>
  );
}

export default AppRouter;
