import { useState } from "react";
import Levels from "../levels";

const Inferiores = () => {
    const layers: Array<string> = ["851-1", "851-2", "851-3"];
    const [level, setLevel] = useState(0);

    return (
        <div>
            <h1 className="center">851 - Pisos inferiores</h1>
            <div className="mainContainer">
                <img className="building" src={`/inferiores/${layers[level]}.jpg`} />
                <Levels layers={layers.length} level={level} setLevel={setLevel} />
            </div>
        </div>
    );
};

export default Inferiores;