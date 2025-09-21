import fcfm from '../assets/fcfm.jpg'
import '../App.css'
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    const routeChange = (path: string) => {
        navigate(path);
    }
    return (
        <div>
            <h1 className="center">Mapa Beauchef</h1>
            <div className='mainContainer'>
                <button className='campusButton' onClick={() => routeChange("/850")}>850</button>
                <img src={fcfm} className='fcfm'></img>
                <button className='campusButton' onClick={() => routeChange("/851")}>851</button>
            </div>
        </div>
    );
};

export default Home;