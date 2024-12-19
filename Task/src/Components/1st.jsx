import { useState } from "react";

const One = () => {
  const [color, setColor] = useState(false);
  const handleChange = () => {
    setColor(!color);
  };
  return (
    <div>
      <h1
        onClick={handleChange}
        className={`${color ? "text-red-800" : ""} text-2xl cursor-pointer`}
      >
        Hello World
      </h1>
    </div>
  );
};

export default One;
