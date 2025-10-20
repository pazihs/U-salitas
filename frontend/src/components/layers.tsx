import { useParams } from "react-router-dom";
const Layers = () => {
    const {zone} = useParams();

    return(
        <div className="mainContainer">
            <img className="building" src={`/${zone}`}></img>
        </div>
    );
}

export default Layers;