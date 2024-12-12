import { X } from "lucide-react";

/* eslint-disable react/prop-types */
const Popup = ({ togglePopup, isPopupOpen, data }) => {
  return (
    <>
      {isPopupOpen && (
        <div className="absolute flex items-center justify-center w-full h-full backdrop-blur-sm">
          <div
            style={{
              background: `linear-gradient(to top right, ${data.color1}, ${data.color2})`,
            }}
            className="bg-white relative top-20 left-80 w-full h-full rounded-[15em]"
          >
            <div className="w-[50%] h-[60%] absolute -top-[10em] right-[65em] z-50">
              <img
                src={data.img}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <button
              className="px-4 py-2 mt-4 absolute -top-20 left-[70em] text-white bg-red-500 rounded hover:bg-red-600"
              onClick={togglePopup}
            >
              <X />
            </button>
            <div className="flex items-center justify-center flex-col gap-3 mt-10">
              <div
                style={{ color: `${data.text}` }}
                className="text-[6em] font-bold text-orange-400"
                x
              >
                {data.name}
              </div>
              <div className="text-white font-light text-4xl">
                Movie <span className="font-semibold">{data.movie}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
