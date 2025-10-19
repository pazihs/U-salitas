import { useNavigate } from "react-router-dom";

const PonientePiso3 = () => {
    const navigate = useNavigate();
    const routeChange = (path: string) => navigate(path);

    const svgStyle = {
        width: "100%",
        height: "auto",
        display: "block",
    };

    const shapeBaseStyle = {
        fill: "#98de5d",
        cursor: "pointer",
        transition: "all 0.25s ease",
        transformOrigin: "center",
    };

    const textStyle = {
        fontSize: 35,
        fill: "#ffffff",
        fontFamily: '"DejaVu Sans", sans-serif',
        fontWeight: 400,
        userSelect: "none" as const,
        pointerEvents: "none" as const,
    };

    const handleHover = (e: React.MouseEvent<SVGPathElement>, isHover: boolean) => {
        const shape = e.currentTarget;
        shape.style.fill = isHover ? "#7cd957" : "#98de5d";
        shape.style.transform = isHover ? "scale(1.02)" : "scale(1)";
        shape.style.filter = isHover
            ? "drop-shadow(0 0 10px #7cd957)"
            : "drop-shadow(0 0 0 transparent)";
    };

    return (
    <div>
        <h1 className="center">PISO 3 PONIENTE</h1>

        <div className="mainContainer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1920 1080" width="1920" height="1080"
                preserveAspectRatio="xMidYMid meet"
                style={svgStyle}
            >
                <defs>
                <image
                    width="2416" 
                    height="1109" 
                    id="img1"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAQ4AQMAAADSHVMAAAAAAXNSR0IB2cksfwAAAANQTFRF////p8QbyAAABJhJREFUeJztzwENACAMwDDu3zQuTlJWBducz8zrgG0N6xrWNaxrWNewrmFdw7qGdQ3rGtY1rGtY17CuYV3DuoZ1Desa1jWsa1jXsK5hXcO6hnUN6xrWNaxrWNewrmFdw7qGdQ3rGtY1rLsXPQQ5U8N4bAAAAABJRU5ErkJggg=="
                />
                </defs>

                <use id="Layer 1" href="#img1" x="-224" y="-17"/>

                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 24" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m1879.39 597.18v301.67h-52.13v-301.67z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 23" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m1824.89 661.53v236.94h-172.96v-236.94z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 22" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m1649.56 661.53v236.94h-111.36v-236.94z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 21" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m1535.83 661.53v236.94h-113.73v-236.94z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 20" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m1419.73 661.53v236.94h-112.55v-236.94z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 17" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m1072.61 661.53v236.94h-111.36v-236.94z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 18" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m1188.71 661.53v236.94h-113.73v-236.94z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 19" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m1304.81 661.53v236.94h-113.73v-236.94z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 16" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m958.88 661.53v236.94h-114.92v-236.94z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 15" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m841.59 661.53v236.94h-112.54v-236.94z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 14" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m726.68 661.53v236.94h-113.73v-236.94z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 13" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m610.58 661.53v236.94h-113.73v-236.94z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 12" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m494.48 661.53v236.94h-112.55v-236.94z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 11" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m379.56 661.53v236.94h-113.73v-236.94z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 10" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m263.46 661.53v236.94h-111.36v-236.94z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 8" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m264.65 145v335.27h-228.65v-335.27z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 9" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m149.73 661.53v236.94h-113.73v-236.94z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 7" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m496.85 145v335.27h-229.83v-335.27z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 6" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m727.86 145v425.31h-228.64v-425.31z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 4" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m1421.12 236.22v246.42h-88.09v-246.42z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 5" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m975.46 145v425.31h-245.23v-425.31z"
                    style={shapeBaseStyle}
                />
                <path
                    id="Shape 1" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m1083.83 553.8c-44.2 0-79.93-36.03-79.93-80.6 0-44.57 35.73-80.6 79.93-80.6 44.2 0 79.93 36.03 79.93 80.6 0 44.57-35.73 80.6-79.93 80.6z"
                    style={{...shapeBaseStyle, cursor: "default", fill: "#4153fbff"}}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 2" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m1879.84 184.09v298.55h-225.99v-298.55z"
                    style={shapeBaseStyle}
                />
                <path
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 3" 
                    fill-rule="evenodd" 
                    className="s0" 
                    d="m1651.93 184.09v298.55h-228.65v-298.55z"
                    style={shapeBaseStyle}
                />
                    
                <text id="OF. 310" style={{...textStyle, transform: "matrix(0,-1.185,1.185,0,1604.354,787.384)"}}>
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">3</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">0</tspan>
                </text>
                <text id="OF. 311" style={{...textStyle, transform: "matrix(0,-1.185,1.185,0,1492.993,785.015)"}}>
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">3</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1"></tspan>
                </text>
                <text id="OF. 312" style={{...textStyle, transform: "matrix(0,-1.185,1.185,0,1378.077,785.015)"}}>
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">3</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1"></tspan>
                </text>
                <text id="OF. 313" style={{...textStyle, transform: "matrix(0,-1.185,1.185,0,1263.162,785.015)"}}>
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">3</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">3</tspan><tspan  y="0" className="t1"></tspan>
                </text>
                <text id="OF. 314" style={{...textStyle, transform: "matrix(0,-1.185,1.185,0,1148.246,785.015)"}}>
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">3</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">4</tspan><tspan  y="0" className="t1"></tspan>
                </text>
                <text id="OF. 315" style={{...textStyle, transform: "matrix(0,-1.185,1.185,0,1032.146,785.015)"}}>
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">3</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">5</tspan><tspan  y="0" className="t1"></tspan>
                </text>
                <text id="OF. 316" style={{...textStyle, transform: "matrix(0,-1.185,1.185,0,918.415,785.015)"}}>
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">3</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">6</tspan><tspan  y="0" className="t1"></tspan>
                </text>
                <text id="OF. 317" style={{...textStyle, transform: "matrix(0,-1.185,1.185,0,802.315,785.015)"}}>
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">3</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">7</tspan><tspan  y="0" className="t1"></tspan>
                </text>
                <text id="OF. 318" style={{...textStyle, transform: "matrix(0,-1.185,1.185,0,687.399,785.015)"}}>
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">3</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">8</tspan><tspan  y="0" className="t1"></tspan>
                </text>
                <text id="OF. 319" style={{...textStyle, transform: "matrix(0,-1.185,1.185,0,570.114,785.015)"}}>
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">3</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">9</tspan><tspan  y="0" className="t1"></tspan>
                </text>
                <text id="OF. 320" style={{...textStyle, transform: "matrix(0,-1.185,1.185,0,452.829,785.015)"}}>
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">3</tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">0</tspan><tspan  y="0" className="t1"></tspan>
                </text>
                <text id="OF. 321" style={{...textStyle, transform: "matrix(0,-1.185,1.185,0,339.098,785.015)"}}>
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">3</tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1"></tspan>
                </text>
                <text id="OF. 322" style={{...textStyle, transform: "matrix(0,-1.185,1.185,0,225.367,785.015)"}}>
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">3</tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1"></tspan>
                </text>
                <text id="OF. 323" style={{...textStyle, transform: "matrix(0,-1.185,1.185,0,106.898,785.015)"}}>
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">3</tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">3</tspan><tspan  y="0" className="t1"></tspan>
                </text>
                <text id="SALA GRACE  HOPPER" style={{...textStyle,fontSize: 30, transform: "matrix(1.185,0,0,1.185,1760.126,309.477)"}}>
                    <tspan x="-39" y="0" className="t1">S</tspan><tspan  y="0" className="t1">A</tspan><tspan  y="0" className="t1">L</tspan><tspan  y="0" className="t1">A</tspan><tspan  y="0" className="t1"></tspan>
                    <tspan x="-56.2" y="36" className="t1">G</tspan><tspan  y="36" className="t1">R</tspan><tspan  y="36" className="t1">A</tspan><tspan  y="36" className="t1">C</tspan><tspan  y="36" className="t1">E</tspan><tspan  y="36" className="t1"> </tspan><tspan  y="36" className="t1"></tspan>
                        <tspan x="-61.1" y="72" className="t1">H</tspan><tspan  y="72" className="t1">O</tspan><tspan  y="72" className="t1">P</tspan><tspan  y="72" className="t1">P</tspan><tspan  y="72" className="t1">E</tspan><tspan  y="72" className="t1">R</tspan>
                    </text>
                <text id="SALA ADA LOVELACE" style={{...textStyle, fontSize: 30, transform: "matrix(1.185,0,0,1.185,1541.75,308.488)"}}>
                    <tspan x="-39" y="0" className="t1">S</tspan><tspan  y="0" className="t1">A</tspan><tspan  y="0" className="t1">L</tspan><tspan  y="0" className="t1">A</tspan><tspan  y="0" className="t1"></tspan>
                    <tspan x="-31.8" y="36" className="t1">A</tspan><tspan  y="36" className="t1">D</tspan><tspan  y="36" className="t1">A</tspan><tspan  y="36" className="t1"></tspan>
                        <tspan x="-77.8" y="72" className="t1">L</tspan><tspan  y="72" className="t1">O</tspan><tspan  y="72" className="t1">V</tspan><tspan  y="72" className="t1">E</tspan><tspan  y="72" className="t1">L</tspan><tspan  y="72" className="t1">A</tspan><tspan  y="72" className="t1">C</tspan><tspan  y="72" className="t1">E</tspan><tspan  y="72" className="t1"></tspan>
                    </text>
                <text id="PRINTER" style={{...textStyle, fontSize: 30, transform: "matrix(0,-1.185,1.185,0,1390.719,361.351)"}}>
                    <tspan x="-64.2" y="0" className="t1">P</tspan><tspan  y="0" className="t1">R</tspan><tspan  y="0" className="t1">I</tspan><tspan  y="0" className="t1">N</tspan><tspan  y="0" className="t1">T</tspan><tspan  y="0" className="t1">E</tspan><tspan  y="0" className="t1">R</tspan>
                </text>
                <text id="-2" style={{...textStyle, fontSize: 25, transform: "matrix(1.185,0,0,1.185,1050.903,480.747)"}}>
                    <tspan x="-19.9" y="0" className="t1">escalera</tspan>
                </text>
                <text id="LAB. ANAKENA" style={{...textStyle, fontSize: 30, transform: "matrix(1.185,0,0,1.185,851.071,308.488)"}}>
                    <tspan x="-34" y="0" className="t1">L</tspan><tspan  y="0" className="t1">A</tspan><tspan  y="0" className="t1">B</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"></tspan>
                    <tspan x="-72.5" y="36" className="t1">A</tspan><tspan  y="36" className="t1">N</tspan><tspan  y="36" className="t1">A</tspan><tspan  y="36" className="t1">K</tspan><tspan  y="36" className="t1">E</tspan><tspan  y="36" className="t1">N</tspan><tspan  y="36" className="t1">A</tspan><tspan  y="36" className="t1"></tspan>
                    </text>
                <text id="COCINA" style={{...textStyle, fontSize: 30, transform: "matrix(0,-1.185,1.185,0,1866.357,757.488)"}}>
                    <tspan x="-58.7" y="0" className="t1">C</tspan><tspan  y="0" className="t1">O</tspan><tspan  y="0" className="t1">C</tspan><tspan  y="0" className="t1">I</tspan><tspan  y="0" className="t1">N</tspan><tspan  y="0" className="t1">A</tspan><tspan  y="0" className="t1"></tspan>
                </text>
                <text id="SISTEMAS" style={{...textStyle, fontSize: 25, transform: "matrix(1.185,0,0,1.185,1740.779,791.844)"}}>
                    <tspan x="-64.9" y="0" className="t3">S</tspan><tspan  y="0" className="t3">I</tspan><tspan  y="0" className="t3">S</tspan><tspan  y="0" className="t3">T</tspan><tspan  y="0" className="t3">E</tspan><tspan  y="0" className="t3">M</tspan><tspan  y="0" className="t3">A</tspan><tspan  y="0" className="t3">S</tspan><tspan  y="0" className="t3"></tspan>
                </text>
                <text id="LAB. COLOSSUS" style={{...textStyle, fontSize: 30, transform: "matrix(1.185,0,0,1.185,378.377,302.565)"}}>
                    <tspan x="-34" y="0" className="t1">L</tspan><tspan  y="0" className="t1">A</tspan><tspan  y="0" className="t1">B</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"></tspan>
                    <tspan x="-81.5" y="36" className="t1">C</tspan><tspan  y="36" className="t1">O</tspan><tspan  y="36" className="t1">L</tspan><tspan  y="36" className="t1">O</tspan><tspan  y="36" className="t1">S</tspan><tspan  y="36" className="t1">S</tspan><tspan  y="36" className="t1">U</tspan><tspan  y="36" className="t1">S</tspan>
                    </text>
                <text id="LAB. ENIAC" style={{...textStyle,fontSize: 30, transform: "matrix(1.185,0,0,1.185,147.362,301.38)"}}>
                    <tspan x="-34" y="0" className="t1">L</tspan><tspan  y="0" className="t1">A</tspan><tspan  y="0" className="t1">B</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"></tspan>
                    <tspan x="-45.6" y="36" className="t1">E</tspan><tspan  y="36" className="t1">N</tspan><tspan  y="36" className="t1">I</tspan><tspan  y="36" className="t1">A</tspan><tspan  y="36" className="t1">C</tspan>
                    </text>
                <text id="SALA PHILLIPE &quot;ALGORITHMIX&quot; FLAJ" style={{...textStyle, fontSize: 24, transform: "matrix(1.185,0,0,1.185,612.947,285.979)"}}>
                    <tspan x="-28.6" y="0" className="t4">S</tspan><tspan  y="0" className="t4">A</tspan><tspan  y="0" className="t4">L</tspan><tspan  y="0" className="t4">A</tspan><tspan  y="0" className="t4"></tspan>
                    <tspan x="-47.2" y="26.4" className="t4">P</tspan><tspan  y="26.4" className="t4">H</tspan><tspan  y="26.4" className="t4">I</tspan><tspan  y="26.4" className="t4">L</tspan><tspan  y="26.4" className="t4">L</tspan><tspan  y="26.4" className="t4">I</tspan><tspan  y="26.4" className="t4">P</tspan><tspan  y="26.4" className="t4">E</tspan><tspan  y="26.4" className="t4"></tspan>
                        <tspan x="-87.1" y="52.8" className="t4">&quot;A</tspan><tspan  y="52.8" className="t4">L</tspan><tspan  y="52.8" className="t4">G</tspan><tspan  y="52.8" className="t4">O</tspan><tspan  y="52.8" className="t4">R</tspan><tspan  y="52.8" className="t4">I</tspan><tspan  y="52.8" className="t4">T</tspan><tspan  y="52.8" className="t4">H</tspan><tspan  y="52.8" className="t4">M</tspan><tspan  y="52.8" className="t4">I</tspan><tspan  y="52.8" className="t4">X</tspan><tspan  y="52.8" className="t4">&quot;</tspan><tspan  y="52.8" className="t4"></tspan>
                        <tspan x="-51.9" y="79.2" className="t4">F</tspan><tspan  y="79.2" className="t4">L</tspan><tspan  y="79.2" className="t4">A</tspan><tspan  y="79.2" className="t4">J</tspan><tspan  y="79.2" className="t4">O</tspan><tspan  y="79.2" className="t4">L</tspan><tspan  y="79.2" className="t4">E</tspan><tspan  y="79.2" className="t4">T</tspan><tspan  y="79.2" className="t4"></tspan>
                    </text>

                
            </svg>
        </div>
    </div>
);
}
export default PonientePiso3