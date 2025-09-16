import './App.css'
import Campus850 from './components/campus850';
import Campus851 from './components/campus851';
import Home from './components/home'

import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/850" element={<Campus850 />}></Route>
        <Route path="/851" element={<Campus851/>}></Route>
      </Routes>
    </Router>
  )
}

export default App