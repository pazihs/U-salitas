import './Map.css';
import Campus850 from './campus850';
import Campus851 from './campus851';
import Home from '../home'
import Layers from './Layers';
import Inferiores from './inferiores';
import Login from '../Login';
import Register from '../Register';

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
      <Route path="/:zone" element={<Layers />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  )
};

export default Map;