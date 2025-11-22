import { useNavigate } from "react-router-dom";
import { svgStyle, shapeBaseStyle, textStyle, handleHover } from "../styles"

const NortePiso3 = () => {
    const navigate = useNavigate();
    const routeChange = (path: string) => navigate(path);

    return (
    <div>
        <h1 className="center">PISO 3 NORTE</h1>
        <svg 
            version="1.2" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1920 1080" 
            width="1920" 
            height="1080"
            style={svgStyle}
        >	        
            <defs>
                <image  width="2608" height="1113" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACjAAAARZAQMAAABU10nBAAAAAXNSR0IB2cksfwAAAANQTFRF////p8QbyAAACVlJREFUeJzt0AEJADAMwLDPv+mbCAxGo6B0XoDZDrihjUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPRRqKNRBuJNhJtJNpItJFoI9FGoo1EG4k2Em0k2ki0kWgj0UaijUQbiTYSbSTaSLSRaCPxAYkHBFpLYV69AAAAAElFTkSuQmCC"/>
            </defs>
            <style>{`
                tspan { white-space:pre } 
                .s0 { fill: #8cf773 } 
                .t1 { font-size: 24px;fill: #ffffff;font-weight: 400;font-family: "DejaVuSans", "DejaVu Sans" } 
                .t2 { font-size: 30px;fill: #ffffff;font-weight: 400;font-family: "DejaVuSans", "DejaVu Sans" } 
                .t3 { font-size: 28px;fill: #ffffff;font-weight: 400;font-family: "DejaVuSans", "DejaVu Sans" } 
                .t4 { font-size: 22px;fill: #ffffff;font-weight: 400;font-family: "DejaVuSans", "DejaVu Sans" } 
                .t5 { font-size: 18px;fill: #ffffff;font-weight: 400;font-family: "DejaVuSans", "DejaVu Sans" } 
            `}</style>
            <use id="Layer 1" href="#img1" x="-362" y="-24"/>
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 44" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1908.37 145v196.36h-328.66v-196.36z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 43" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1908.37 772.92v149.11h-123.91v-149.11z"
            />
            <path
                style={{...shapeBaseStyle, fill: "#6f6867", cursor: "default"}}
                id="Shape 42" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1260.38 606.28v91.75l-119.14-0.34v-91.75z"
            />
            <path
                style={{...shapeBaseStyle, fill: "#6f6867", cursor: "default"}}
                id="Shape 40" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1260.49 481.01v122.86h-119.7v-122.86z"
            />
            <path
                style={{...shapeBaseStyle, fill: "#6f6867", cursor: "default"}}
                id="Shape 39" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1341.35 356.06v121.8h-84.01v-121.8z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 38" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1455.8 537.71v156.46h-111.3v-156.46z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 37" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1455.8 353.96v181.65h-111.3v-181.65z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 36" 
                fill-rule="evenodd" 
                className="s0" 
                d="m722.67 540.77v160.85h-235v-160.85z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 35" 
                fill-rule="evenodd" 
                className="s0" 
                d="m723.13 364.46v173.25h-235.71v-173.25z"
            />
            <path
                style={{...shapeBaseStyle, fill: "#6f6867", cursor: "default"}}
                id="Shape 34" 
                fill-rule="evenodd" 
                className="s0" 
                d="m890.8 364.46v214.21h-164.69v-214.21z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 32" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1782.36 772.92v149.11h-98.7v-149.11z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 31" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1681.56 772.92v149.11h-101.85v-149.11z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 30" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1577.61 772.92v149.11h-100.81v-149.11z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 29" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1474.7 772.92v149.11h-101.85v-149.11z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 28" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1370.75 772.92v149.11h-100.81v-149.11z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 27" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1267.84 771.87v150.16h-100.8v-150.16z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 26" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1164.94 771.87v150.16h-101.85v-150.16z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 25" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1060.99 771.87v150.16h-98.71v-150.16z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 24" 
                fill-rule="evenodd" 
                className="s0" 
                d="m960.18 771.87v150.16h-102.9v-150.16z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 23" 
                fill-rule="evenodd" 
                className="s0" 
                d="m855.18 771.87v150.16h-100.8v-150.16z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 22" 
                fill-rule="evenodd" 
                className="s0" 
                d="m752.28 771.87v150.16h-102.91v-150.16z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 21" 
                fill-rule="evenodd" 
                className="s0" 
                d="m647.27 771.87v150.16h-99.75v-150.16z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 20" 
                fill-rule="evenodd" 
                className="s0" 
                d="m545.42 771.87v150.16h-101.85v-150.16z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 19" 
                fill-rule="evenodd" 
                className="s0" 
                d="m441.47 771.87v150.16h-99.76v-150.16z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 18" 
                fill-rule="evenodd" 
                className="s0" 
                d="m340.66 771.87v150.16h-106.05v-150.16z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 17" 
                fill-rule="evenodd" 
                className="s0" 
                d="m422.56 539.81v169.06h-410.56v-169.06z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 15" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1908.92 344.51v368.56h-391.72v-368.56z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 12" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1577.61 145v132.3h-135.46v-132.3z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 11" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1440.05 145v132.3h-102.9v-132.3z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 10" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1335.05 145v132.3h-99.76v-132.3z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 9" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1233.19 145v132.3h-126v-132.3z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 8" 
                fill-rule="evenodd" 
                className="s0" 
                d="m1105.09 145v132.3h-110.26v-132.3z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 7" 
                fill-rule="evenodd" 
                className="s0" 
                d="m992.73 145v132.3h-135.45v-132.3z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 6" 
                fill-rule="evenodd" 
                className="s0" 
                d="m855.18 145v145.96h-100.8v-145.96z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 5" 
                fill-rule="evenodd" 
                className="s0" 
                d="m752.28 145v145.96h-101.86v-145.96z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 4" 
                fill-rule="evenodd" 
                className="s0" 
                d="m648.32 145v145.96h-100.8v-145.96z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 3" 
                fill-rule="evenodd" 
                className="s0" 
                d="m545.42 145v145.96h-101.85v-145.96z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 2" 
                fill-rule="evenodd" 
                className="s0" 
                d="m441.47 145v145.96h-111.31v-145.96z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 1" 
                fill-rule="evenodd" 
                className="s0" 
                d="m328.06 145v145.96h-249.91v-145.96z"
            />
            <path
                onClick={() => routeChange("/auditorio-detigny")}
                onMouseEnter={(e) => handleHover(e, true)} 
                onMouseLeave={(e) => handleHover(e, false)} 
                style={shapeBaseStyle}
                id="Shape 16" 
                fill-rule="evenodd" 
                className="s0" 
                d="m423.61 358.16v179.55h-411.61v-179.55z"
            />
            <text id="OFISALITA" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,389.631,219.387)"}} >
                <tspan x="-60.8" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">I</tspan><tspan  y="0"className="t1">S</tspan><tspan  y="0"className="t1">A</tspan><tspan  y="0"className="t1">L</tspan><tspan  y="0"className="t1">I</tspan><tspan  y="0"className="t1">T</tspan><tspan  y="0"className="t1">A
        </tspan>
            </text>
            <text id="DIRECCION" style={{...textStyle, transform: "matrix(1.05,0,0,1.05,1746.661,253.154)"}} >
                <tspan x="-84.3" y="0"className="t2">DIRECCION
        </tspan>
            </text>
            <text id="OF. 331" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,504.085,219.387)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">1
        </tspan>
            </text>
            <text id="SALA 341" style={{...textStyle, transform: "matrix(1.05,0,0,1.05,1402.249,439.01)"}} >
                <tspan x="-36.4" y="0"className="t3">S</tspan><tspan  y="0"className="t3">A</tspan><tspan  y="0"className="t3">L</tspan><tspan  y="0"className="t3">A</tspan><tspan  y="0"className="t3">
        </tspan>
                <tspan x="-26.7" y="33.6"className="t3">3</tspan><tspan  y="33.6"className="t3">4</tspan><tspan  y="33.6"className="t3">1</tspan><tspan  y="33.6"className="t3">
        </tspan>
            </text>
            <text id="SALA 342" style={{...textStyle, transform: "matrix(1.05,0,0,1.05,1402.249,608.066)"}} >
                <tspan x="-36.4" y="0"className="t3">S</tspan><tspan  y="0"className="t3">A</tspan><tspan  y="0"className="t3">L</tspan><tspan  y="0"className="t3">A</tspan><tspan  y="0"className="t3">
        </tspan>
                <tspan x="-26.7" y="33.6"className="t3">3</tspan><tspan  y="33.6"className="t3">4</tspan><tspan  y="33.6"className="t3">2</tspan><tspan  y="33.6"className="t3">
        </tspan>
            </text>
            <text id="COCINA" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,1308.504,416.437)"}} >
                <tspan x="-46.9" y="0"className="t1">C</tspan><tspan  y="0"className="t1">O</tspan><tspan  y="0"className="t1">C</tspan><tspan  y="0"className="t1">I</tspan><tspan  y="0"className="t1">N</tspan><tspan  y="0"className="t1">A
        </tspan>
            </text>
            <text id="OF. 318" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,1858.482,851.153)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">1</tspan><tspan  y="0"className="t1">8
        </tspan>
            </text>
            <text id="OF. 317" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,1744.028,851.153)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">1</tspan><tspan  y="0"className="t1">7</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 316" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,1640.074,851.153)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">1</tspan><tspan  y="0"className="t1">6</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 315" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,1537.171,851.153)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">1</tspan><tspan  y="0"className="t1">5</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 314" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,1432.167,851.153)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">1</tspan><tspan  y="0"className="t1">4</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 313" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,1329.263,851.153)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">1</tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 312" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,1226.36,851.153)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">1</tspan><tspan  y="0"className="t1">2</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 311" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,1123.456,851.153)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">1</tspan><tspan  y="0"className="t1">1</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 310" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,1020.552,851.153)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">1</tspan><tspan  y="0"className="t1">0</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 309" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,916.599,851.153)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">0</tspan><tspan  y="0"className="t1">9</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 308" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,814.745,851.153)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">0</tspan><tspan  y="0"className="t1">8</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 307" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,712.891,851.153)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">0</tspan><tspan  y="0"className="t1">7</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 306" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,607.888,851.153)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">0</tspan><tspan  y="0"className="t1">6</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 305" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,503.934,851.153)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">0</tspan><tspan  y="0"className="t1">5</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 304" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,399.98,851.153)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">0</tspan><tspan  y="0"className="t1">4</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 303" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,298.127,851.153)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">0</tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="BAÑO MUJERES" style={{...textStyle, transform: "matrix(1.05,0,0,1.05,1200.642,538.764)"}} >
                <tspan x="-32" y="0"className="t4">B</tspan><tspan  y="0"className="t4">A</tspan><tspan  y="0"className="t4">Ñ</tspan><tspan  y="0"className="t4">O</tspan><tspan  y="0"className="t4">
        </tspan>
                <tspan x="-49.3" y="26.4"className="t4">M</tspan><tspan  y="26.4"className="t4">U</tspan><tspan  y="26.4"className="t4">J</tspan><tspan  y="26.4"className="t4">E</tspan><tspan  y="26.4"className="t4">R</tspan><tspan  y="26.4"className="t4">E</tspan><tspan  y="26.4"className="t4">S</tspan><tspan  y="26.4"className="t4">
        </tspan>
            </text>
            <text id="BAÑO UNIVERSAL" style={{...textStyle, transform: "matrix(1.05,0,0,1.05,1201.29,649.018)"}} >
                <tspan x="-26.1" y="0"className="t5">B</tspan><tspan  y="0"className="t5">A</tspan><tspan  y="0"className="t5">Ñ</tspan><tspan  y="0"className="t5">O</tspan><tspan  y="0"className="t5">
        </tspan>
                <tspan x="-51.1" y="21.6"className="t5">U</tspan><tspan  y="21.6"className="t5">N</tspan><tspan  y="21.6"className="t5">I</tspan><tspan  y="21.6"className="t5">V</tspan><tspan  y="21.6"className="t5">E</tspan><tspan  y="21.6"className="t5">R</tspan><tspan  y="21.6"className="t5">S</tspan><tspan  y="21.6"className="t5">A</tspan><tspan  y="21.6"className="t5">L</tspan><tspan  y="21.6"className="t5">
        </tspan>
            </text>
            <text id="OF. 330" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,608.039,219.387)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">0</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="SALA FUNDADORES" style={{...textStyle, transform: "matrix(1.05,0,0,1.05,606.321,444.261)"}} >
                <tspan x="-36.4" y="0"className="t3">S</tspan><tspan  y="0"className="t3">A</tspan><tspan  y="0"className="t3">L</tspan><tspan  y="0"className="t3">A</tspan><tspan  y="0"className="t3">
        </tspan>
                <tspan x="-98.1" y="33.6"className="t3">F</tspan><tspan  y="33.6"className="t3">U</tspan><tspan  y="33.6"className="t3">N</tspan><tspan  y="33.6"className="t3">D</tspan><tspan  y="33.6"className="t3">A</tspan><tspan  y="33.6"className="t3">D</tspan><tspan  y="33.6"className="t3">O</tspan><tspan  y="33.6"className="t3">R</tspan><tspan  y="33.6"className="t3">E</tspan><tspan  y="33.6"className="t3">S</tspan><tspan  y="33.6"className="t3">
        </tspan>
            </text>
            <text id="BAÑO HOMBRES" style={{...textStyle, transform: "matrix(1.05,0,0,1.05,807.928,467.361)"}} >
                <tspan x="-40.7" y="0"className="t3">B</tspan><tspan  y="0"className="t3">A</tspan><tspan  y="0"className="t3">Ñ</tspan><tspan  y="0"className="t3">O</tspan><tspan  y="0"className="t3">
        </tspan>
                <tspan x="-70.7" y="33.6"className="t3">H</tspan><tspan  y="33.6"className="t3">O</tspan><tspan  y="33.6"className="t3">M</tspan><tspan  y="33.6"className="t3">B</tspan><tspan  y="33.6"className="t3">R</tspan><tspan  y="33.6"className="t3">E</tspan><tspan  y="33.6"className="t3">S</tspan><tspan  y="33.6"className="t3">
        </tspan>
            </text>
            <text id="SALA EFRAIN" style={{...textStyle, transform: "matrix(1.05,0,0,1.05,606.321,612.266)"}} >
                <tspan x="-36.4" y="0"className="t3">S</tspan><tspan  y="0"className="t3">A</tspan><tspan  y="0"className="t3">L</tspan><tspan  y="0"className="t3">A</tspan><tspan  y="0"className="t3">
        </tspan>
                <tspan x="-50.2" y="33.6"className="t3">E</tspan><tspan  y="33.6"className="t3">F</tspan><tspan  y="33.6"className="t3">R</tspan><tspan  y="33.6"className="t3">A</tspan><tspan  y="33.6"className="t3">I</tspan><tspan  y="33.6"className="t3">N</tspan><tspan  y="33.6"className="t3">
        </tspan>
            </text>
            <text id="OF. 329" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,710.942,219.387)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">2</tspan><tspan  y="0"className="t1">9</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 328" style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,814.896,219.387)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">2</tspan><tspan  y="0"className="t1">8</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="LABORATORIO LORENZO" style={{...textStyle, transform: "matrix(1.05,0,0,1.05,216.757,464.211)"}} >
                <tspan x="-184.9" y="0"className="t2">L</tspan><tspan  y="0"className="t2">A</tspan><tspan  y="0"className="t2">B</tspan><tspan  y="0"className="t2">O</tspan><tspan  y="0"className="t2">R</tspan><tspan  y="0"className="t2">A</tspan><tspan  y="0"className="t2">T</tspan><tspan  y="0"className="t2">O</tspan><tspan  y="0"className="t2">R</tspan><tspan  y="0"className="t2">I</tspan><tspan  y="0"className="t2">O</tspan><tspan  y="0"className="t2"> </tspan><tspan  y="0"className="t2">L</tspan><tspan  y="0"className="t2">O</tspan><tspan  y="0"className="t2">R</tspan><tspan  y="0"className="t2">E</tspan><tspan  y="0"className="t2">N</tspan><tspan  y="0"className="t2">Z</tspan><tspan  y="0"className="t2">O
        </tspan>
            </text>
            <text id="LABORATORIO DICHATO" style={{...textStyle, transform: "matrix(1.05,0,0,1.05,216.757,636.417)"}} >
                <tspan x="-179.9" y="0"className="t2">L</tspan><tspan  y="0"className="t2">A</tspan><tspan  y="0"className="t2">B</tspan><tspan  y="0"className="t2">O</tspan><tspan  y="0"className="t2">R</tspan><tspan  y="0"className="t2">A</tspan><tspan  y="0"className="t2">T</tspan><tspan  y="0"className="t2">O</tspan><tspan  y="0"className="t2">R</tspan><tspan  y="0"className="t2">I</tspan><tspan  y="0"className="t2">O</tspan><tspan  y="0"className="t2"> </tspan><tspan  y="0"className="t2">D</tspan><tspan  y="0"className="t2">I</tspan><tspan  y="0"className="t2">C</tspan><tspan  y="0"className="t2">H</tspan><tspan  y="0"className="t2">A</tspan><tspan  y="0"className="t2">T</tspan><tspan  y="0"className="t2">O</tspan><tspan  y="0"className="t2">
        </tspan>
            </text>
            <text id="OF. 327 " style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,934.6,209.937)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">2</tspan><tspan  y="0"className="t1">7</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 325 " style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,1181.359,209.937)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">2</tspan><tspan  y="0"className="t1">5</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 324 " style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,1294.763,209.937)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">2</tspan><tspan  y="0"className="t1">4</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 323 " style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,1396.616,209.937)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">2</tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 322 " style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,1517.371,209.937)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">2</tspan><tspan  y="0"className="t1">2</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="OF. 326 " style={{...textStyle, transform: "matrix(0,-1.05,1.05,0,1059.555,209.937)"}} >
                <tspan x="-45" y="0"className="t1">O</tspan><tspan  y="0"className="t1">F</tspan><tspan  y="0"className="t1">.</tspan><tspan  y="0"className="t1"> </tspan><tspan  y="0"className="t1">3</tspan><tspan  y="0"className="t1">2</tspan><tspan  y="0"className="t1">6</tspan><tspan  y="0"className="t1">
        </tspan>
            </text>
            <text id="SALITA" style={{...textStyle, transform: "matrix(1.05,0,0,1.05,198.907,231.103)"}} >
                <tspan x="-51.1" y="0"className="t2">S</tspan><tspan  y="0"className="t2">A</tspan><tspan  y="0"className="t2">L</tspan><tspan  y="0"className="t2">I</tspan><tspan  y="0"className="t2">T</tspan><tspan  y="0"className="t2">A
        </tspan>
            </text>
            <text id="AUDITORIO RAMON PICARTE" style={{...textStyle, transform: "matrix(1.05,0,0,1.05,1720.41,503.063)"}} >
                <tspan x="-84.8" y="0"className="t2">A</tspan><tspan  y="0"className="t2">U</tspan><tspan  y="0"className="t2">D</tspan><tspan  y="0"className="t2">I</tspan><tspan  y="0"className="t2">T</tspan><tspan  y="0"className="t2">O</tspan><tspan  y="0"className="t2">R</tspan><tspan  y="0"className="t2">I</tspan><tspan  y="0"className="t2">O</tspan><tspan  y="0"className="t2">
        </tspan>
                <tspan x="-56" y="36"className="t2">R</tspan><tspan  y="36"className="t2">A</tspan><tspan  y="36"className="t2">M</tspan><tspan  y="36"className="t2">O</tspan><tspan  y="36"className="t2">N</tspan><tspan  y="36"className="t2">
        </tspan>
                <tspan x="-62.2" y="72"className="t2">P</tspan><tspan  y="72"className="t2">I</tspan><tspan  y="72"className="t2">C</tspan><tspan  y="72"className="t2">A</tspan><tspan  y="72"className="t2">R</tspan><tspan  y="72"className="t2">T</tspan><tspan  y="72"className="t2">E</tspan><tspan  y="72"className="t2">
        </tspan>
            </text>
        </svg>
        <div className="mainContainer">
        </div>
    </div>
);
}
export default NortePiso3