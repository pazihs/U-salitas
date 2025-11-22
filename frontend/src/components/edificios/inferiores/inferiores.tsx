import { useState, type ReactElement } from "react";
import Levels from "../Levels";
import Menos1 from "./menos1"
import Menos2 from "./menos2"
import Menos3 from "./menos3"

const Inferiores = () => {
    const layers: Array<ReactElement> = [<Menos1/>, <Menos2/>, <Menos3/>];
    const [level, setLevel] = useState(0);

    return (
        <div>
            <div className="mainContainer">
                {layers[level]}
                <Levels layers={layers.length} level={level} setLevel={setLevel} />
            </div>
        </div>
    );
};

export default Inferiores;