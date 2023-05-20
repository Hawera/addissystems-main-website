import React from "react";

const Button = ({ text, width, py, bg, color, bgHover, textHover }) => {
  return (
    <button
      className={` ${bg} text-${color} text-center ${bgHover} hover:text-${textHover} rounded-[4px] duration-300`}
      style={{
        width: `${width}px`,
        padding: `${py}px 0`,
      }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  bg: "bg-addispink",
  color: "white",
  py: 6,
  width: 140,
};

export default Button;
