import { useState, type ReactElement } from "react";
import Levels from "../Levels";
import PonientePiso3 from "./PonientePiso3";
import PonientePiso2 from "./PonientePiso2";

const Poniente = () => {
    const layers: Array<ReactElement> = [<PonientePiso3/>, <PonientePiso2/>];
    const [level, setLevel] = useState(layers.length - 1);

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