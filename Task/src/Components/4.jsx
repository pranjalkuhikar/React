import { useState } from "react";

const Four = () => {
  const [toggle, setToggle] = useState(false);
  const handlerToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <button
        onClick={handlerToggle}
        className={`px-5 py-2 font-semibold rounded-xl text-white cursor-pointer active:scale-95 ${
          toggle ? " bg-red-600" : " bg-green-600"
        }`}
      >
        {toggle ? "Remove" : "Show"}
      </button>
      <img
        className={` ${toggle ? "h-60 w-96" : ""}`}
        src={
          toggle
            ? "https://plus.unsplash.com/premium_photo-1733864821625-8c5914eb183e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            : ""
        }
        alt=""
      />
    </div>
  );
};

export default Four;
