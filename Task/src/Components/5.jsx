import { useState } from "react";

const Five = () => {
  const [color, setColor] = useState("");
  const [hoverColor, setHoverColor] = useState("");

  function RandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${r}, ${g}, ${b})`;
    return randomColor;
  }

  const handlerRandomColor = () => {
    setColor(RandomColor());
  };
  const handleMouseEnter = () => {
    setHoverColor(RandomColor());
  };
  const handleMouseLeave = () => {
    setHoverColor("");
  };

  return (
    <div>
      <div className="flex gap-5">
        <div
          style={{ backgroundColor: color }}
          className="h-40 w-40 rounded-lg border"
        ></div>
        <div
          style={{ backgroundColor: hoverColor || color }}
          className="h-40 w-40 rounded-lg border cursor-pointer flex items-center justify-center font-semibold text-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hoverColor}
        </div>
      </div>
      <button
        onClick={handlerRandomColor}
        className="font-semibold px-8 py-2 rounded-lg bg-purple-600 text-white mt-2"
      >
        Change Color
      </button>
    </div>
  );
};

export default Five;
