import { useNavigate } from "react-router-dom";

const Campus851 = () => {
    const navigate = useNavigate();
    const routeChange = (path: string) => navigate(path);

    const svgStyle = {
        width: "150%",
        height: "auto",
        display: "block",
    };

    const shapeBaseStyle = {
        fill: "#AF4C0F",
        cursor: "pointer",
        transition: "all 0.25s ease",
        transformOrigin: "center",
    };

    const textStyle = {
        fontSize: 64,
        fill: "#ffffff",
        fontFamily: '"DejaVu Sans", sans-serif',
        fontWeight: 400,
        userSelect: "none" as const,
        pointerEvents: "none" as const,
    };

    const handleHover = (e: React.MouseEvent<SVGPathElement>, isHover: boolean) => {
        const shape = e.currentTarget;
        shape.style.fill = isHover ? "#e86718" : "#AF4C0F";
        shape.style.transform = isHover ? "scale(1.02)" : "scale(1)";
        shape.style.filter = isHover
            ? "drop-shadow(0 0 10px #e86718)"
            : "drop-shadow(0 0 0 transparent)";
    };

    return (
    <div>
        <h1 className="center">851</h1>

        <div className="mainContainer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1920 1080"
                preserveAspectRatio="xMidYMid meet"
                style={svgStyle}
            >
                <defs>
                <image
                    width="1920"
                    height="1080"
                    id="img1"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAQ4AQMAAADSHVMAAAAAAXNSR0IB2cksfwAAAANQTFRF////p8QbyAAABJhJREFUeJztzwENACAMwDDu3zQuTlJWBducz8zrgG0N6xrWNaxrWNewrmFdw7qGdQ3rGtY1rGtY17CuYV3DuoZ1Desa1jWsa1jXsK5hXcO6hnUN6xrWNaxrWNewrmFdw7qGdQ3rGtY1rLsXPQQ5U8N4bAAAAABJRU5ErkJggg=="
                />
                </defs>

                <use id="Layer 4" href="#img1" x="0" y="0" />

                <path
                    d="m352.41 0v959h-352.41v-959z"
                    style={shapeBaseStyle}
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                    onClick={() => routeChange("/851/norte")}
                />
                <path
                    d="m1920 759.81v304.19h-1521v-304.19z"
                    style={shapeBaseStyle}
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                    onClick={() => routeChange("/851/poniente")}
                />
                <path
                    d="m1463.05 0v257.4h-962.05v-257.4z"
                    style={shapeBaseStyle}
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                    onClick={() => routeChange("/edificio-oriente")}
                />
                <path
                    d="m1920 339v319h-492.54v-319z"
                    style={shapeBaseStyle}
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                    onClick={() => routeChange("/auditorio-detigny")}
                />
                <path
                    d="m1029.09 679c-38.21 0-69.09-31.07-69.09-69.5 0-38.43 30.88-69.5 69.09-69.5 38.2 0 69.09 31.07 69.09 69.5 0 38.43-30.89 69.5-69.09 69.5z"
                    style={shapeBaseStyle}
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                    onClick={() => routeChange("/851/pisos-inferiores")}
                />

                <text style={{ ...textStyle, transform: "matrix(0,-1,1,0,195,737.5)" }}>
                    <tspan>EDIFICIO NORTE</tspan>
                </text>
                <text style={{ ...textStyle, transform: "matrix(1,0,0,1,688,141)" }}>
                    <tspan>EDIFICIO ORIENTE</tspan>
                </text>
                <text style={{ ...textStyle, transform: "matrix(1,0,0,1,863,946)" }}>
                    <tspan>EDIFICIO PONIENTE</tspan>
                </text>
                <text style={{ ...textStyle, transform: "matrix(1,0,0,1,1525,490)" }}>
                    <tspan>AUDITORIO</tspan>
                    <tspan x="0" dy="64">D'ENTIGNY</tspan>
                </text>
                <text style={{ ...textStyle, transform: "matrix(1,0,0,1,1000,635)" }}>
                    <tspan>-1</tspan>
                </text>
            </svg>
        </div>
    </div>
);
}
export default Campus851;