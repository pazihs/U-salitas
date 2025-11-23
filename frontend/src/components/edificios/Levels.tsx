import layers_icon from "../../assets/layers.png";

interface LevelsProps {
    layers: number;
    level: number;
    setLevel: (level: number) => void;
}

const Levels = ({ layers, level, setLevel }: LevelsProps) => {
    const changeLevel = (direction: number) => {
        const newLevel = level + direction;
        if (newLevel < 0) setLevel(0);
        else if (newLevel > layers - 1) setLevel(layers - 1);
        else setLevel(newLevel);
    };

    return (
        <div className="layerContainer">
            {level > 0 ? (
                <button data-testid="up" className="up" onClick={() => changeLevel(-1)}></button>) :
                (<button data-testid="up" className="up" disabled={true}></button>)}
            <img src={layers_icon} />
            {level < layers - 1 ? (
                <button data-testid="down" className="down" onClick={() => changeLevel(+1)}></button>) :
                (<button data-testid="down" className="down" disabled={true}></button>)}
        </div>
    );
};

export default Levels;