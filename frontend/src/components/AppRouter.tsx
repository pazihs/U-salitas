import { Routes, Route } from 'react-router-dom';
import Campus850 from './edificios/map/campus850';
import Campus851 from './edificios/map/campus851';
import Home from './home';
import Inferiores from './edificios/inferiores/inferiores';
import Poniente from './edificios/poniente/poniente';
import Norte from './edificios/norte/norte';
import Login from './Login';
import Register from './Register';
import Classroom from './Classroom';
import './AppRouter.css';


const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/850" element={<Campus850 />} />
    <Route path="/851" element={<Campus851 />} />
    <Route path="/851/pisos-inferiores" element={<Inferiores />} />
    <Route path="/851/poniente" element={<Poniente />} />
    <Route path="/851/norte" element={<Norte />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/classrooms/:id" element={<Classroom />} />
  </Routes>
);

export default AppRouter;
