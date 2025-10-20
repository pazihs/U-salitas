import './Map.css'
import Campus850 from './map/campus850';
import Campus851 from './map/campus851';
import Home from './home';
import Layers from './map/Layers';
import Inferiores from './map/inferiores';
import Poniente from './poniente/poniente';
import Norte from './norte/norte';
import Login from './Login';
import Register from './Register';

import {
  Route,
  Routes,
} from "react-router-dom";

const Map = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/850" element={<Campus850 />}></Route>
        <Route path="/851" element={<Campus851 />}></Route>
        <Route path="/851/pisos-inferiores" element={<Inferiores />}></Route>
        <Route path="/851/poniente" element={<Poniente />}></Route>
        <Route path="/851/norte" element={<Norte />}></Route>
        <Route path="/:zone" element={<Layers />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
  )
}

export default Map