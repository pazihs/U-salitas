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
    fontSize: 35,
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

export { svgStyle, shapeBaseStyle, textStyle, handleHover }