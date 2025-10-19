import { useState, type ReactElement } from "react";
import Levels from "../levels";
import NortePiso3 from "./NortePiso3";

const Norte = () => {
    const layers: Array<ReactElement> = [<NortePiso3/>];
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

export default Norte;