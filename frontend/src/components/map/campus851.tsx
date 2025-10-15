import image851 from '../../assets/851.jpg';
import { useNavigate } from "react-router-dom";

const Campus851 = () => {
    const navigate = useNavigate();
    const routeChange = (path: string) => {
        navigate(path);
    }
    return (
        <div>
            <h1 className="center">{851}</h1>
            <div className="mainContainer">
                <img className="building" src={image851}></img>
                <div>
                    <button /*onClick={() => routeChange("poniente")}*/>Poniente</button>
                    <button /*onClick={() => routeChange("oriente")}*/>Oriente</button>
                    <button /*onClick={() => routeChange("norte")}*/>Norte</button>
                    <button onClick={() => routeChange("pisos-inferiores")}>Pisos inferiores</button>
                </div>
            </div>
        </div>
    );
};
export default Campus851;