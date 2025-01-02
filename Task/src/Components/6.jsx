import { useRef } from "react";

const Six = () => {
  const colorRef = useRef(null);
  const divRef = useRef(null);

  const handlerColor = (value) => {
    colorRef.current.click();
    divRef.current.style.backgroundColor = value;
  };
  return (
    <div
      onClick={handlerColor}
      ref={divRef}
      className="m-2 bg-zinc-500 h-40 w-96 rounded-md"
    >
      <input
        ref={colorRef}
        type="color"
        hidden
        onChange={(e) => handlerColor(e.target.value)}
      />
    </div>
  );
};

export default Six;
