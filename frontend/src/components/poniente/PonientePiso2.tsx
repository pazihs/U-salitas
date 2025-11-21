import { useNavigate } from "react-router-dom";

const PonientePiso2 = () => {
    const navigate = useNavigate();
    const routeChange = (path: string) => navigate(path);

    const svgStyle = {
        width: "100%",
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
        fontSize: 27,
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
        <h1 className="center">PISO 2 PONIENTE</h1>

        <div className="mainContainer">
            <svg 
            version="1.2" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1920 1080"
            width="1920" 
            height="1080"
            style={svgStyle}
            >
                <defs>
                    <image  width="2616" height="1164" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACjgAAASMAQMAAAAF84SpAAAAAXNSR0IB2cksfwAAAANQTFRF////p8QbyAAACcVJREFUeJzt0AEJADAMwLDPv+mbCAxGo6B0XoTZDjiij0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NPhp9NPpo9NHoo9FHo49GH40+Gn00+mj00eij0Uejj0YfjT4afTT6aPTR6KPRR6OPRh+NDxCIBI3dCM2dAAAAAElFTkSuQmCC"/>
                </defs>
                <use id="Layer 1" href="#img1" x="-247" y="-51"/>
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 24"
                    fill-rule="evenodd"
                    className="s0"
                    d="m1890.86 507.56v321.44h-56.13v-321.44z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 23"
                    fill-rule="evenodd"
                    className="s0"
                    d="m1832.18 595.57v233.43h-172.2v-233.43z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 22"
                    fill-rule="evenodd"
                    className="s0"
                    d="m1657.43 595.57v233.43h-113.52v-233.43z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 21"
                    fill-rule="evenodd"
                    className="s0"
                    d="m1541.36 595.57v233.43h-113.53v-233.43z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 20"
                    fill-rule="evenodd"
                    className="s0"
                    d="m1425.28 595.57v233.43h-113.52v-233.43z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 19"
                    fill-rule="evenodd"
                    className="s0"
                    d="m1309.21 595.57v233.43h-116.08v-233.43z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 18"
                    fill-rule="evenodd"
                    className="s0"
                    d="m1190.58 595.57v233.43h-112.25v-233.43z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 17"
                    fill-rule="evenodd"
                    className="s0"
                    d="m1075.78 595.57v233.43h-113.53v-233.43z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 16"
                    fill-rule="evenodd"
                    className="s0"
                    d="m959.7 595.57v233.43h-113.52v-233.43z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 15"
                    fill-rule="evenodd"
                    className="s0"
                    d="m843.63 595.57v233.43h-114.8v-233.43z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 14"
                    fill-rule="evenodd"
                    className="s0"
                    d="m726.28 595.57v233.43h-112.25v-233.43z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 13"
                    fill-rule="evenodd"
                    className="s0"
                    d="m611.48 595.57v233.43h-113.53v-233.43z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 12"
                    fill-rule="evenodd"
                    className="s0"
                    d="m495.4 595.57v233.43h-114.8v-233.43z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 11"
                    fill-rule="evenodd"
                    className="s0"
                    d="m378.05 595.57v233.43h-113.52v-233.43z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 10"
                    fill-rule="evenodd"
                    className="s0"
                    d="m261.97 595.57v233.43h-112.24v-233.43z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 9"
                    fill-rule="evenodd"
                    className="s0"
                    d="m147.17 595.57v233.43h-112.24v-233.43z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 8"
                    fill-rule="evenodd"
                    className="s0"
                    d="m474.99 255v183.68h-440.06v-183.68z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 7"
                    fill-rule="evenodd"
                    className="s0"
                    d="m981.46 255v247.46h-503.99v-247.46z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 6"
                    fill-rule="evenodd"
                    className="s0"
                    d="m1890.86 255v158.17h-230.88v-158.17z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 5"
                    fill-rule="evenodd"
                    className="s0"
                    d="m1657.43 255v247.46h-114.8v-247.46z"
                />
                <path
                    style={{...shapeBaseStyle, cursor: "default"}}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 4"
                    fill-rule="evenodd"
                    className="s0"
                    d="m1087.9 486c-44.79 0-81-36.8-81-82.33 0-45.54 36.21-82.34 81-82.34 44.79 0 80.99 36.8 80.99 82.34 0 45.53-36.2 82.33-80.99 82.33z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 3"
                    fill-rule="evenodd"
                    className="s0"
                    d="m1438.04 334.08v168.38h-99.5v-168.38z"
                />
                <path
                    style={shapeBaseStyle}
                    onClick={() => routeChange("/auditorio-detigny")}
                    onMouseEnter={(e) => handleHover(e, true)} 
                    onMouseLeave={(e) => handleHover(e, false)} 
                    id="Shape 2"
                    fill-rule="evenodd"
                    className="s0"
                    d="m1540.08 255v247.46h-99.49v-247.46z"
                />
                <text id="LAB.  TOQUI" style={{...textStyle, transform: "matrix(1.276,.006,-0.006,1.276,737.814,365.986)"}} >
                    <tspan x="-38.8" y="0" className="t1">L</tspan><tspan  y="0" className="t1">A</tspan><tspan  y="0" className="t1">B</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">
            </tspan>
                    <tspan x="-48.2" y="36" className="t1">T</tspan><tspan  y="36" className="t1">O</tspan><tspan  y="36" className="t1">Q</tspan><tspan  y="36" className="t1">U</tspan><tspan  y="36" className="t1">I</tspan><tspan  y="36" className="t1">
            </tspan>
                </text>
                <text id="SECRETARIA DOCENTE" style={{...textStyle, transform: "matrix(1.276,0,0,1.276,1774.784,325.156)"}} >
                    <tspan x="-74.2" y="0" className="t2">S</tspan><tspan  y="0" className="t2">E</tspan><tspan  y="0" className="t2">C</tspan><tspan  y="0" className="t2">R</tspan><tspan  y="0" className="t2">E</tspan><tspan  y="0" className="t2">T</tspan><tspan  y="0" className="t2">A</tspan><tspan  y="0" className="t2">R</tspan><tspan  y="0" className="t2">I</tspan><tspan  y="0" className="t2">A</tspan><tspan  y="0" className="t2">
            </tspan>
                    <tspan x="-58.5" y="28.8" className="t2">D</tspan><tspan  y="28.8" className="t2">O</tspan><tspan  y="28.8" className="t2">C</tspan><tspan  y="28.8" className="t2">E</tspan><tspan  y="28.8" className="t2">N</tspan><tspan  y="28.8" className="t2">T</tspan><tspan  y="28.8" className="t2">E
            </tspan>
                </text>
                <text id="PRINTER" style={{...textStyle, fontSize: 24, transform: "matrix(0,-1.276,1.276,0,1402.321,419.547)"}} >
                    <tspan x="-51.3" y="0" className="t2">P</tspan><tspan  y="0" className="t2">R</tspan><tspan  y="0" className="t2">I</tspan><tspan  y="0" className="t2">N</tspan><tspan  y="0" className="t2">T</tspan><tspan  y="0" className="t2">E</tspan><tspan  y="0" className="t2">R
            </tspan>
                </text>
                <text id="COCINA" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,1877.466,676.562)"}} >
                    <tspan x="-58.7" y="0" className="t1">C</tspan><tspan  y="0" className="t1">O</tspan><tspan  y="0" className="t1">C</tspan><tspan  y="0" className="t1">I</tspan><tspan  y="0" className="t1">N</tspan><tspan  y="0" className="t1">A
            </tspan>
                </text>
                <text id="JEFA ESTUDIOS" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,1590.304,376.795)"}} >
                    <tspan x="-25.1" y="0" className="t2">J</tspan><tspan  y="0" className="t2">E</tspan><tspan  y="0" className="t2">F</tspan><tspan  y="0" className="t2">A</tspan><tspan  y="0" className="t2">
            </tspan>
                    <tspan x="-61.2" y="28.8" className="t2">E</tspan><tspan  y="28.8" className="t2">S</tspan><tspan  y="28.8" className="t2">T</tspan><tspan  y="28.8" className="t2">U</tspan><tspan  y="28.8" className="t2">D</tspan><tspan  y="28.8" className="t2">I</tspan><tspan  y="28.8" className="t2">O</tspan><tspan  y="28.8" className="t2">S</tspan><tspan  y="28.8" className="t2">
            </tspan>
                </text>
                <text id="NICLABS" style={{...textStyle, transform: "matrix(1.276,0,0,1.276,249.219,357.044)"}} >
                    <tspan x="-64.6" y="0" className="t1">N</tspan><tspan  y="0" className="t1">I</tspan><tspan  y="0" className="t1">C</tspan><tspan  y="0" className="t1">L</tspan><tspan  y="0" className="t1">A</tspan><tspan  y="0" className="t1">B</tspan><tspan  y="0" className="t1">S
            </tspan>
                </text>
                <text id="AUXILIARES ASEO" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,1482.681,377.453)"}} >
                    <tspan x="-70.7" y="0" className="t2">A</tspan><tspan  y="0" className="t2">U</tspan><tspan  y="0" className="t2">X</tspan><tspan  y="0" className="t2">I</tspan><tspan  y="0" className="t2">L</tspan><tspan  y="0" className="t2">I</tspan><tspan  y="0" className="t2">A</tspan><tspan  y="0" className="t2">R</tspan><tspan  y="0" className="t2">E</tspan><tspan  y="0" className="t2">S</tspan><tspan  y="0" className="t2">
            </tspan>
                    <tspan x="-32.9" y="28.8" className="t2">A</tspan><tspan  y="28.8" className="t2">S</tspan><tspan  y="28.8" className="t2">E</tspan><tspan  y="28.8" className="t2">O
            </tspan>
                </text>
                <text id="3" style={{...textStyle, fontSize: 25, transform: "matrix(1.276,0,0,1.276,1087.259,422.098)"}} >
                    <tspan x="-45.7" y="-5" className="t3">escalera
            </tspan>
                </text>
                <text id="SALA REUNIONES" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,1732.704,712.925)"}} >
                    <tspan x="-33.8" y="0" className="t4">S</tspan><tspan  y="0" className="t4">A</tspan><tspan  y="0" className="t4">L</tspan><tspan  y="0" className="t4">A</tspan><tspan  y="0" className="t4">
            </tspan>
                    <tspan x="-76.7" y="31.2" className="t4">R</tspan><tspan  y="31.2" className="t4">E</tspan><tspan  y="31.2" className="t4">U</tspan><tspan  y="31.2" className="t4">N</tspan><tspan  y="31.2" className="t4">I</tspan><tspan  y="31.2" className="t4">O</tspan><tspan  y="31.2" className="t4">N</tspan><tspan  y="31.2" className="t4">E</tspan><tspan  y="31.2" className="t4">S
            </tspan>
                </text>
                <text id="OF. 209" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,1615.213,715.634)"}} >
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">0</tspan><tspan  y="0" className="t1">9
            </tspan>
                </text>
                <text id="OF. 210" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,1500.413,715.634)"}} >
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">0</tspan><tspan  y="0" className="t1">
            </tspan>
                </text>
                <text id="OF. 211" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,1384.338,715.634)"}} >
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">
            </tspan>
                </text>
                <text id="OF. 212" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,1266.987,715.634)"}} >
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">
            </tspan>
                </text>
                <text id="OF. 213" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,1153.462,714.713)"}} >
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">3</tspan><tspan  y="0" className="t1">
            </tspan>
                </text>
                <text id="OF. 214" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,1037.387,715.634)"}} >
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">4</tspan><tspan  y="0" className="t1">
            </tspan>
                </text>
                <text id="OF. 215" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,921.311,715.634)"}} >
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">5</tspan><tspan  y="0" className="t1">
            </tspan>
                </text>
                <text id="OF. 216" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,798.858,715.634)"}} >
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">6</tspan><tspan  y="0" className="t1">
            </tspan>
                </text>
                <text id="OF. 217" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,687.884,715.634)"}} >
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">7</tspan><tspan  y="0" className="t1">
            </tspan>
                </text>
                <text id="OF. 218" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,570.533,715.634)"}} >
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">8</tspan><tspan  y="0" className="t1">
            </tspan>
                </text>
                <text id="OF. 219" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,454.458,715.634)"}} >
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">9
            </tspan>
                </text>
                <text id="OF. 220" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,337.107,715.634)"}} >
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">0</tspan><tspan  y="0" className="t1">
            </tspan>
                </text>
                <text id="OF. 221" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,221.031,715.634)"}} >
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">1</tspan><tspan  y="0" className="t1">
            </tspan>
                </text>
                <text id="OF. 222" style={{...textStyle, transform: "matrix(0,-1.276,1.276,0,108.782,715.634)"}} >
                    <tspan x="-56.2" y="0" className="t1">O</tspan><tspan  y="0" className="t1">F</tspan><tspan  y="0" className="t1">.</tspan><tspan  y="0" className="t1"> </tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">2</tspan><tspan  y="0" className="t1">
            </tspan>
                </text>
            </svg>
        </div>
    </div>
);
}
export default PonientePiso2