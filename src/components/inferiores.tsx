import { useState } from "react";

const Inferiores = () => {
    const layers: Array<string> = ["851-3", "851-2", "851-1"];
    const [level, setLevel] = useState<number>(layers.length-1);
    const changeLevel = (direction: number) => {
        const newLevel = level+direction;
        if (newLevel < 0) setLevel(0);
        else if (newLevel > layers.length-1) setLevel(layers.length-1) 
        else setLevel(newLevel);
    }

    const showButtons = () => {
        if (level == layers.length-1) return <button onClick={() => changeLevel(-1)}>Piso inferior</button>
        else if (level == 0) return <button onClick={() => changeLevel(+1)}>Piso superior</button>;
        else {
            return ( 
            <div>
                <button onClick={() => changeLevel(+1)}>Piso superior</button><br></br>
                <button onClick={() => changeLevel(-1)}>Piso inferior</button>
            </div>
            );
        }

    }
    return(
        <div className="mainContainer">
            <div className="container">
                <img className="building" src={`/inferiores/${layers[level]}.jpg`}></img>
                {showButtons()}
            </div>
        </div>
    );
}

export default Inferiores;