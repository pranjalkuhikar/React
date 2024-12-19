import { useState } from "react";

const Two = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="px-4 py-2 rounded-lg text-white font-semibold bg-blue-600 active:scale-95"
      >
        {click ? "You Click" : "Click Me"}
      </button>
    </div>
  );
};

export default Two;
