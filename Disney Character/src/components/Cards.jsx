import Card from "./Card";
import { useState } from "react";
import Popup from "./Popup";
const Cards = () => {
  const Information = [
    {
      name: "Rosetta",
      movie: "Tinkerbell",
      color1: "#AB1A1D",
      color2: "#CF5355",
      text: "rgb(249 115 22)",
      img: "Rosetta.png",
    },
    {
      name: "Sadness",
      movie: "Inside Out",
      color1: "#0B2768",
      color2: "#047EBF",
      text: "rgb(14 165 233)",
      img: "Sadness.png",
    },
    {
      name: "Disgust",
      movie: "Inside Out",
      color1: "#13432D",
      color2: "#5C9141",
      text: "rgb(74 222 128)",
      img: "Disgust.png",
    },
    {
      name: "Judy",
      movie: "Zootopia",
      color1: "#182C4D",
      color2: "#31588F",
      text: "rgb(129 140 248)",
      img: "Judy.png",
    },
    {
      name: "Moana",
      movie: "Moana",
      color1: "#CB392C",
      color2: "#C99877",
      text: " rgb(254 215 170)",
      img: "Moana.png",
    },
    {
      name: "Vanellope",
      movie: "Wreck it ralph",
      color1: "#077256",
      color2: "#BFAC9B",
      text: "white",
      img: "Vanellope.png",
    },
  ];
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const togglePopup = (id) => {
    setSelectedId(id);
    setIsPopupOpen((prev) => !prev);
  };

  return (
    <div className="h-full w-full px-10 pt-48 pb-10 overflow-hidden relative flex items-center gap-20 justify-evenly flex-wrap">
      {Information.map((item, idx) => {
        return (
          <>
            <Card id={idx} data={item} togglePopup={togglePopup} />
          </>
        );
      })}

      {selectedId !== null && isPopupOpen && (
        <Popup
          data={Information[selectedId]}
          togglePopup={() => setIsPopupOpen(false)}
          isPopupOpen={isPopupOpen}
        />
      )}
    </div>
  );
};

export default Cards;
