import { useState } from "react";
import layers_icon from "../../assets/layers.png";

const Inferiores = () => {
    const layers: Array<string> = ["851-3", "851-2", "851-1"];
    const [level, setLevel] = useState<number>(layers.length - 1);

    const changeLevel = (direction: number) => {
        const newLevel = level + direction;
        if (newLevel < 0) setLevel(0);
        else if (newLevel > layers.length - 1) setLevel(layers.length - 1)
        else setLevel(newLevel);
    }
    /* 
    const showButtons = () => {
        if (level == layers.length-1) return <button onClick={() => changeLevel(-1)}>Piso inferior</button>
        else if (level == 0) return <button onClick={() => changeLevel(+1)}>Piso superior</button>;
        else {
            return ( 
            <div>
                <button onClick={() => changeLevel(+1)}>Piso superior</button><br></br>
                <img src={layers_icon}></img><br></br>
                <button onClick={() => changeLevel(-1)}>Piso inferior</button>
            </div>
            );
        }
    */

    return (
        <div>
            <h1 className="center">851 - Pisos inferiores</h1>
            <div className="mainContainer">
                <img className="building" src={`/inferiores/${layers[level]}.jpg`}></img>
                <div className="layerContainer">
                    {level < layers.length - 1 ? <button className="up" onClick={() => changeLevel(+1)}></button> :
                        <button className="up" disabled={true} onClick={() => changeLevel(+1)}></button>}
                    <img src={layers_icon}></img>
                    {level > 0 ? <button className="down" onClick={() => changeLevel(-1)}></button> :
                        <button className="down" disabled={true} onClick={() => changeLevel(-1)}></button>}
                </div>
            </div>
        </div>
    );
};

export default Inferiores;