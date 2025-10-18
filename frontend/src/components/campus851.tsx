import { useNavigate } from "react-router-dom";

export default function PlanoInteractivo() {
    const navigate = useNavigate(); 
    const routeChange = (path: string) =>{ 
        navigate(path);
    }

    return (
    <div className="flex flex-col items-center">
        <h1 className="center">{851}</h1>

        <div
        className="mainContainer"
        style={{
            maxWidth: "1920px",
        }}
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid meet"
            style={{
            width: "100%",
            height: "auto",
            display: "block",
            }}
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

          {/* Áreas clickeables */}
            <path
            id="Shape 1"
            className="shape"
            d="m352.41 0v959h-352.41v-959z"
            onClick={() => routeChange("/edificio-norte")}
            />
            <path
            id="Shape 2"
            className="shape"
            d="m1920 759.81v304.19h-1521v-304.19z"
            onClick={() => routeChange("/edificio-poniente")}
            />
            <path
            id="Shape 3"
            className="shape"
            d="m1463.05 0v257.4h-962.05v-257.4z"
            onClick={() => routeChange("/edificio-oriente")}
            />
            <path
            id="Shape 4"
            className="shape"
            d="m1920 339v319h-492.54v-319z"
            onClick={() => routeChange("/auditorio-detigny")}
            />
            <path
            id="Shape 5"
            className="shape"
            d="m1029.09 679c-38.21 0-69.09-31.07-69.09-69.5 0-38.43 30.88-69.5 69.09-69.5 38.2 0 69.09 31.07 69.09 69.5 0 38.43-30.89 69.5-69.09 69.5z"
            onClick={() => routeChange("/plaza-central")}
            />

          {/* Textos */}
            <text
            id="EDIFICIO NORTE"
            style={{ transform: "matrix(0,-1,1,0,195,737.5)" }}
            >
            <tspan className="t1">EDIFICIO NORTE</tspan>
            </text>
            <text
            id="EDIFICIO ORIENTE"
            style={{ transform: "matrix(1,0,0,1,688,141)" }}
            >
            <tspan className="t1">EDIFICIO ORIENTE</tspan>
            </text>
            <text
            id="EDIFICIO PONIENTE"
            style={{ transform: "matrix(1,0,0,1,863,946)" }}
            >
            <tspan className="t1">EDIFICIO PONIENTE</tspan>
            </text>
            <text
            id="AUDITORIO DETIGNY"
            style={{ transform: "matrix(1,0,0,1,1525,490)" }}
            >
            <tspan className="t1">AUDITORIO</tspan>
            <tspan x="0" dy="64" className="t1">
                D'ENTIGNY
            </tspan>
            </text>
            <text id="PLAZA CENTRAL" style={{ transform: "matrix(1,0,0,1,1000,635)" }}>
            <tspan className="t1">-1</tspan>
            </text>
        </svg>
        </div>

        <style>{`
        .shape {
            fill: #98de5d;
            cursor: pointer;
            transition: all 0.25s ease;
            transform-origin: center;
        }

        .shape:hover {
            fill: #7cd957;
            transform: scale(1.02);
            filter: drop-shadow(0 0 10px #7cd957);
        }

        .shape:active {
            fill: #5cb947;
            transform: scale(0.96);
            filter: drop-shadow(0 0 6px #5cb947);
        }

        .t1 {
            font-size: 64px;
            fill: #ffffff;
            font-family: "DejaVu Sans", sans-serif;
            font-weight: 400;
            user-select: none;
            pointer-events: none;
        }
        `}</style>
    </div>
    );
}
