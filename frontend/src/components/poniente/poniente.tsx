import { useState, type ReactElement } from "react";
import Levels from "../levels";
import PonientePiso3 from "./PonientePiso3";

const Poniente = () => {
    const layers: Array<ReactElement> = [<PonientePiso3/>];
    const [level, setLevel] = useState(0);

    return (
        <div>
            <div className="mainContainer">
                {layers[level]}
                <Levels layers={layers.length} level={level} setLevel={setLevel} />
            </div>
        </div>
    );
}

export default Poniente;